import React from "react";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { add } from "react-native-reanimated";
import AddressModel from "../modelClasses/AddressModel";

var addressTraversalElement = new AddressModel();
var tempAddressArray = new Array();

function GetUserAddressTestScreen(props) {
    const [userAddresses, setUserAddresses] = useState([]);

    //Currently using dummy value
    var AuthTokenStorage = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2aXJlbkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJWaXJlbiIsImxhc3ROYW1lIjoiTmFuZGEiLCJpYXQiOjE2MTUzODE3NTgsImV4cCI6MTYxNTM5NjE1OH0.ViIQGHOw9MB0OZQS3ZTy2qZ5KC4Ibk6xWLSKU-spv1s";

    function responseHandler(jsonData) {
        jsonData.forEach(addressTraversalElement => {
            tempAddressArray.push(addressTraversalElement)
        });

        setUserAddresses(tempAddressArray)
        console.log(userAddresses);
    }

    function getUserAddress() {
        var newHeaders = new Headers();
        newHeaders.append("Content-Type", "application/json");
        newHeaders.append("Authorization", AuthTokenStorage);

        fetch("http://10.0.3.108:3001/address/", {
            method: "POST",
            headers: newHeaders,
        })
        .then(response => response.json())
        .then(json => console.log(json.data))
    }

    useEffect(() => {
        getUserAddress()
    }, [])

    return(
        <SafeAreaView>
            <Text>Hello</Text>
        </SafeAreaView>
    )
}

export default GetUserAddressTestScreen