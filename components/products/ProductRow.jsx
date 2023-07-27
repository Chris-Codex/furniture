import { FlatList, View, Text } from "react-native";
import React from "react";
import { SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./ProductRow.style";

const products = [1, 2, 3, 4, 5];
const ProductRow = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
        renderItem={({ item }) => {
          return <ProductCardView />;
        }}
      />
    </View>
  );
};

export default ProductRow;
