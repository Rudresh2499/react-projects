import React from "react";
import { useState } from "react";
import { Alert, Button, SafeAreaView, Text, TextInput, View } from "react-native";
import RegisterModel from "../modelClasses/RegisterModel";

function RegisterTestScreen(props) {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [mobileNumber, setMobileNumber] = useState(null);
    const [requestStatus, setRequestStatus] = useState(null);

    function responseHandler(statusCode) {
        //Displays Alert Box of Success when status code is 201 or failure when any other status code is returned
        if(statusCode === 201){
            //You can use this condition to navigate to the previous page after Register
            Alert.alert(
                "Success",
            )
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

    function registerClickHandler() {
        var userInputObject = new RegisterModel(firstName, lastName, email, password, mobileNumber);
        
        responseHandler(201)
        fetch('http://10.0.3.108:3001/user/register', {
            method: "POST",
            body: JSON.stringify(userInputObject),
            headers: {"Content-type": "application/json; charset=UTF-8"},
        })
        .then(response => responseHandler(response.status))
    }
 
    return(
        <SafeAreaView>
            <TextInput 
                placeholder = "first_name"
                onChangeText = {(val) => setFirstName(val)}
                style = {{borderWidth: 1, padding: 10, margin: 5,}}
            />
            <TextInput 
                placeholder = "last_name"
                onChangeText = {(val) => setLastName(val)}
                style = {{borderWidth: 1, padding: 10, margin: 5,}}
            />
            <TextInput 
                placeholder = "email"
                onChangeText = {(val) => setEmail(val)}
                autoCapitalize = "none"
                style = {{borderWidth: 1, padding: 10, margin: 5,}}
            />
            <TextInput 
                placeholder = "password"
                onChangeText = {(val) => setPassword(val)}
                style = {{borderWidth: 1, padding: 10, margin: 5,}}
            />
            <TextInput 
                placeholder = "mobile_number"
                onChangeText = {(val) => setMobileNumber(val)}
                style = {{borderWidth: 1, padding: 10, margin: 5,}}
            />
            <Button
                title = "Register"
                onPress = { registerClickHandler }
            />
        </SafeAreaView>
    )
}

export default RegisterTestScreen;