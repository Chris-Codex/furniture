import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import styles from "./search.style";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
import SearchList from "../../components/products/SearchList";
import useFetch from "../../hooks/useFetch";

const Search = () => {
  const navigation = useNavigation();
  const { handleSearch, searchQry, setSearchQry, searchResult } = useFetch();

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
            value={searchQry}
            placeholder="Search furnitures"
            onChangeText={setSearchQry}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Feather name="search" size={SIZES.xLarge} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>

      {searchResult.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchList item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
