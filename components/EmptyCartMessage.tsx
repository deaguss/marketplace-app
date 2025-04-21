import React from "react";
import { Text, StyleSheet } from "react-native";

const EmptyCartMessage = () => (
  <Text style={styles.emptyMessage}>Your cart is empty.</Text>
);

const styles = StyleSheet.create({
  emptyMessage: {
    fontSize: 18,
    fontWeight: "500",
    color: "#6B7280",
    textAlign: "center",
    marginTop: 50,
  },
});

export default EmptyCartMessage;
