import { View, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import styles from "./search.style";

const Search = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={24}
            style={styles.searchIcons}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            placeholder="Search furnitures"
            onPressIn={() => navigation.navigate("Search")}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={SIZES.xLarge} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Search;
