import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from "../../constants/index"



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow: {
        marginHorizontal: 20,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xLarge,
        width: SIZES.width - 44,
        zIndex: 999
    },
    images: {
        aspectRatio: 1,
        resizeMode: "cover"
    },
    details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderBottomRightRadius: SIZES.medium
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 44,
        top: 20
    },
    cartRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width,
    },
    cartBtn: {
        width: SIZES.width * 0.7,
        backgroundColor: COLORS.black,
        padding: SIZES.small,
        borderRadius: SIZES.large,
        marginLeft: 12
    },
    ratingRow: {
        top: 5,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 10,
        top: 20
    },
    rating: {
        top: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: SIZES.xSmall,

    },
    ratingText: {
        color: COLORS.gray,
        fontFamily: "medium",
        paddingHorizontal: 6
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.large
    },
    cartTitle: {
        marginLeft: SIZES.small,
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.lightWhite
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    price: {
        paddingHorizontal: 10,
        fontFamily: "semibold",
        fontSize: SIZES.large
    },
    descWrapper: {
        marginTop: SIZES.large * 2,
        marginHorizontal: SIZES.large
    },
    description: {
        fontFamily: "medium",
        fontSize: SIZES.large - 2
    },
    descriptionText: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        textAlign: "justify",
        marginBottom: SIZES.small
    },
    location: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        padding: 5,
        borderRadius: SIZES.large,
        marginHorizontal: 12
    },
    addCart: {
        width: 37,
        height: 37,
        borderRadius: 50,
        margin: SIZES.small,
        backgroundColor: COLORS.black,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles