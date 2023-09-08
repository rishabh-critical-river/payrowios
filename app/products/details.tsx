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
import Svg, { SvgProps, Path } from "react-native-svg"
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
      return state.items.find((item) => item._id === params.id)
    }else{
      return null
    }
  },[state.items])
 
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
                    gap: 16,
                  }}
                >
                  <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  >
                    {/* <Image
                      source={require("@/assets/icons/mastercard.png")}
                      style={{
                        width: 51.62,
                        height: 32,
                      }}
                    /> */}
                    <SvgComponent
                    height={32}
                    width={32}
                    fill={'#4B5050'}
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
              <Text>{params.id}</Text>
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

const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <Path d="M416 64H96a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V128a64.07 64.07 0 0 0-64-64zm-80 64a48 48 0 1 1-48 48 48.05 48.05 0 0 1 48-48zM96 416a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81L172.37 416zm352-32a32 32 0 0 1-32 32H217.63l121.42-121.42a47.72 47.72 0 0 1 61.64-.16L448 333.84z" />
  </Svg>
)
 