import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./welcome.styles";
import { COLORS, SIZES } from "../../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.containter}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
          Ultimate Furnitures
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcons} />
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
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
