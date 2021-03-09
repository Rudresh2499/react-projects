import React from "react";
import { Text, View, SafeAreaView, FlatList, Button } from "react-native";
import CustomButton from "../components/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome";

const data = [
    {
        firstLine : "Address Line 1",
        secondLine : "Address Line 0",
        city : "City",
        state : "State",
        pincode : "Pincode",
        phone : "Contact Number"
    },
    {
        firstLine : "Address Line 1",
        secondLine : "Address Line 2",
        city : "City",
        state : "State",
        pincode : "Pincode",
        phone : "Contact Number"
    },
]

function TestViewScreen({ navigation }) {
    function clickHandler() {
        console.log("Button Click")
    }

    function secondClickHandler() {
        console.log("second button clicked")
    }
    return(
        <SafeAreaView style = {{padding: 100,}}>
            <Text>Hello</Text>
            <CustomButton 
                title = "Save Address"
                width = {165}
                height = {45}
                backgroundColor = "#ffffff"
                textColor = "#007aff"
                borderColor = "#007aff"
                borderWidth = {2}
                marginLeft = {30}
                marginTop = {10}
                onBtnClicked = {clickHandler}
            />
        </SafeAreaView>
    )
}

export default TestViewScreen