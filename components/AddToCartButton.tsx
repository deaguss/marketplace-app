import React from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const AddToCartButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity style={globalStyles.addToCartButton} onPress={onPress}>
    <Text style={globalStyles.addToCartButtonText}>Add to Cart</Text>
  </TouchableOpacity>
);

export default AddToCartButton;
