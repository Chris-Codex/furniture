import { TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import styles from "./searchList.style";
import { useNavigation } from "@react-navigation/native";

const SearchList = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("ProductDetails", { item })}
      >
        <View style={styles.image}>
          <Image source={{ uri: item.imageUrl }} style={styles.productImg} />
        </View>
        <View stylee={styles.textContainer}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productSupplier}>{item.supplier}</Text>
          <Text style={styles.productSupplier}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchList;
