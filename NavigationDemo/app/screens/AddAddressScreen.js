import React, { useState } from "react";
import { Alert, Keyboard, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome";
import SecondIcon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AddressModelClass from "../modelClasses/AddressModelClass";

function AddAddressScreen({ navigation }) {

    const [firstLine, setFirstLine] = useState(null);
    const [secondLine, setSecondLine] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setStateName] = useState(null);
    const [pincode, setPincode] = useState(null);
    const [phone, setPhone] = useState(null);
 
    function clickHandler() {
        console.log("Button Clicked")
    }

    function resetClickHandler() {
        navigation.push("PaymentOptionsScreen")
    }

    function saveAddressClickHandler() {
        if(firstLine === null){
            Alert.alert(
                "Cannot Enter Data",
                "Address Line 1 cannot be null",
                [{
                    text: "Enter Address Line 1",
                }]
            )
        }
        else if(secondLine === null){
            Alert.alert(
                "Cannot Enter Data",
                "Address Line 2 cannot be null",
                [{
                    text: "Enter Address Line 2",
                }]
            )
        }
        else if(city === null){
            Alert.alert(
                "Cannot Enter Data",
                "City cannot be null",
                [{
                    text: "Enter City",
                }]
            )
        }
        else if(state === null){
            Alert.alert(
                "Cannot Enter Data",
                "State cannot be null",
                [{
                    text: "Enter State",
                }]
            )
        }
        else if(pincode === null){
            Alert.alert(
                "Cannot Enter Data",
                "Pincode cannot be null",
                [{
                    text: "Enter Pincode",
                }]
            )
        }
        else if(pincode.toString().length<6){
            Alert.alert(
                "Cannot Enter Data",
                "Pincode less than 6 digits",
                [{
                    text: "Re-enter Pincode",
                }]
            )
        }
        else if(phone === null){
            Alert.alert(
                "Cannot Enter Data",
                "Contact Number cannot be null",
                [{
                    text: "Enter Contact Number",
                }]
            )
        }
        else if(phone.toString().length<10){
            Alert.alert(
                "Cannot Enter Data",
                "Contact Number less than 10 digits",
                [{
                    text: "Re-enter Contact Number",
                }]
            )
        }
        else{
            var tempObject = new AddressModelClass(firstLine, secondLine, city, state, pincode, phone)
        }
    }

    return(
        <SafeAreaView style = {styles.container}>
            <StatusBar barStyle = "light-content" />
            <View style = {styles.formContainer}>
                <TouchableWithoutFeedback onPress = {Keyboard.dismiss} accessible = {false}>
                    <ScrollView>
                        <Text style = {styles.addressLabel}>
                            Address Line 1
                        </Text>
                        <View style = {styles.txtContainer}>
                            <Icon name = "home" size = {30} color = "#007aff"/>
                            <TextInput 
                                placeholder = "Address Line 1"
                                keyboardType = "default"
                                autoCapitalize = "sentences"
                                style = {styles.txtInputs}
                                onChangeText = {(val) => {
                                    setFirstLine(val)
                                }}
                            />
                        </View>
                        <Text style = {styles.addressLabel}>
                            Address Line 2
                        </Text>
                        <View style = {styles.txtContainer}>
                            <Icon name = "home" size = {30} color = "#007aff" />
                            <TextInput 
                                placeholder = "Address Line 2"
                                keyboardType = "default"
                                autoCapitalize = "sentences"
                                style = {styles.txtInputs}
                                onChangeText = {(val) => {
                                    setSecondLine(val)
                                }}
                            />
                        </View>
                        <Text style = {styles.addressLabel}>
                            City
                        </Text>
                        <View style = {styles.txtContainer}>
                            <SecondIcon name = "city" size = {20} color = "#007aff" />
                            <TextInput 
                                placeholder = "City"
                                keyboardType = "default"
                                autoCapitalize = "words"
                                style = {styles.txtInputs}
                                onChangeText = {(val) => {
                                    setCity(val)
                                }}
                            />
                        </View>
                        <Text style = {styles.addressLabel}>
                            State
                        </Text>
                        <View style = {styles.txtContainer}>
                            <SecondIcon name = "city" size = {20} color = "#007aff" />
                            <TextInput 
                                placeholder = "State"
                                keyboardType = "default"
                                autoCapitalize = "words"
                                style = {styles.txtInputs}
                                onChangeText = {(val) => {
                                    setStateName(val)
                                }}
                            />
                        </View>
                        <Text style = {styles.addressLabel}>
                            Pincode
                        </Text>
                        <View style = {styles.txtContainer}>
                            <MaterialIcon name = "contact-mail" size = {25} color = "#007aff" />
                            <TextInput 
                                placeholder = "Pincode"
                                keyboardType = "number-pad"
                                style = {styles.txtInputs}
                                onChangeText = {(val) => {
                                    setPincode(val)
                                }}
                            />
                        </View>
                        <Text style = {styles.addressLabel}>
                            Contact Number
                        </Text>
                        <View style = {styles.txtContainer}>
                            <MaterialIcon name = "local-phone" size = {25} color = "#007aff" />
                            <TextInput 
                                placeholder = "Contact Number"
                                keyboardType = "number-pad"
                                style = {styles.txtInputs}
                                onChangeText = {(val) => {
                                    setPhone(val)
                                }}
                            />
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </View>
            <View style = {styles.btnContainer}>
                <CustomButton
                    title = "Save Address"
                    width = {160}
                    height = {45}
                    marginTop = {15}
                    marginRight = {10}
                    backgroundColor = "#007aff"
                    textColor = "#ffffff"
                    onBtnClicked = {saveAddressClickHandler}
                />
                <CustomButton 
                    onBtnClicked = {resetClickHandler}
                    title = "Payment Options"
                    width = {160}
                    height = {45}
                    marginTop = {15}
                    backgroundColor = "#ffffff"
                    borderWidth = {2}
                    borderColor = "#007aff"
                    textColor = "#007aff"
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        addressLabel: {
            fontSize: 16,
            fontWeight: "600",
            color: "#007aff",
            marginTop: 5,
            marginBottom: 5,
            padding: 5,
        },

        btnContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 15,
            paddingTop: 0,
        },

        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
        },

        formContainer: {
            flex: 9,
            alignItems: "center",
            justifyContent: "center",
        },

        txtContainer: {
            flex: 1,
            width: 325,
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: 5,
            alignItems: "center",
            justifyContent: "center",
            borderBottomWidth: 2,
            borderBottomColor: "#007aff",
            padding: 5,
        },

        txtInputs: {
            flex: 1,
            paddingLeft: 5,
            alignItems: "center",
            justifyContent: "center",
        },
    }
)

export default AddAddressScreen;