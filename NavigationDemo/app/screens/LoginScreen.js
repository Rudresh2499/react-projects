import React, { Component } from "react";
import { useEffect, useState } from "react";
import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, SafeAreaView, View } from "react-native";
import  AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen({ navigation }){

    const [Username, setUsername] = useState(null);
    const [Password, setPassword] = useState(null);

    readUserData = async() => {
        try{
            const val = await AsyncStorage.getItem('loggedInUser')
            console.log("Async storage: "+val)
            if(val !== null)
            {
               navigation.push("ProfileScreen")
            }
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() =>{
        readUserData();
    }, [])

    const storeUserData = async() => {
        try {
            if(Username !== null)
            {
                await AsyncStorage.setItem('loggedInUser', Username);
            }
        }
        catch(err)
        {
            console.log(err);
        }
    }

    function loginPressHandler(){
        let emailRegularExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(Username === null)
        {
            Alert.alert(
                "Username not entered",
                "The username field cannot be blank! Please enter a valid username",
                [{
                    text: "Enter Username"
                }]
            )
        }
        else if(Password === null)
        {
            Alert.alert(
                "Password not entered",
                "The password field cannot be blank! Please enter a valid password",
                [{
                    text: "Enter Password"
                }]
            )
        }
        else
        {
            if(emailRegularExpression.test(Username) === true)
            {
                if(Username === "test@test.com" && Password === "1234")
                {
                    storeUserData(Username)
                    navigation.push("ProfileScreen")
                }
                else
                {  
                    Alert.alert(
                        "Login Failed",
                        "Credentials entered are not valid. Please Check",
                        [{
                            text: "Try Again"
                        }]
                    )
                }
            }
            else
            {
                Alert.alert(
                    "Login failed",
                    "Not a valid Email Address. Please Check",
                    [{
                        text: "Try Again"
                    }]
                )
            } 
        }
    }

    return(
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss} accessible = {false}>
            <SafeAreaView style = {styles.container}>
                <TextInput 
                placeholder = "Username"
                style = {styles.txtUsername}
                keyboardType = "email-address"
                autoCapitalize = "none"
                onChangeText = {(val) => {
                    setUsername(val)
                    console.log(Username)
                }}
                />
                <TextInput
                placeholder = "Password"
                secureTextEntry = {true}
                style = {styles.txtPassword}
                autoCapitalize = "none"
                onChangeText = {(val) => {
                    setPassword(val)
                    console.log(Password)
                }}
                />
                <View style = {styles.loginButtonContainer}>
                    <Button 
                    title = "Log In"
                    color = "#ffffff"
                    onPress = { loginPressHandler }
                    />
                </View>
                <View style = {styles.signupButtonContainer}>
                    <Button 
                    title = "Sign Up"
                    color = "#007aff"
                    />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },

        loginButtonContainer: {
            width: 350,
            height: 45,
            backgroundColor: "#007aff",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10
        },

        signupButtonContainer: {
            width: 350,
            height: 45,
            backgroundColor: "#ffffff",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#007aff",
            alignItems: "center",
            justifyContent: "center"
        },

        txtUsername: {
            width: 350,
            height: 45,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#777",
            textAlign: "center",
            margin: 10
        },
        
        txtPassword: {
            width: 350,
            height: 45,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#777",
            textAlign: "center",
            marginBottom: 10
        }
    }
)