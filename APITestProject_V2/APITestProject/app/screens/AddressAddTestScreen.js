import React, { useState } from "react";
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import AddressModelClass from "../modelClasses/AddressModelClass";

function AddressAddTestScreen(props) {
    const [firstLine, setFirstLine] = useState(null);
    const [secondLine, setSecondLine] = useState(null);
    const [city, setCity] = useState(null);
    const [stateValue, setStateValue] = useState(null);
    const [pincode, setPincode] = useState(null);
    const [contactNumber, setContactNumber] = useState(null);

    //currently using dummy value.
    var AuthTokenStorage = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoieHl6enl4QGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6Ilh5eiIsImxhc3ROYW1lIjoiWnl4IiwiaWF0IjoxNjE1NDYzOTg5LCJleHAiOjE2MTU0NzgzODl9.usZKKJQZPaZmNpkBEs3gUQQ9jueZekSLftLOfH02st4"

    function responseHandler(statusCode) {
        if(statusCode === 201){
            //Address add success.
        }
        else{
            Alert.alert(
                "Error",
                "Some unknown error occurred. Please try Again",
                [{
                    text: "Try Again"
                }]
            )
        }
    }

    function addAddressClickHandler() {
        
        var userDetails = new AddressModelClass(firstLine, secondLine, city, stateValue, pincode, contactNumber)
        console.log(userDetails)
        console.log(JSON.stringify(userDetails))
        
        var customHeader = new Headers()
        customHeader.append("Content-Type", "application/json");
        customHeader.append("Authorization", AuthTokenStorage); 

        fetch("http://10.0.3.108:3001/address/add", {
            method: "POST",
            body: JSON.stringify(userDetails),
            headers: customHeader,
        })
        .then(response => response.json())
        .then(json => responseHandler(json.status))
    }

    return(
        <SafeAreaView style = {{flex: 1,}}>
            <TextInput 
                placeholder = "Address Line 1"
                onChangeText = {(val) => setFirstLine(val)}
                style = {styles.textFields}
            />
            <TextInput 
                placeholder = "Address Line 2"
                onChangeText = {(val) => setSecondLine(val)}
                style = {styles.textFields}
            />
            <TextInput 
                placeholder = "City"
                onChangeText = {(val) => setCity(val)}
                style = {styles.textFields}
            />
            <TextInput 
                placeholder = "State"
                onChangeText = {(val) => setStateValue(val)}
                style = {styles.textFields}
            />
            <TextInput 
                placeholder = "Pin Code"
                onChangeText = {(val) => setPincode(val)}
                style = {styles.textFields}
            />
            <TextInput 
                placeholder = "Contact Number"
                onChangeText = {(val) => setContactNumber(val)}
                style = {styles.textFields}
            />
            <Button 
                title = "Add Address"
                onPress = {addAddressClickHandler}
                style = {styles.bottomButton}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        bottomButton: {
            flex: 1,
        },

        textFields: {
            flex: 1,
            borderWidth: 1,
        },
    }
)

export default AddressAddTestScreen;