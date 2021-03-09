import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { LoginScreen } from "./LoginScreen";
import CustomButton from "../components/CustomButton";

function ProfileScreen({ navigation }){

    const [Username, setUsername] = useState(null);

    readUserData = async() => {
        try{
            const val = await AsyncStorage.getItem('loggedInUser')
            console.log("Async storage: "+val)
            if(val !== null)
            {
                console.log(val)
                setUsername(val)
                console.log(Username)
            }
            else
            {
                navigation.dispatch(StackActions.pop(1))
            }
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        readUserData()
    }, [])

    function logoutPressHandler() {

        console.log(Username)
        navigation.dispatch(StackActions.pop(1));

        try {
            AsyncStorage.removeItem('loggedInUser');
        }
        catch(err) {
            console.log(err)
        }
    }

    function viewAddressesPressHandler() {
        navigation.push("ViewAddressScreen")
    }

    function viewOrderListPressHandler() {
        navigation.push("OrderListScreen")
    }

    return(
        <SafeAreaView style = {styles.container} >
            <StatusBar barStyle = "light-content" />
            <View style = { styles.contentContainer }>
                <Image
                    style = {styles.imageContainer}
                    source = {{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style = {styles.topLabel}>Welcome "Username"</Text> 
            </View>
            <View style = {styles.textContainer}>
                <View style = {styles.leftTextContainer}>
                    <Text style = {styles.leftText}>First Name :</Text>
                </View>
                <View style = {styles.rightTextContainer}>
                    <Text style = {styles.rightText}>"VALUE"</Text>
                </View>
            </View>
            <View style = {styles.textContainer}>
                <View style = {styles.leftTextContainer}>
                    <Text style = {styles.leftText}>Last Name :</Text>
                </View>
                <View style = {styles.rightTextContainer}>
                    <Text style = {styles.rightText}>"VALUE"</Text>
                </View>
            </View>
            <View style = {styles.textContainer}>
                <View style = {styles.leftTextContainer}>
                    <Text style = {styles.leftText}>Email ID:</Text>
                </View>
                <View style = {styles.rightTextContainer}>
                    <Text style = {styles.rightText}>"VALUE"</Text>
                </View>
            </View>
            <View style = {styles.textContainer}>
                <View style = {styles.leftTextContainer}>
                    <Text style = {styles.leftText}>Contact Number:</Text>
                </View>
                <View style = {styles.rightTextContainer}>
                    <Text style = {styles.rightText}>"VALUE"</Text>
                </View>
            </View>
            <CustomButton 
                title = "View My Addresses"
                backgroundColor = "#007aff"
                height = {45}
                width = {350}
                marginTop = {10}
                textColor = "#ffffff"
                onBtnClicked = {viewAddressesPressHandler}
            />
            <CustomButton 
                title = "View My Order List"
                backgroundColor = "#ffffff"
                height = {45}
                width = {350}
                marginTop = {10}
                borderWidth = {2}
                borderColor = "#007aff"
                textColor = "#007aff"
                onBtnClicked = {viewOrderListPressHandler}
            />
            <CustomButton 
                title = "Log Out"
                backgroundColor = "#ffffff"
                height = {45}
                width = {350}
                marginTop = {10}
                borderWidth = {2}
                borderColor = "#007aff"
                textColor = "#007aff"
                onBtnClicked = {logoutPressHandler}
            />
            {/* <View style = {styles.profileEditButtonContainer}>
                <Button 
                title = "Edit Profile"
                color = "#ffffff"
                onPress = { editProfilePressHandler }
                />
            </View>
            <View style = {styles.signupButtonContainer}>
                <Button 
                title = "Log Out"
                color = "#007aff"
                onPress = { logoutPressHandler }
                />
            </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center",
            //justifyContent: "center",
            backgroundColor: "#ffffff",
        },

        contentContainer: {
            height: 135,
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
            padding: 0,
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: "transparent",
            borderWidth: 0,
        },

        imageContainer: {
            height: 60,
            width: 60,
            alignSelf: "flex-start",
            marginTop: 10,
            marginLeft: 12,
            marginBottom: 10,
            borderRadius: 30,
        },

        leftText: {
            fontSize: 17,
        },

        leftTextContainer: { 
            flex: 1,
            paddingLeft: 15,
            justifyContent: "center",
        },

        optionsContainer: {
            flex: 1,
            flexDirection: "row",
        },

        rightText: { 
            textAlign: "right",
            fontSize: 17,
            fontWeight: "bold",
        },

        rightTextContainer: { 
            flex: 1,
            paddingRight: 15,
            justifyContent: "center",
        },

        textContainer: { 
            flexDirection: "row",
            height: 50,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            borderBottomStartRadius: 30,
            borderBottomEndRadius: 30,
            padding: 10,
        },

        topLabel: {
            width: 350,
            textAlign: "center",
            justifyContent: "center",
            fontSize: 24,
            marginBottom: 10
        }
    }
)

export default ProfileScreen