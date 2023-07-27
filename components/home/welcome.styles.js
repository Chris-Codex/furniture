import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


const styles = StyleSheet.create({
    containter: {
        width: "100%"
    },
    welcomeTxt: (color, top) => ({
        fontFamily: "bold",
        fontSize: SIZES.xxLarge - 5,
        marginTop: top,
        color: color,
        marginHorizontal: 12
    }),
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        marginHorizontal: SIZES.small,
        height: 50
    },
    searchIcons: {
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: 13
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
        justifyContent: "center"
    },
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary
    }
})

export default styles