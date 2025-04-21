import React from "react";
import { View, FlatList, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import ProductCard from "../components/ProductCard";

const ProductList = ({
  products,
  navigation,
}: {
  products: any[];
  navigation: any;
}) => {
  return (
    <View>
      <Text style={globalStyles.sectionTitle}>Products</Text>
      <View style={globalStyles.productContainer}>
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard
              title={item.name}
              price={item.price}
              image={item.image}
              color={item.color ?? "Default"}
              onPress={() =>
                navigation.navigate("ProductDetails", { productId: item.id })
              }
            />
          )}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

export default ProductList;
