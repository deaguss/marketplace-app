import React, { useState } from "react";
import { View, FlatList, StyleSheet, Alert } from "react-native";
import { useCart } from "@/context/CartContext";
import CartItem from "../../components/CartItem";
import CouponInput from "../../components/CouponInput";
import BulkActions from "../../components/BulkActions";
import EmptyCartMessage from "../../components/EmptyCartMessage";
import { useUserContext } from "@/context/UserContext";

const CartScreen = ({ navigation }: { navigation: any }) => {
  const { cartItems, checkout, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const { user } = useUserContext();

  const handleBulkOrder = async () => {
    try {
      const customerDetails = {
        first_name: user?.username || "John Doe",
        email: user?.email || "john.doe@example.com",
      };

      const paymentUrl = await checkout(customerDetails);
      if (paymentUrl) {
        Alert.alert(
          "Success",
          "Your order has been placed. Redirecting to payment gateway"
        );
      }
    } catch (error) {
      Alert.alert("Error", "Failed to initiate payment.");
    }
  };

  const handleBulkRemove = () => {
    Alert.alert("Confirmation", "Are you sure you want to remove all items?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          clearCart([]);
          Alert.alert("Success", "All items have been removed from the cart.");
        },
      },
    ]);
  };

  const applyCoupon = () => {
    Alert.alert("Coupon Applied", `You have applied coupon: ${couponCode}`);
    setCouponCode("");
  };

  const renderItem = ({ item }: any) => <CartItem item={item} />;

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <EmptyCartMessage />
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.cartList}
          />
          <CouponInput
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            applyCoupon={applyCoupon}
          />
          <BulkActions
            handleBulkOrder={handleBulkOrder}
            handleBulkRemove={handleBulkRemove}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F3F4F6",
  },
  cartList: {
    paddingBottom: 20,
  },
});

export default CartScreen;
