import React from "react";
import { Image, SafeAreaView, SectionList, StatusBar, StyleSheet, Text, TextInput, View, } from "react-native";
import CustomButton from "../components/CustomButton";
import Icons from "react-native-vector-icons/AntDesign";

const cardData = [
    {
        id: "1",
        val: "Visa",
        iconUrl: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0018/8364/brand.gif?itok=wyfQ-mzG",
    },
    {
        id: "2",
        val: "MasterCard",
        iconUrl: "https://www.adgully.com/img/800/201901/mastercard_logo-0.jpg",
    },
    {
        id: "3",
        val: "RuPay",
        iconUrl: "http://vtlogo.com/wp-content/uploads/2020/10/rupay-vector-logo-small.png",
    }
]

const codData = [
    {
        id: "1",
        val: "Cash On Delivery",
        iconUrl: "https://thumbs.dreamstime.com/b/basic-rgb-154126098.jpg",
    },
    {
        id: "2",
        val: "PayTM Wallet",
        iconUrl: "https://cdn.iconscout.com/icon/free/png-512/paytm-226448.png",
    }
]

const upiData = [
    {
        id: "1",
        val: "Google Pay",
        iconUrl: "data:image/png;base64,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",
    },
    {
        id: "2",
        val: "PhonePe",
        iconUrl: "data:image/png;base64,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",
    },
]

function PaymentOptionsScreen({ navigation }) {

    function btnClickHandler() {
        console.log("Checkout Clicked")
    }

    return(
        <SafeAreaView style = {styles.safeAreaContainer}>
            <StatusBar barStyle = "light-content" />
            <View style = {styles.wrapperView}>
                <View style = {styles.paymentOptionsContainer}>
                    <SectionList 
                        sections = {[
                            {title: "Debit Card", data: cardData},
                            {title: "Credit Card", data: cardData},
                            {title: "UPI", data: upiData},
                            {title: "Cash on Delivery", data: codData},
                        ]}
                        renderSectionHeader = {({section}) => (
                            <View style = {styles.sectionHeaderContainer}>
                                <Text style = {{fontSize: 24, fontWeight: "600", color: "#ffffff"}}>{section.title}</Text>
                            </View>
                        )}
                        renderItem = {({item}) => (
                            <View style = {styles.itemContainer}>
                                <View style = {styles.iconContainer}>
                                    <Image
                                        style = {styles.imageContainer} 
                                        source = {{
                                            uri: item.iconUrl
                                        }}
                                    />
                                </View>
                                <View style = {styles.nameContainer}>
                                    <Text style = {{fontSize: 18, fontWeight: "600"}}>{item.val}</Text>
                                </View>
                                <View style = {styles.arrowContainer}>
                                    <Icons name = "right" size = {25} />
                                </View>
                            </View>
                        )}
                        style = {{backgroundColor: "#ffffff",}}
                        bounces = {false}
                    />
                </View>
                <View style = {styles.bottomBarContainer}>
                    <View style = {styles.totalContainer}>
                        <Text style = {{fontWeight: "600", fontSize: 18,}}>Total Amount :</Text>
                        <Text style = {{fontWeight: "600", fontSize: 18,}}>$ 70.99</Text>
                    </View>
                    <View style = {styles.checkoutBtnContainer}>
                        <CustomButton 
                            title = "Place Order"
                            backgroundColor = "#ffffff"
                            textColor = "#007aff"
                            width = {160}
                            height = {45}
                            borderWidth = {2}
                            borderColor = "#007aff"
                            onBtnClicked = { btnClickHandler }
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        arrowContainer: {
            flex: 1,
            height: 45,
            // borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
        },

        bottomBarContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "#ffffff",
            // borderWidth: 1,
            justifyContent: "space-around",
            alignItems: "center",
            paddingBottom: 5,
            shadowColor: "#555555",
            shadowOpacity: 1,
            shadowRadius: 2,
            shadowOffset: {height: -2,},
        },

        checkoutBtnContainer: {
            flex: 1,
            // borderWidth: 1,
            marginTop: 10,
            padding: 2,
        },

        iconContainer: {
            flex: 2,
            height: 45,
            // borderWidth: 1,
        },

        imageContainer: {
            flex: 1,
            marginLeft: 5,
            justifyContent: "center",
            alignItems: "center",
            width: 55,
        },

        itemContainer: {
            flex: 1,
            height: 60,
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "#ffffff",
            // borderWidth: 2,
            borderRadius: 10,
            padding: 5,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 5,
            marginBottom: 5,
            shadowColor: "#aaaaaa",
            shadowOffset: {height: 2,},
            shadowRadius: 5,
            shadowOpacity: 1,
        },

        nameContainer: {
            flex: 6,
            height: 45,
            // borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
        },

        paymentOptionsContainer: {
            flex: 10,
            // borderWidth: 1,
            backgroundColor: "#ffffff"
        },

        safeAreaContainer: {
            flex: 1,
            backgroundColor: "#ffffff",
            // borderWidth: 3,
        },

        sectionHeaderContainer: {
            flex: 1,
            height: 55,
            // borderWidth: 2,
            backgroundColor: "#007aff",
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
            // shadowColor: "#aaaaaa",
            // shadowOpacity: 1,
            // shadowRadius: 5,
            // shadowOffset: {height: 2,},
        },

        topContainer: {
            flex: 1,
            // borderWidth: 1,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
        },

        totalContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            margin: 5,
            // borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
        },

        wrapperView: {
            flex: 1,
            // borderWidth: 2,
        },
    }
)

export default PaymentOptionsScreen;