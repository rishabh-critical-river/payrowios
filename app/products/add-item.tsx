import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Modal,
  Button,
} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
// import PaymentSummary from './PaymentSummary';
import styles from '@/styles/add-item';
import ItemDropdownButton from '@/components/add-item/item-dropdown';
import ListItem from '@/components/add-item/list-item';
import FooterText from '@/components/footer';
import PanelView from '@/components/view/PanelView';
import { ScrollView } from 'react-native-gesture-handler';
import useStorageData from '@/apis/hooks/use-storage-data';
import { ProductTypes } from '@/typings/product';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import useProduct from '@/store/hooks/use-product';
import getProducts from '@/apis/queries/product/get-product';

function AddItems() {
  const router = useRouter();
  const { height } = Dimensions.get('window');
  const { user } = useStorageData('user', { decode: false });

  const safeRef = React.useRef<boolean>(false);
  const [loading, setLoading] = React.useState(false);
  const {
    state,
    updateProducts,
    updateItemIncrement,
    updateItemDecrement,
    updateCurrentID,
    // onSelectItems,
  } = useProduct();

  console.log(
    state?.purchaseBreakdown?.service.length,
    state?.purchaseBreakdown?.service
  );
  /**
   * Fetch Products from API
   */

  const fetchProducts = React.useCallback(async () => {
    setLoading(true);
    if (user?.token) {
      try {
        const { data } = await getProducts(user?.token);
        setLoading(false);
        if (data.data && data.data.length > 0) {
          const itemData = data.data;
          const categories = itemData.map((value) => {
            const items = value?.serviceItems?.map((item) => {
              return {
                _id: item._id,
                price: 1.5,
                quantity: 0,
                itemName: item.itemName,
                itemDescription: item.itemDescription,
                status: item.status,
              };
            });
            return {
              _id: value._id,
              serviceCode: value.serviceCode,
              serviceName: value.serviceName,
              status: value.status,
              serviceItems: items,
            };
          });
          // Store Data in Redux Store
          updateProducts(categories as ProductTypes[]);
        }
      } catch (error) {
        console.log(error);

        // setInterval(() => {
        //   setLoading(false);
        // }, 5000);
      }
    }
  }, [user?.token]);

  React.useEffect(() => {
    safeRef.current = true;
    if (safeRef.current) {
      void fetchProducts();
    }
    return () => {
      safeRef.current = false;
    };
  }, [user?.token]);

  /**
   * Fetch Products By QR Code
   */

  const [hasPermission, setHasPermission] = useState<null | boolean>(null);

  const [scannedData, setScannedData] = useState(null);
  const [isScannerVisible, setIsScannerVisible] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }: any) => {
    setScannedData(data);
    setIsScannerVisible(false);
    if (data) {
      await fetchOrderDetails(data);
    }
  };

  const fetchOrderDetails = async (data: any) => {
    const apiUrl = `https://payrowdev.uaenorth.cloudapp.azure.com/gateway/payrow/getQrCodeOrderDetails/${data}`;
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3RvcmUgb3duZXIiLCJpZCI6IjY0MTE1NGQwZWU2ZTMxNzdkNTZmM2UyNSIsInVzZXJJZCI6IlBSTUlENjgiLCJmaXJzdE5hbWUiOiJTdXByaXlhIiwibGFzdE5hbWUiOiJNIiwibWVyY2hhbnRJZCI6IlBSTUlENjgiLCJyZXBvcnRpbmdJRCI6IlBSTUlENjgiLCJzdG9yZUlkIjoiT3duZXIiLCJjb3VudHJ5IjoiSW5kaWEiLCJkaXN0cmlidXRvcklkIjoiZGlkNDE0NDYzIiwibW9iaWxlTnVtYmVyIjo5NzE5NDkwNzgxNzE2LCJlbWFpbElkIjoibWVyZ3Uuc3Vwcml5YUBjcml0aWNhbHJpdmVyLmNvbSIsImFkZHJlc3NEZXRhaWxzIjoiYXNkYWRhZCIsImJ1c2luZXNzVHlwZSI6Ikdyb2NlcnkgU3RvcmUiLCJib0JveCI6MTIzNDUsImlhdCI6MTY3OTM4MDQ4NH0.K8JV_tPcEcrMkIEXhKzFlVcWhNXkyokUcGPTmV2Ia0o',
        },
      });
      setOrderDetails(response.data);
      router.push({
        pathname: '/products/payment-summary',
        params: {
          orderDetails: response.data,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleOpenScanner = () => {
    setIsScannerVisible(true);
  };

  const handleCloseScanner = () => {
    setIsScannerVisible(false);
    setScannedData(null);
  };
  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera.</Text>;
  }
  return (
    <>
      <View style={{ display: 'flex', flex: 1, backgroundColor: 'white' }}>
        <View
          style={{
            position: 'absolute',
            right: 0,
            top: 76,
          }}
        >
          <Image
            source={require('@/assets/icons/Watermark.png')}
            style={{
              width: 36,
              height: 50,
            }}
          />
        </View>
        <View>
          <Modal visible={isScannerVisible} animationType="slide">
            <View style={{ flex: 1 }}>
              <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={{
                  width: '50%',
                  height: '50%',
                }}
              />
              <Button title="Close Scanner" onPress={handleCloseScanner} />
            </View>
          </Modal>
        </View>
        <View
          style={{
            marginLeft: 19.98,
            marginTop: 17,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={router.back}>
            <Image
              source={require('@/assets/icons/arrow_back.png')}
              style={{
                width: 16.03,
                height: 16.03,
                marginRight: 35.98,
              }}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: '#4B5050',
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 16,
              }}
            >
              Welcome
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#333333',
                lineHeight: 20,
              }}
            >
              TID : 8327162
            </Text>
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '400',
            fontSize: 22,
            marginTop: 26,
            color: '#333333',
            lineHeight: 28,
          }}
        >
          Select Product
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 9,
            color: '#4B5050',
            fontSize: 14,
            fontWeight: '400',
          }}
        >
          You can Select multiple items
        </Text>
        <TouchableOpacity onPress={handleOpenScanner}>
          <View style={styles.buttonContainer}>
            <Text
              style={{
                marginLeft: 16,
                color: 'white',
                fontSize: 16,
                fontWeight: '500',
              }}
            >
              SCAN TO ADD
            </Text>

            <MaterialCommunityIcons
              style={{ marginRight: 16 }}
              name="barcode-scan"
              size={24}
              color="white"
            />
          </View>
        </TouchableOpacity>

        <PanelView
          show={
            !loading &&
            Number(state?.items?.length) >= 0 &&
            Number(state?.items?.length) <= 0
          }
        >
          <View
            style={{
              width: '80%',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              height: height / 1.7,
            }}
          >
            <Text>No items found</Text>
          </View>
        </PanelView>
        <PanelView show={loading}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <ActivityIndicator size={'large'} color={'#4B5050'} />
          </View>
        </PanelView>
        <PanelView show={!loading}>
          <ScrollView scrollEnabled={true}>
            {state.items &&
              state.items.map((parentItem, parentIndex) => {
                const totalQuantity = parentItem?.serviceItems?.reduce(
                  (acc, item) => acc + item.quantity,
                  0
                );
                return (
                  <React.Fragment key={parentIndex}>
                    <ItemDropdownButton
                      active={state.currentID === parentItem._id}
                      name={parentItem.serviceName}
                      quantity={totalQuantity}
                      onPress={() => updateCurrentID(parentItem._id)}
                    />
                    <PanelView show={state.currentID === parentItem._id}>
                      {parentItem?.serviceItems?.length > 0 && (
                        <ScrollView
                          style={{
                            width: '80%',
                            height: 200,
                            marginTop: 20,
                            alignSelf: 'center',
                          }}
                        >
                          {parentItem?.serviceItems?.map((item, index) => {
                            return (
                              <TouchableOpacity
                                key={index}
                                onPress={() =>
                                  updateItemIncrement(parentItem._id, item._id)
                                }
                              >
                                <ListItem
                                  key={index}
                                  name={item.itemName}
                                  price={item.price}
                                  quantity={item.quantity}
                                  onAdd={() =>
                                    updateItemIncrement(
                                      parentItem._id,
                                      item._id
                                    )
                                  }
                                  onRemove={() =>
                                    updateItemDecrement(
                                      parentItem._id,
                                      item._id
                                    )
                                  }
                                />
                              </TouchableOpacity>
                            );
                          })}
                        </ScrollView>
                      )}
                    </PanelView>
                  </React.Fragment>
                );
              })}
          </ScrollView>
        </PanelView>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <View
          style={{
            position: 'absolute',
            left: 0,
            bottom: 20,
            zIndex: 999,
          }}
        >
          <Image
            source={require('@/assets/icons/Watermark.png')}
            style={{
              width: 36,
              height: 50,
            }}
          />
        </View>

        <PanelView show={!loading && Number(state.items?.length) > 0}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Total Price</Text>
            <View style={styles.priceTextContainer}>
              <Text style={styles.priceText}>{state?.total?.toFixed(2)}</Text>
              <Text style={styles.priceCurrency}>AED</Text>
            </View>
          </View>
        </PanelView>
        <TouchableOpacity
          style={styles.goToSummaryButton}
          onPress={() => {
            // navigation.navigate('PaymentSummary', {
            //   orderDetails,
            //   itemsWithQuantity,
            // });
            router.push('/products/payment-summary');
            // router.push({
            //   pathname: '/products/payment-summary',
            //   params: {
            //     orderDetails,
            //     itemsWithQuantity,
            //   },
            // });
          }}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>GO TO SUMMARY</Text>
            <View style={styles.arrowIcon}>
              <AntDesign name="arrowright" size={22} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        <FooterText />
      </View>
    </>
  );
}

