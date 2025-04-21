import React from "react";
import { View, FlatList, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const banners = [
  require("../assets/images/banner1.jpg"),
  require("../assets/images/banner2.jpg"),
  require("../assets/images/banner3.jpg"),
];

const BannerSlider = () => {
  return (
    <View style={globalStyles.bannerContainer}>
      <FlatList
        data={banners}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={globalStyles.bannerImage}
            resizeMode="cover"
          />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default BannerSlider;
