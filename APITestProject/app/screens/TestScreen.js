import React, { useState } from "react";
import { Button, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import DBTestModel from "../modelClasses/DBTestModel";

// Follow this screen as an example for integrating product listing API

const response = {
    "status": 200,
    "data": [
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
    ],
    "errorMessage": ""
};


let traversalObject = new DBTestModel();
let tempArray = new Array();

function TestScreen({ navigation }) {

    let [tempObject, setTempObject] = useState([]);

    function clickHandler() {
        let data = response.data
        data.forEach(traversalObject => {
            tempArray.push(traversalObject)
        });
        setTempObject(tempArray);
    }

    return(
        <SafeAreaView style = {{flex: 1,}}>
            <View style = {{flex: 5, borderWidth: 1, padding: 10, justifyContent: "center", alignItems: "center"}}>
                <FlatList 
                    data = {tempObject}
                    keyExtractor = { item => item.part_id.toString()}
                    renderItem = {({item}) => 
                        <TouchableOpacity 
                            style = {{flex: 1, width: 300, borderRadius: 15, borderWidth: 1, padding: 10, margin: 10,}}
                            onPress = { () =>
                                navigation.navigate("ProductDetailScreen", {item})
                            }
                        >
                            <Text>{item.part_title}</Text>
                        </TouchableOpacity>
                    }
                    style = {{borderWidth: 2, flex: 1,}}
                />
            </View>
            <View style = {{padding: 5, borderWidth: 2, flex: 1}}>
                <Button
                    title = "Test"
                    onPress = {clickHandler}
                />
            </View>
        </SafeAreaView>
    )
}

export default TestScreen