import ImageIcon from "@/components/icons/ImageIcon";
import useProduct from "@/store/hooks/use-product";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Button } from "react-native-paper";
const ProductDetail = () => {
  const router = useRouter();
  const params=useLocalSearchParams()
 
  const {
    state,
    updateProducts,
    updateItemIncrement,
    updateItemDecrement,
    updateCurrentID,
    onUpdatePurchaseBreakdown,
  } = useProduct();

 

  const selectedProduct = React.useMemo(()=>{
    if(state.items.length>0){
      return state.items.find((item) => item._id === params.category_id)
    }else{
      return null
    }
  },[state.items])
 

  const toCart = React.useCallback((item_id:string) => {
    if(selectedProduct){
      router.push({
        pathname: "/products/cart",
        params: {
          item_id,
          category_id:selectedProduct._id,
        },
      });
    }
  } 
  , [selectedProduct]);

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            marginLeft: 19.98,
            marginTop: 17,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={router.back}>
            <Image
              source={require("@/assets/icons/arrow_back.png")}
              style={{
                width: 16.03,
                height: 16.03,
                marginRight: 35.98,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              color: "#4B5050",
              maxWidth: Dimensions.get("window").width /1.3,
            }}
            numberOfLines={1}
          >
            {toCapitilize(selectedProduct?.serviceName  || '')}
          </Text>
        </View>
        <View
          style={{
            margin: 32,
            maxWidth: "100%",
            gap: 16,
          }}
        >
          {
            selectedProduct ? (  
              selectedProduct.serviceItems.map((item,index) => {
              
                return (
                  <TouchableOpacity
                  key={index}
                  style={{
                    borderColor: "#dadada",
                    padding: 8,
                    borderRadius: 16,
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                  }}
                  onPress={()=>toCart(item._id)}
                  activeOpacity={0.8}
                >
                  <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    width: 80,
                    borderRadius: 8,
                    backgroundColor: "#F2F2F2",
                   
                  }}
                  >
                    {/* <Image
                      source={require("@/assets/icons/mastercard.png")}
                      style={{
                        width: 51.62,
                        height: 32,
                      }}
                    /> */}
                    <ImageIcon
                    height={48}
                    width={48}
                    fill="#000000"
                    opacity={0.2}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    <Text
                      style={{
                        color: "#4B5050",
                        fontWeight: "500",
                        fontSize: 14,
                        lineHeight: 20,
                      }}
                    >
                     {item.itemName}
                    </Text>
                    <Text
                      style={{
                        color: "#7f7f7f",
                        fontWeight: "400",
                        fontSize: 10,
                        lineHeight: 18,
                      }}
                    >
                      {item.itemDescription}
                    </Text>
                    <Text
                      style={{
                        color: "#4B5050",
                        fontWeight: "600",
                        fontSize: 14,
                        lineHeight: 18,
                      }}
                    >
                      ${item.price.toFixed(2)}
                    </Text>
                  </View>
                </TouchableOpacity>
                )
              })
            ):(
              <View style={{justifyContent:'center',alignItems:'center',height:Dimensions.get('window').height/2}}>
              <Text
              >No items found for this </Text>
              <Text>{params.category_id}</Text>
              <Button onPress={router.back}>Go Back</Button>
              </View>
            )
          }
         
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 0,
            bottom: 20,
            zIndex: 999,
          }}
        >
          <Image
            source={require("@/assets/onboarding/Watermark.png")}
            style={{
              width: 36,
              height: 50,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 12,
            backgroundColor: "white",
            color: "#7f7f7f",
            textAlign: "center",
            paddingBottom: 15,
          }}
        >
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
    </>
  );
};
export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    width: 150,
    height: 48.3,
    alignSelf: "center",
    marginTop: 33,
  },
  selectLanguage: {
    width: 163,
    height: 28,
    fontSize: 17,

    color: "#333333",
    fontWeight: "400",
    marginTop: 24.47,
    alignSelf: "center",
  },
  languageText: {
    fontSize: 14,
    paddingLeft: 16,
    fontWeight: "500",
    lineHeight: 20,
    justifyContent: "center",
    color: "#4B5050CC",
  },
  languages: {
    flexDirection: "column",

    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    width: 303,
    height: 20,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "400",
    color: "#4B5050",
    textAlign: "center",
    marginTop: 6,
    alignSelf: "center",
    marginBottom: 15,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  box: {
    display: "flex",
    borderWidth: 1,
    borderColor: "#4B505033",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 15,
    width: 328,
    height: 48,
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
    color: "#4B5050",

    padding: 10,
    fontSize: 20,
    height: 48,
    width: 328,
    cursor: "pointer",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  arrow: {
    display: "flex",
    position: "relative",
    borderWidth: 1,
    borderColor: "white",
    width: 40,
    height: 5,
    backgroundColor: "white",
  },
  arrowTriangle: {
    display: "flex",
    borderWidth: 1,
    position: "absolute",
    width: 20,
    height: 5,
    borderColor: "white",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderRightWidth: 1,
    transform: [{ rotate: "45deg" }],
    right: 9,
    top: 19,
  },
  arrowTriangleRight: {
    display: "flex",
    borderWidth: 1,
    position: "absolute",
    width: 20,
    height: 5,
    borderColor: "white",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    transform: [{ rotate: "-45deg" }],
    right: 9,
    top: 36,
  },
});


const toCapitilize = (str:string) => {
  const lower = str.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}


 

// const iosColors=[
//   '#ff3b30',
//   '#ff9500',
//   '#ffcc00',
//   '#4cd964',
//   '#5ac8fa',
//   '#007aff',
//   '#5856d6',
//   '#ff2d55',
//   '#8e8e93',
  
// ]
 