import React from "react";
import { Button, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";

const orderData = [
    {
        "part_id": 10,
        "part_title": "VIAIR VIAIR Direct Inlet Air Filter Assembly - 92623",
        "part_price": "3.99",
        "part_number": "V/A92623",
        "part_overview": "Replacement direct-mount air filter assembly (on compressor) with 1/4\" Male NPT.",
        "image_path": "http://n3.datasn.io/data/api/v1/n3a2/auto_part_2/by_table/part_image_access/2a/e6/5c/8d/2ae65c8d57f0a9c56ed468730a632d2483213411.jpg",
        "sub_category_id": 3,
        "category_id": 1,
        "sub_category_title": "Air Compressor Filters",
        "category_title": "Air Compressor Accessories"
    },
    {
        "part_id": 11,
        "part_title": "VIAIR VIAIR Metal Direct Inlet Air Filter Assembly - 92630",
        "part_price": "6.99",
        "part_number": "V/A92630",
        "part_overview": "Replacement direct-mount air filter assembly with 1/4\" NPT (metal housing).",
        "image_path": "http://n3.datasn.io/data/api/v1/n3a2/auto_part_2/by_table/part_image_access/41/fc/d9/70/41fcd970e013301530d63275f11953b45650dd2e.jpg",
        "sub_category_id": 3,
        "category_id": 1,
        "sub_category_title": "Air Compressor Filters",
        "category_title": "Air Compressor Accessories"
    },
    {
        "part_id": 12,
        "part_title": "VIAIR VIAIR Dual Stage Air Filter Element - 92626",
        "part_price": "4.99",
        "part_number": "V/A92626",
        "part_overview": "Air filter elements should be replaced periodically depending on frequency of use and operating environment. For use with plastic air filter housings.",
        "image_path": "http://n3.datasn.io/data/api/v1/n3a2/auto_part_2/by_table/part_image_access/38/38/69/04/383869040fa79b8b4933279f2d6703c560302ee2.jpg",
        "sub_category_id": 3,
        "category_id": 1,
        "sub_category_title": "Air Compressor Filters",
        "category_title": "Air Compressor Accessories"
    },
    {
        "part_id": 13,
        "part_title": "VIAIR VIAIR Direct Inlet Air Filter Assembly - 92635",
        "part_price": "11.99",
        "part_number": "V/A92635",
        "part_overview": "Replacement direct-mount air filter assembly with 1/2\" NPT (metal housing).",
        "image_path": "http://n3.datasn.io/data/api/v1/n3a2/auto_part_2/by_table/part_image_access/41/fc/d9/70/41fcd970e013301530d63275f11953b45650dd2e.jpg",
        "sub_category_id": 3,
        "category_id": 1,
        "sub_category_title": "Air Compressor Filters",
        "category_title": "Air Compressor Accessories"
    },
    {
        "part_id": 14,
        "part_title": "VIAIR VIAIR Remote Intake Air Filter Assembly - 92622",
        "part_price": "5.99",
        "part_number": "V/A92622",
        "part_overview": "Remote Intake Air Filter Assembly, Plastic Housing (1/4\"\" x 3/8\"\" Tube Fitting, NPT)",
        "image_path": "http://n3.datasn.io/data/api/v1/n3a2/auto_part_2/by_table/part_image_access/9f/31/60/c5/9f3160c504d8860c9d46328c0d89ac03cc25a21e.jpg",
        "sub_category_id": 3,
        "category_id": 1,
        "sub_category_title": "Air Compressor Filters",
        "category_title": "Air Compressor Accessories"
    }
]

function getSeperator(){
    return(
        <View style = {{
            width: "100%",
            // height: 2,
            backgroundColor: "#007aff",
        }} />
    )
}

function OrderListScreen({ navigation }) {

    return(
        <SafeAreaView style = {styles.viewContainer}>
            <StatusBar barStyle = "light-content" />
            <View style = {styles.dataContainer}>
                <FlatList style = {{ flex: 1, padding: 5,}} data = {orderData} keyExtractor = {(item, index) => item.part_id.toString()} renderItem = {({item}) =>
                    <View style = {styles.outerContainer}>
                        <View style = { styles.individualOrderContainer}>
                            <Image 
                                style = {styles.imageContainer}
                                source = {{
                                    uri: item.image_path
                                }}
                            />
                            <View style = {styles.productContainer}>
                                <Text style = {styles.titleContainer}>{item.part_title}</Text>
                                <Text style = {styles.priceContainer}>$ {item.part_price}</Text>
                            </View>
                        </View>
                        <View style = {styles.listBtnContainer}>
                            <CustomButton 
                                title = "Buy Again"
                                width = {150}
                                height = {35}
                                borderColor = "#007aff"
                                borderWidth = {2}
                                textColor = "#007aff"
                            />  
                            <CustomButton 
                                title = "Delete Item"
                                width = {150}
                                height = {35}
                                borderColor = "#007aff"
                                borderWidth = {2}
                                textColor = "#007aff"
                                marginLeft = {23}
                            />
                        </View>
                    </View>
                }/>
            </View>
            <View style = {styles.btnContainer}>
                <CustomButton 
                    title = "Go to Dashboard"
                    width = {200}
                    height = {45}
                    backgroundColor = "#ffffff"
                    textColor = "#007aff"
                    borderWidth = {2}
                    borderColor = "#007aff"
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        btnContainer: {
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "row",
            backgroundColor: "#ffffff",
            // borderTopWidth: 2,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
        },

        dataContainer: {
            flex: 15,
            borderBottomWidth: 2,
        },

        individualOrderContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "#ffffff",
        },

        imageContainer: {
            height: 80,
            width: 80,
        },

        listBtnContainer: {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            paddingTop: 5,
        },

        outerContainer: {
            flex: 1,
            borderRadius: 15,
            backgroundColor: "#ffffff",
            padding: 10,
            marginTop: 10,
            marginBottom: 10,
            // borderWidth: 1,
            shadowColor: "#999999",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: {height: 2,},
            zIndex: 2,
        },

        priceContainer: {
            padding: 5,
            textAlign: "right",
            fontWeight: "600",
            margin: 5,
        },

        productContainer: {
            flex: 3,
            marginLeft: 5,
        },

        titleContainer: {
            flex: 1,
            textAlign: "center",
            fontWeight: "600",
            margin: 2,
            marginBottom: 0,
            padding: 1,
        },

        viewContainer: {
            flex: 1,
            backgroundColor: "#ffffff",
            padding: 10,
        },
    }
)

export default OrderListScreen