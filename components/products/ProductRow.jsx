import { FlatList, View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./ProductRow.style";
import useFetch from "../../hooks/useFetch";

const ProductRow = () => {
  const { data, isLoading, isError } = useFetch();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
      ) : isError ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
          renderItem={({ item }) => <ProductCardView item={item} />}
        />
      )}
    </View>
  );
};

export default ProductRow;
