import { View, StyleSheet } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
  const sliders = [
    "https://res.cloudinary.com/ddxf1wteu/image/upload/v1690480479/Jedson_15_-_Piece_Upholstered_Sectional_mhsrln.webp",
    "https://res.cloudinary.com/ddxf1wteu/image/upload/v1690481021/img3_jimhse.webp",
    "https://res.cloudinary.com/ddxf1wteu/image/upload/v1690480381/Arghira_Modern_Sectional_fsjtpx.webp",
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={sliders}
        dotColor={COLORS.primary}
        inactiveDotColors={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "93%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