export default AddItems;

// const [selected, setSelected] = useState<ProductTypes | null>(null);
// const [selectedItems, setSelectedItems] = useState<ItemTypes[]>([]);

/**
 * For Select Category
 */
// const onPressCategory = React.useCallback(
//   (category: ProductTypes) => {
//     if (selected === category) {
//       setSelected(null);
//       setScrollEnabled(true);
//     } else {
//       setSelected(category);
//       setScrollEnabled(false);
//     }
//   },
//   [selected]
// );

/**
 * For Select Category Item
 */
// const onPressCategoryItem = React.useCallback(
//   (item: ItemTypes) => {
//     const draft = [...selectedItems];
//     const findItem = draft.find(
//       (selectedItem) => selectedItem.id === item.id
//     );
//     if (findItem?.id === item.id) {
//       draft.splice(draft.indexOf(findItem), 1);
//     } else {
//       draft.push(item);
//     }
//     setSelectedItems(draft);
//   },
//   [selectedItems]
// );

/**
 * For Increment Item
 */
// const onPressItemIncrement = React.useCallback(
//   (parentId: any, item: ItemTypes) => {
//     if (state) {
//       const draft = [...state];
//       draft.forEach((currentItem) => {
//         if (currentItem.id === parentId) {
//           const innerItem = currentItem.serviceItems.find(
//             (currentItem) => currentItem.id === item.id
//           );
//           if (innerItem) {
//             innerItem.quantity += 1;
//           }
//         }
//       });
//       setState(draft);
//     }
//   },
//   [state]
// );
/**
 * For Decrement Item
 */
// const onPressItemDecrement = React.useCallback(
//   (parentId: any, item: ItemTypes) => {
//     if (state) {
//       const draft = [...state];
//       draft.forEach((currentItem) => {
//         if (currentItem.id === parentId) {
//           const innerItem = currentItem?.serviceItems?.find(
//             (currentItem) => currentItem.id === item.id
//           );
//           if (innerItem) {
//             if (innerItem.quantity > 0) {
//               innerItem.quantity = innerItem.quantity - 1;
//             }
//           }
//         }
//       });
//       setState(draft);
//     }
//   },
//   [state]
// );
