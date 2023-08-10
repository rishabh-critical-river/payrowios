import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  FlatList,
  VirtualizedList,
} from 'react-native';
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useRouter } from 'expo-router';
// import PaymentSummary from './PaymentSummary';
import styles from '@/styles/add-item';
import ItemDropdownButton from '@/components/add-item/item-dropdown';
import ListItem from '@/components/add-item/list-item';
import itemData from '@/components/add-item/dummy';
import FooterText from '@/components/footer';
import PanelView from '@/components/view/PanelView';
import { FlashList } from '@shopify/flash-list';
import { ScrollView } from 'react-native-gesture-handler';
import useProduct from '@/apis/hooks/use-product';
import getProducts from '@/apis/queries/product/get-product';
import useStorageData from '@/apis/hooks/use-storage-data';

type Item = {
  _id: any;
  id: string;
  price: number;
  quantity: number;
  itemName: string;
  itemDescription: string;
  status: string;
};
type Response = {} & CategoryTypes;

type CategoryTypes = {
  _id: any;
  id: string;
  serviceCode: string;
  serviceName: string;
  status: string;
  serviceItems: Item[];
};

function AddItems() {
  // const {}=useHe
  const { height } = Dimensions.get('window');
  const router = useRouter();
  const {
    state,
    loading,
    selected,
    calculation,
    scrollEnabled,
    onPressCategory,
    onPressCategoryItem,
    onPressItemIncrement,
    onPressItemDecrement,
  } = useAddItems();

  // const [hasPermission, setHasPermission] = useState(null);
  // const [scannedData, setScannedData] = useState(null);
  // const [isScannerVisible, setIsScannerVisible] = useState(false);
  // const [orderDetails, setOrderDetails] = useState(null);
  // const [itemsWithQuantity, setItemsWithQuantity] = useState<CategoryTypes[]>(
  //   []
  // );
  // const [totalAmount, setTotalAmount] = useState(0);

  // useEffect(() => {
  //   (async () => {
  //     const { status, granted } =
  //       await BarCodeScanner.requestPermissionsAsync();
  //     setHasPermission(granted);
  //   })();
  // }, []);

  // useEffect(() => {
  //   const initialItems = categories.reduce((acc, category) => {
  //     const itemsWithInitialQuantity = category.items.map((item) => ({
  //       ...item,
  //     }));
  //     return [...acc, ...itemsWithInitialQuantity];
  //   }, []);
  //   setItemsWithQuantity(initialItems);
  // }, [categories]);
  // useEffect(() => {
  //   const total = itemsWithQuantity.reduce((acc, item) => {
  //     return acc + item.price * item.quantity;
  //   }, 0);

  //   setTotalAmount(total);
  // }, [itemsWithQuantity]);

  // const apiUrl =
  //   'https://payrowdev.uaenorth.cloudapp.azure.com/gateway/payrow/getQrCodeOrderDetails/000000024279';

  // const fetchOrderDetails = async () => {
  //   try {
  //     const response = await axios.get(apiUrl, {
  //       headers: {
  //         Authorization:
  //           'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3RvcmUgb3duZXIiLCJpZCI6IjY0MTE1NGQwZWU2ZTMxNzdkNTZmM2UyNSIsInVzZXJJZCI6IlBSTUlENjgiLCJmaXJzdE5hbWUiOiJTdXByaXlhIiwibGFzdE5hbWUiOiJNIiwibWVyY2hhbnRJZCI6IlBSTUlENjgiLCJyZXBvcnRpbmdJRCI6IlBSTUlENjgiLCJzdG9yZUlkIjoiT3duZXIiLCJjb3VudHJ5IjoiSW5kaWEiLCJkaXN0cmlidXRvcklkIjoiZGlkNDE0NDYzIiwibW9iaWxlTnVtYmVyIjo5NzE5NDkwNzgxNzE2LCJlbWFpbElkIjoibWVyZ3Uuc3Vwcml5YUBjcml0aWNhbHJpdmVyLmNvbSIsImFkZHJlc3NEZXRhaWxzIjoiYXNkYWRhZCIsImJ1c2luZXNzVHlwZSI6Ikdyb2NlcnkgU3RvcmUiLCJib0JveCI6MTIzNDUsImlhdCI6MTY3OTM4MDQ4NH0.K8JV_tPcEcrMkIEXhKzFlVcWhNXkyokUcGPTmV2Ia0o',
  //       },
  //     });

  //     setOrderDetails(response.data);
  //     console.log('response', response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleBarCodeScanned = async ({ data }) => {
  //   setScannedData(data);
  //   setIsScannerVisible(false);
  //   await fetchOrderDetails(); // Wait for the order details to be fetched.
  //   ///how to navigate to payment summary screen only after the order details are fetched?

  //   if (orderDetails) {
  //     // navigation.navigate('PaymentSummary', {
  //     //   orderDetails,
  //     // });
  //     router.push('/products/payment-summary');
  //   }
  // };

  const handleOpenScanner = () => {
    // setIsScannerVisible(true);
  };

  // const handleCloseScanner = () => {
  //   setIsScannerVisible(false);
  //   setScannedData(null);
  // };

  // if (hasPermission === null) {
  //   return <Text>Requesting camera permission...</Text>;
  // }

  // if (hasPermission === false) {
  //   return <Text>No access to the camera.</Text>;
  // }

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
        {/* <View>
          <Modal visible={isScannerVisible} animationType="slide">
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}
            >
              <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={{ width: '50%', height: '30%', marginTop: '60%' }}
              />
              <Button title="Close Scanner" onPress={handleCloseScanner} />
            </View>
          </Modal>
        </View> */}
        <View
          style={{
            marginLeft: 19.98,
            marginTop: 17,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('EnterPins');
              router.back();
            }}
          >
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
            !loading && Number(state?.length) >= 0 && Number(state?.length) <= 0
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
            {state &&
              state.map((parentItem, parentIndex) => {
                const totalQuantity = parentItem?.serviceItems?.reduce(
                  (acc, item) => acc + item.quantity,
                  0
                );
                return (
                  <React.Fragment key={parentIndex}>
                    <ItemDropdownButton
                      active={selected === parentItem}
                      name={parentItem.serviceName}
                      quantity={totalQuantity}
                      onPress={() => onPressCategory(parentItem)}
                    />
                    <PanelView show={selected?.id === parentItem.id}>
                      {/* {selected?.serviceItems.map((item, index) => {
                        return (
                          <TouchableOpacity
                            onPress={() => onPressCategoryItem(item)}
                          >
                            <View
                              style={{
                                width: '80%',
                                alignSelf: 'center',
                                justifyContent: 'space-between',
                              }}
                              key={index}
                            >
                              <Text>{item.quantity}</Text>
                              <TouchableOpacity
                                onPress={() =>
                                  onPressItemIncrement(parentItem.id, item)
                                }
                              >
                                <Text>Increase</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() =>
                                  onPressItemDecrement(parentItem.id, item)
                                }
                              >
                                <Text>Decrease</Text>
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                        );
                      })} */}
                      {selected && selected?.serviceItems?.length > 0 && (
                        <ScrollView
                          style={{
                            marginTop: 20,
                            alignSelf: 'center',
                            width: '80%',
                            height: 200,
                          }}
                        >
                          {selected?.serviceItems?.map((item, index) => {
                            return (
                              <TouchableOpacity
                                key={index}
                                onPress={() => onPressCategoryItem(item)}
                              >
                                <ListItem
                                  key={index}
                                  name={item.itemName}
                                  price={item.price}
                                  quantity={item.quantity}
                                  onAdd={() =>
                                    onPressItemIncrement(parentItem.id, item)
                                  }
                                  onRemove={() =>
                                    onPressItemDecrement(parentItem.id, item)
                                  }
                                />
                                {/* <View style={styles.itemContainer}>
                                  <View
                                    style={{
                                      flexDirection: 'row',
                                    }}
                                  >
                                    <View
                                      style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        marginTop: 6,
                                      }}
                                    >
                                      <Image
                                        style={{
                                          width: 58,
                                          height: 55,
                                          marginLeft: 14,
                                        }}
                                        source={require('@/assets/icons/ellipse.png')}
                                      />
                                      <View
                                        style={{
                                          flexDirection: 'column',
                                          marginLeft: 11,
                                        }}
                                      >
                                        <Text
                                          style={{
                                            marginBottom: 17,
                                            color: '#4B5050',
                                            fontSize: 14,
                                            fontWeight: '500',
                                          }}
                                        >
                                          {price.toFixed(2)} AED
                                        </Text>
                                        <Text
                                          style={{
                                            color: '#4B5050',
                                            fontSize: 12,
                                            fontWeight: '400',
                                          }}
                                        >
                                          {itemName}
                                        </Text>
                                      </View>
                                    </View>
                                    <View>
                                      <View
                                        style={{
                                          flexDirection: 'row',
                                          marginBottom: 14,
                                          marginTop: 6,
                                          justifyContent: 'space-between',
                                          marginRight: 15,
                                          marginLeft: 10,
                                        }}
                                      >
                                        <TouchableOpacity
                                          onPress={() =>
                                            onPressItemDecrement(
                                              parentItem.id,
                                              item
                                            )
                                          }
                                        >
                                          <FontAwesome
                                            name="minus-circle"
                                            size={24}
                                            color="#4B5050"
                                          />
                                        </TouchableOpacity>

                                        <Text>{quantity}</Text>

                                        <TouchableOpacity
                                          onPress={() =>
                                            onPressItemIncrement(
                                              parentItem.id,
                                              item
                                            )
                                          }
                                        >
                                          <FontAwesome
                                            name="plus-circle"
                                            size={24}
                                            color="#4B5050"
                                          />
                                        </TouchableOpacity>
                                      </View>
                                      <View style={{ flexDirection: 'row' }}>
                                        <Text
                                          style={{
                                            color: '#4B5050',
                                            fontWeight: '500',
                                            fontSize: 10,
                                            letterSpacing: 0.1,
                                            marginTop: 2,
                                          }}
                                        >
                                          TOTAL
                                        </Text>
                                        <Text
                                          style={{
                                            color: '#4B5050',
                                            fontWeight: '500',
                                            fontSize: 12,
                                            letterSpacing: 0.1,
                                            marginRight: 15,
                                          }}
                                        >
                                          {(price * (quantity || 1)).toFixed(
                                            2
                                          )}{' '}
                                          AED
                                        </Text>
                                      </View>
                                    </View>
                                  </View>
                                </View> */}
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

        <PanelView show={!loading && Number(state?.length) > 0}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Total Price</Text>
            <View style={styles.priceTextContainer}>
              <Text style={styles.priceText}>
                {calculation?.total?.toFixed(2)}
              </Text>
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

const useAddItems = () => {
  const { user } = useStorageData('user');
  const safeRef = React.useRef<boolean>(false);
  const [loading, setLoading] = React.useState(false);
  const [scrollEnabled, setScrollEnabled] = React.useState(true);
  const [state, setState] = React.useState<CategoryTypes[] | null>([]);

  const fetchProducts = React.useCallback(async () => {
    setLoading(true);
    if (user?.token) {
      try {
        const { data } = await getProducts(user?.token);
        if (data.data && data.data.length > 0) {
          const itemData = data.data as Response[];
          const categories = itemData.map((value) => {
            const items = value?.serviceItems?.map((item) => {
              return {
                id: item._id,
                price: 1.0,
                quantity: 0,
                itemName: item.itemName,
                itemDescription: item.itemDescription,
                status: item.status,
              };
            });
            return {
              id: value._id,
              serviceCode: value.serviceCode,
              serviceName: value.serviceName,
              status: value.status,
              serviceItems: items,
            };
          });
          setState(categories as CategoryTypes[]);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(true);
        setInterval(() => {
          setLoading(false);
        }, 5000);
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

  const [selected, setSelected] = useState<CategoryTypes | null>(null);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  // Calculate Meta Data
  const calculation = React.useMemo(() => {
    if (typeof state !== 'undefined') {
      const total = state?.reduce((acc, category) => {
        const categoryTotal = category?.serviceItems?.reduce((acc, item) => {
          return acc + item?.price * item?.quantity;
        }, 0);
        return acc + categoryTotal;
      }, 0);

      return {
        total,
      };
    }
  }, [state]);
  /**
   * For Select Category
   */
  const onPressCategory = React.useCallback(
    (category: CategoryTypes) => {
      if (selected === category) {
        setSelected(null);
        setScrollEnabled(true);
      } else {
        setSelected(category);
        setScrollEnabled(false);
      }
    },
    [selected]
  );

  /**
   * For Select Category Item
   */
  const onPressCategoryItem = React.useCallback(
    (item: Item) => {
      const draft = [...selectedItems];
      const findItem = draft.find(
        (selectedItem) => selectedItem.id === item.id
      );
      if (findItem?.id === item.id) {
        draft.splice(draft.indexOf(findItem), 1);
      } else {
        draft.push(item);
      }
      setSelectedItems(draft);
    },
    [selectedItems]
  );

  /**
   * For Increment Item
   */
  const onPressItemIncrement = React.useCallback(
    (parentId: any, item: Item) => {
      if (state) {
        const draft = [...state];
        draft.forEach((currentItem) => {
          if (currentItem.id === parentId) {
            const innerItem = currentItem.serviceItems.find(
              (currentItem) => currentItem.id === item.id
            );
            if (innerItem) {
              innerItem.quantity += 1;
            }
          }
        });
        setState(draft);
      }
    },
    [state]
  );
  /**
   * For Decrement Item
   */
  const onPressItemDecrement = React.useCallback(
    (parentId: any, item: Item) => {
      if (state) {
        const draft = [...state];
        draft.forEach((currentItem) => {
          if (currentItem.id === parentId) {
            const innerItem = currentItem?.serviceItems?.find(
              (currentItem) => currentItem.id === item.id
            );
            if (innerItem) {
              if (innerItem.quantity > 0) {
                innerItem.quantity = innerItem.quantity - 1;
              }
            }
          }
        });
        setState(draft);
      }
    },
    [state]
  );

  return {
    state,
    loading,
    selected,
    calculation,
    scrollEnabled,
    onPressCategory,
    onPressCategoryItem,
    onPressItemIncrement,
    onPressItemDecrement,
  };
};
