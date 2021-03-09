import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import LoginScreen from "../app/screens/LoginScreen";
import React from 'react'
import ProfileScreen from "../app/screens/ProfileScreen";
import AddAddressScreen from "../app/screens/AddAddressScreen";
import TestViewScreen from "../app/screens/TestViewScreen";
import ViewAddressScreen from "../app/screens/ViewAddressScreen";
import OrderListScreen from "../app/screens/OrderListScreen";
import PaymentOptionsScreen from "../app/screens/PaymentOptionsScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
    return(
        <Stack.Navigator>
            {/* <Stack.Screen name = "Login" component = { LoginScreen } /> */}
            {/* <Stack.Screen name = "ProfileScreen" component = { ProfileScreen } options = {{ title: "Your Profile", headerLeft: (props) => { null }, headerStyle: {backgroundColor: "#007aff", shadowColor: "transparent"}, headerTitleStyle: {color: "#ffffff"}}}/> */}
            {/* My Version */}
            {/* <Stack.Screen name = "ViewAddressScreen" component = { ViewAddressScreen } options = {{headerStyle: {backgroundColor: "#007aff", shadowColor: "transparent"}, headerTitle: null}} /> */}
            {/* <Stack.Screen name = "AddAddressScreen" component = { AddAddressScreen } options = {{ headerStyle: {backgroundColor: "#007aff", shadowColor: "transparent"}, headerTitleStyle: {color: "#ffffff", justifyContent: "center", alignItems: "center"}, title: null, headerBackTitle: "All addresses", headerBackTitleStyle: {color: "#ffffff"}, headerTintColor: "#ffffff",}} /> */}
            {/* /My Version */}
            {/* <Stack.Screen name = "OrderListScreen" component = { OrderListScreen } options = {{title: "List of Orders", headerStyle: {backgroundColor: "#007aff"}, headerTitleStyle: {color: "#ffffff"}, headerBackTitle: " ", headerTintColor: "#ffffff"}} /> */}
            {/* <Stack.Screen name = "ViewAddressScreen" component = { ViewAddressScreen } options = {{headerStyle: {backgroundColor: "#007aff", shadowColor: "transparent"}, headerTitle: "Saved Addresses", headerTitleStyle: {color: "#ffffff", justifyContent: "center"}, headerBackTitle: " ", headerTintColor: "#ffffff" }} />             */}
            {/* <Stack.Screen name = "AddAddressScreen" component = { AddAddressScreen } options = {{headerStyle: {backgroundColor: "#007aff", shadowColor: "transparent"}, headerTitle: "Add Address", headerTitleStyle: {color: "#ffffff", justifyContent: "center"}, headerBackTitle: " ", headerTintColor: "#ffffff"}}/> */}
            {/* <Stack.Screen name = "PaymentOptionsScreen" component = { PaymentOptionsScreen } options = {{ headerStyle: {backgroundColor: "#007aff", shadowColor: "transparent"}, headerTitle: "Select Payment Option", headerBackTitle: " ", headerTitleStyle: {color: "#ffffff"}, headerTintColor: "#ffffff", }} /> */}
            <Stack.Screen name = "TestViewScreen" component = { TestViewScreen } />
        </Stack.Navigator>
    )
}