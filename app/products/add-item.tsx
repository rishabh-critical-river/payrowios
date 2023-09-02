import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
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
import useProduct from '@/store/hooks/use-product';
import getProducts from '@/apis/queries/product/get-product';
import toast from '@/hooks/lib/toast';
import getProductByQR from '@/apis/queries/product/get-product-by-qr';
import BarCodeScannerScreen from '@/components/scanner';

function AddItems() {
  const router = useRouter();
  const { height } = Dimensions.get('window');
  const { user } = useStorageData('user', { decode: false });
  const { auth } = useStorageData('auth');

  const safeRef = React.useRef<boolean>(false);
  const [loading, setLoading] = React.useState(false);
  const {
    state,
    updateProducts,
    updateItemIncrement,
    updateItemDecrement,
    updateCurrentID,
    onUpdatePurchaseBreakdown,
  } = useProduct();

  const stateItems = state?.items;
  /**
   * Fetch Products
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
                price: 100,
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

    if (safeRef.current && stateItems?.length === 0) {
      fetchProducts();
    }
    return () => {
      safeRef.current = false;
    };
  }, [user?.token]);

  /**
   * Fetch Products By QR Code
   */

  const [showScanner, setShowScanner] = useState(false);
  const fetchOrderByQR = React.useCallback(
    async (data: string, token: string) => {
      console.log('QR Code Data', data);
      console.log('User Token', token);
      if (!token) {
        toast.show('User token is missing');
      }
      try {
        const response = await getProductByQR(data, token);
        if (response.data?.data?.length > 0) {
          const itemData = response.data.data as any;
          const categories = itemData.flatMap((value: any) => {
            return value?.purchaseBreakdown.service?.map((item: any) => {
              return {
                _id: item._id,
                englishName: item.englishName,
                quantity: item.quantity || 1,
                serviceCat: 'QR Code Category',
                serviceCode: item.serviceCode,
                totalAmount: item.totalAmount || 1,
                transactionAmount: item.transactionAmount || 1.5,
              };
            });
          });
          // Store Data in Redux Store
          onUpdatePurchaseBreakdown(categories as ProductTypes[]);
          router.push('/products/payment-summary');
        }
      } catch (error) {
        console.error(error);
      }
    },
    [router]
  );
  /**
   * Open Scanner
   */
  const onOpenScanner = React.useCallback(() => {
    setShowScanner(true);
  }, []);

  /**
   * Close Scanner
   */
  const onCloseScanner = React.useCallback(() => {
    setShowScanner(false);
  }, []);

  // console.log(user?.token);

  return (
    <>
      <BarCodeScannerScreen
        visible={showScanner}
        onClose={onCloseScanner}
        scannedData={(str) => fetchOrderByQR(str, user?.token)}
      />
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
              TID : {auth?.tid}
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
        <TouchableOpacity onPress={onOpenScanner}>
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
            <ActivityIndicator size="large" color="#4B5050" />
          </View>
        </PanelView>
        <PanelView show={!loading}>
          <ScrollView scrollEnabled>
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
            if (Number(state?.total?.toFixed(2)) <= 0) {
              toast.show('Please select atleast one item');
              return;
            }
            router.push('/products/payment-summary');
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
