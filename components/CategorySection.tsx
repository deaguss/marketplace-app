import React from "react";
import { View, Text, ScrollView } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import ProductCard from "./ProductCard";

const CategorySection = ({
  category,
  products,
  navigation,
}: {
  category: any;
  products: any[];
  navigation: any;
}) => (
  <View style={globalStyles.categorySection}>
    <Text style={globalStyles.categoryTitle}>{category.title}</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={globalStyles.productContainer}
    >
      {products.length > 0 ? (
        products.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price.toString()}
            image={item.image}
            color={item.color}
            onPress={() =>
              navigation.navigate("ProductDetails", {
                productId: item.id,
              })
            }
          />
        ))
      ) : (
        <Text style={globalStyles.noProductsText}>No products available</Text>
      )}
    </ScrollView>
  </View>
);

export default CategorySection;
