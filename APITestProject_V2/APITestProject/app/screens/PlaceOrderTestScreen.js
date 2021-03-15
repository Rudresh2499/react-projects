import React, { useState } from "react";
import { useEffect } from "react";
import { Alert, Button, FlatList, SafeAreaView, Text, TextInput, View } from "react-native";
import { PartsParameterModelClass, PlaceOrderParameterModelClass } from "../modelClasses/PlaceOrderParameterModelClass";
import ProductListModel from "../modelClasses/ProductListModel";

//Use products in the cart to populate this array.
const productArray = [
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

var tempPartsArray = new Array();
var tempQtyHolder = new Array();
var qtyController = new Array(); //qtyHookController
var productTraversalObject = new ProductListModel();

function PlaceOrderTestScreen(props) {
    const [addressId, setAddressId] = useState(null);

    var authToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2aXJlbkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJWaXJlbiIsImxhc3ROYW1lIjoiTmFuZGEiLCJwaG9uZU51bWJlciI6IjQ3ODU2OTg3NDUiLCJpYXQiOjE2MTU3OTY4MTcsImV4cCI6MTYxNTgxMTIxN30.ENY61BHit1Cx7JyYl-PwdkHPviiJJRkSgrZ0K5nJB9s"
    
    var customHeader = new Headers();
    customHeader.append("Content-Type", "application/json");
    customHeader.append("Authorization", authToken);

    function responseHandler(jsonStatus) {
        if(jsonStatus === 201){
            Alert.alert(
                "Success",
                "Your order was successfully placed",
                [
                    {
                        text: "Ok"
                    }
                ]
            )
        }
        else{
            Alert.alert(
                "Error",
                "Some Error occurred",
                [
                    {
                        text: "Try Again"
                    }
                ]
            )
        }
    }


    function increaseValue(item, itemIndex) {
        qtyController[itemIndex]++
        console.log(qtyController)
    }

    function decreaseValue(item, itemIndex) {
        if(qtyController[itemIndex] > 0){
            qtyController[itemIndex]--
        }
        else if(qtyController <= 0){
            qtyController = 0
        }
        console.log(qtyController)
    }

    function productQuantityPopulator(){
        productArray.forEach(productTraversalObject => {
            qtyController.push(1);
        });
        console.log(qtyController)
    }

    function makeRequestHandler() {
        productArray.forEach(productTraversalObject => {
            var parameterTraversalObject = new PartsParameterModelClass(productTraversalObject.part_id, qtyController[productArray.indexOf(productTraversalObject)], productTraversalObject.part_price)
            tempPartsArray.push(parameterTraversalObject)
        });
        var placeOrderObject = new PlaceOrderParameterModelClass(addressId, tempPartsArray);
        console.log(JSON.stringify(placeOrderObject))

        fetch('http://10.0.3.108:3001/orders/add', {
            method: "POST",
            body: JSON.stringify(placeOrderObject),
            headers: customHeader,
        })
        .then(response => response.json())
        .then(json => responseHandler(json.status))
    }

    useEffect(() => {
        productQuantityPopulator();
    }, [])

    return(
        <SafeAreaView>
            <TextInput 
                placeholder = "Address ID"
                onChangeText = {(val) => setAddressId(val)}
                style = {{borderWidth: 1, margin: 5, padding: 5,}}
            />
            <View>
                <FlatList 
                    data = {productArray}
                    keyExtractor = {item => item.part_id.toString()}
                    renderItem = {({item, index}) => 
                        <View style = {{flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
                            <Button 
                                title = "-"
                                onPress = {() => decreaseValue(item, index)}
                            />
                            <Button 
                                title = "+"
                                onPress = {() => increaseValue(item, index)}
                            />
                        </View>
                    }
                />
            </View>
            <Button 
                title = "Make request"
                onPress = {makeRequestHandler}
            />
        </SafeAreaView>
    )
}

export default PlaceOrderTestScreen;