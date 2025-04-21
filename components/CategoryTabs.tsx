import React from "react";
import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const CategoryTabs = ({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: { id: number; title: string; image: any }[];
  activeCategory: number;
  setActiveCategory: (id: number) => void;
}) => {
  return (
    <View style={globalStyles.categoryTabContainer}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              globalStyles.categoryTab,
              activeCategory === item.id && globalStyles.activeCategoryTab,
            ]}
            onPress={() => setActiveCategory(item.id)}
          >
            <View style={globalStyles.categoryImageContainer}>
              <Image source={item.image} style={globalStyles.categoryImage} />
              <Text style={globalStyles.categoryText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CategoryTabs;
