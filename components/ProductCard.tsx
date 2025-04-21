import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";

interface ProductCardProps {
  title: string;
  price: string;
  color: string;
  image: any;
  onPress: () => void;
}

const ProductCard = ({
  title,
  price,
  image,
  color,
  onPress,
}: ProductCardProps) => {
  return (
    <TouchableOpacity style={globalStyles.card} onPress={onPress}>
      <Image source={image} style={globalStyles.cardImage} />
      <Text style={globalStyles.cardTitle}>{title}</Text>
      <Text style={globalStyles.cardColor}>{color || "Default"}</Text>
      <Text style={globalStyles.cardPrice}>RP. {price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
