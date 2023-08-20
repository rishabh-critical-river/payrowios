import React from "react";
import styles from "@/styles/add-item";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View, Image, TouchableOpacity } from "react-native";
import truncateText from "@/utils/truncateText";
type Item = {
  name: string;
  price: number;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
};

const ListItem = ({ name, price, quantity, onAdd, onRemove }: Item) => {
  return (
    <View style={styles.itemContainer}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", marginTop: 6 }}>
          <Image
            style={{ width: 58, height: 55, marginLeft: 14 }}
            source={require("@/assets/icons/ellipse.png")}
          />
          <View
            style={{
              flexDirection: "column",
              marginLeft: 11,
              marginTop: 4,
            }}
          >
            <Text
              style={{
                marginBottom: 14.5,
                color: "#4B5050",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              {price.toFixed(2)} AED
            </Text>
            <Text
              style={{
                color: "#4B5050",
                fontSize: 12,
                fontWeight: "400",
              }}
            >
              {truncateText(name, 16)}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 14,
              marginTop: 6,
              justifyContent: "space-between",
              marginRight: 15,
              marginLeft: 10,
            }}
          >
            <TouchableOpacity onPress={onRemove}>
              <FontAwesome name="minus-circle" size={24} color="#4B5050" />
            </TouchableOpacity>

            <Text style={{ marginTop: 3 }}>{quantity}</Text>

            <TouchableOpacity onPress={onAdd}>
              <FontAwesome name="plus-circle" size={24} color="#4B5050" />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#4B5050",
                fontWeight: "500",
                fontSize: 10,
                letterSpacing: 0.1,
                marginTop: 2,
              }}
            >
              TOTAL
            </Text>
            <Text
              style={{
                color: "#4B5050",
                fontWeight: "500",
                fontSize: 12,
                letterSpacing: 0.1,
                marginRight: 15,
              }}
            >
              {(price * (quantity || 1)).toFixed(2)} AED
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ListItem;
