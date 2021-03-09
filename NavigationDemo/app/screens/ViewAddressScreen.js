import React from "react";
import { useEffect } from "react";
import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";
import AddressModelClass from "../modelClasses/AddressModelClass";

var data = [
    {
        id: "1",
        firstLine : "Address Line 1",
        secondLine : "Address Line 2",
        city : "City",
        state : "State",
        pincode : "Pincode",
        phone : "Contact Number"
    },
    {
        id: "2",
        firstLine : "Address Line 1",
        secondLine : "Address Line 2",
        city : "City",
        state : "State",
        pincode : "Pincode",
        phone : "Contact Number"
    },
    {
        id: "3",
        firstLine : "Address Line 1",
        secondLine : "Address Line 2",
        city : "City",
        state : "State",
        pincode : "Pincode",
        phone : "Contact Number"
    },
]

function ViewAddressScreen({ navigation }) {

    function newAddressClickHandler() {
        navigation.push("AddAddressScreen")
    }

    function testDataAddHandler() {
        console.log(data.length)
        var count = data.length + 1
        data.push({
            id : count.toString(),
            firstLine : "Address Line 1",
            secondLine : "Address Line 2",
            city : "City",
            state : "State",
            pincode : "Pincode",
            phone : "Contact Number"
        })
    }

    return(
        <SafeAreaView style = {styles.container}>
            <StatusBar barStyle = "light-content" />
            {/* <View style = {styles.labelContainer}>
                <Text style = {{ fontSize: 28, fontWeight: "bold", color: "#ffffff", }}>Your Addresses</Text>
            </View> */}
            <View style = {styles.addressContainer}>
                <FlatList style = {{padding: 2,}} data = {data} renderItem = {({item}) =>
                    <View style = { styles.individualAddressContainer}>
                    <View style = { styles.individualContainerHeader}>
                        <Text style = {{ fontSize: 16, color: "#111111", fontWeight: "bold"}}>Address {item.id}</Text>
                    </View>
                    <View style = { styles.actualAddressContainer}>
                        <Text style = { styles.addressText }>{item.firstLine}, {item.secondLine}</Text>
                        <Text style = { styles.addressText }>{item.city}</Text>
                        <Text style = { styles.addressText }>{item.state}</Text>
                        <Text style = { styles.addressText }>{item.pincode}</Text>
                        <Text style = { styles.addressText }>{item.phone}</Text>
                    </View>
                </View>
            } />        
            <CustomButton
                width = {190}
                height = {45}
                borderWidth = {2}
                borderColor = "#007aff"
                title = "Add a new Record"
                textColor = "#007aff"
                backgroundColor = "#ffffff"
                marginTop = {10}
                marginLeft = {80}
                marginBottom = {10}
                onBtnClicked = { testDataAddHandler }
            />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        addressContainer: {
            flex: 4,
            width: 375,
            backgroundColor: "#ffffff",
            padding: 10,
            // marginTop: 10,
            borderRadius: 25,
        },
        actualAddressContainer: {
            marginTop: 10,
        },
        
        addressText: {
            padding: 1,
            marginTop: 1,
            fontSize: 14,
        },

        container: {
            flex: 1,
            backgroundColor: "#ffffff"
        },

        individualAddressContainer: {
            height: 170,
            width: 350,
            backgroundColor: "#ffffff",
            borderWidth: 2,
            borderColor: "#007aff",
            borderRadius: 25,
            padding: 10,
            marginTop: 10,
            marginBottom: 10,
            // shadowColor: "#aaaaaa",
            // shadowRadius: 4,
            // shadowOpacity: 1,
            // shadowOffset: {height: 1,},
        },

        individualContainerHeader: {
            borderBottomWidth: 2,
            borderBottomColor: "#007aff",
            borderBottomStartRadius: 20,
            borderBottomEndRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 5,
        },

        labelContainer: {
            flex: 1,
            backgroundColor: "#007aff",
            justifyContent: "center",
            padding: 10,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            shadowColor: "#999999",
            shadowRadius: 5,
            shadowOpacity: 1,
            shadowOffset: {height: 5},
            zIndex: 3,
        },
    }
)

export default ViewAddressScreen;