import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import SearchBar from "../../components/SearchBar";
import BannerSlider from "../../components/BannerSlider";
import CategoryTabs from "../../components/CategoryTabs";
import ProductList from "../../components/ProductList";
import { useProductContext } from "@/context/ProductContext";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { products, fetchProducts } = useProductContext();
  const [activeCategory, setActiveCategory] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const imageMapping: { [key: string]: any } = {
    0: require("../../assets/images/product1.jpg"),
    1: require("../../assets/images/product2.jpg"),
    2: require("../../assets/images/product3.jpg"),
    3: require("../../assets/images/product4.jpg"),
    4: require("../../assets/images/product5.jpg"),
    5: require("../../assets/images/product6.jpg"),
    6: require("../../assets/images/product7.jpg"),
    7: require("../../assets/images/product8.jpg"),
    8: require("../../assets/images/product9.jpg"),
    9: require("../../assets/images/product10.jpg"),
  };

  const categoryImageMapping: { [key: string]: any } = {
    All: require("../../assets/images/banner2.jpg"),
    Electronics: require("../../assets/images/product1.jpg"),
    Fashion: require("../../assets/images/product8.jpg"),
    Furniture: require("../../assets/images/product9.jpg"),
  };

  const categories = [
    { id: 1, title: "All", image: categoryImageMapping["All"] },
    ...Array.from(new Set(products.map((product) => product.category))).map(
      (category, index) => ({
        id: index + 2,
        title: category,
        image:
          categoryImageMapping[category] ||
          imageMapping[index % Object.keys(imageMapping).length],
      })
    ),
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products
    .map((product, index) => ({
      ...product,
      image: imageMapping[product.id % Object.keys(imageMapping).length],
    }))
    .filter((product) => {
      const categoryMatch =
        activeCategory === 1 ||
        product.category === categories[activeCategory - 1]?.title;

      const titleMatch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const categorySearchMatch = product.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return categoryMatch && (titleMatch || categorySearchMatch);
    });

  return (
    <ScrollView style={globalStyles.container}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BannerSlider />
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ProductList products={filteredProducts} navigation={navigation} />
    </ScrollView>
  );
};

export default HomeScreen;
