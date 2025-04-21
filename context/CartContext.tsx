import React, { createContext, useState, useContext } from "react";
import { Linking } from "react-native";

const CartContext = createContext<any>(null);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (car: any) => {
    const carExists = cartItems.some((item) => item.id === car.id);
    if (!carExists) {
      setCartItems((prevCart) => [...prevCart, car]);
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const checkout = async (customerDetails: any) => {
    try {
      const grossAmount = cartItems.reduce(
        (total, item) => total + Math.round(item.price),
        0
      );

      console.log(grossAmount);

      const response = await fetch("http://10.0.2.2:3000/api/snap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gross_amount: grossAmount,
          customer_details: customerDetails,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to initiate payment.");
      }

      const data = await response.json();

      if (data?.transaction?.redirect_url) {
        Linking.openURL(data.transaction.redirect_url).catch((err) =>
          console.error("Failed to open URL:", err)
        );
      } else {
        throw new Error("Payment URL not received");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      throw error;
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, checkout, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
