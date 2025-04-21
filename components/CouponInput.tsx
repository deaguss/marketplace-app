import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const CouponInput = ({ couponCode, setCouponCode, applyCoupon }: any) => (
  <View style={styles.couponContainer}>
    <TextInput
      style={styles.couponInput}
      placeholder="Enter coupon code"
      value={couponCode}
      onChangeText={setCouponCode}
    />
    <TouchableOpacity style={styles.applyButton} onPress={applyCoupon}>
      <Text style={styles.applyButtonText}>Apply</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  couponContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  couponInput: {
    flex: 1,
    height: 40,
    borderColor: "#D1D5DB",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#F9FAFB",
    fontSize: 15,
  },
  applyButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 10,
  },
  applyButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
  },
});

export default CouponInput;
