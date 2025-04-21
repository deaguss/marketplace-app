import React from "react";
import { View, Text, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const ProductDetails = ({ product }: { product: any }) => {
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
    <>
      <Image
        source={imageMapping[product.id % Object.keys(imageMapping).length]}
        style={globalStyles.productImage}
      />
      <Text style={globalStyles.productTitle}>{product.title}</Text>
      <Text style={globalStyles.productCategory}>{product.category}</Text>
      <Text style={globalStyles.productDescription}>{product.description}</Text>
      <Text style={globalStyles.sectionTitleDetail}>Product Details</Text>
      <Text style={globalStyles.productText}>
        Color: {product.color || "Default"}
      </Text>
      <Text style={globalStyles.productText}>Price: RP. {product.price}</Text>
    </>
  );
};

export default ProductDetails;
