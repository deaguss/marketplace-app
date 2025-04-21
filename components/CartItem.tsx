import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const CartItem = ({ item }: any) => {
  const imageMapping: { [key: string]: any } = {
    0: require("../assets/images/product1.jpg"),
    1: require("../assets/images/product2.jpg"),
    2: require("../assets/images/product3.jpg"),
    3: require("../assets/images/product4.jpg"),
    4: require("../assets/images/product5.jpg"),
    5: require("../assets/images/product6.jpg"),
    6: require("../assets/images/product7.jpg"),
    7: require("../assets/images/product8.jpg"),
    8: require("../assets/images/product9.jpg"),
    9: require("../assets/images/product10.jpg"),
  };

  return (
    <View style={styles.cartItem}>
      <Image
        source={imageMapping[item.id % Object.keys(imageMapping).length]}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.carTitle}>{item.name}</Text>
        <Text style={styles.carPrice}>RP. {item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: "#9CA3AF",
    marginRight: 12,
  },
  checkboxSelected: {
    backgroundColor: "#34D399",
    borderColor: "#34D399",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  carTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 3,
  },
  carPrice: {
    fontSize: 16,
    fontWeight: "500",
    color: "#10B981",
  },
});

export default CartItem;
