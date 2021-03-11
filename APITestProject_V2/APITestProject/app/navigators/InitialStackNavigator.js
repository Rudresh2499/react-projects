import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnClickAPICallScreen from "../screens/OnClickAPICallScreen";
import OnClickAPIPostScreen from "../screens/OnClickAPIPostScreen";
import TestScreen from "../screens/TestScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import LoginTestScreen from "../screens/LoginTestScreen";
import AddressAddTestScreen from "../screens/AddressAddTestScreen";

const InitialStack = createStackNavigator();

function InitialStackNavigator(params) {
    return(
        <InitialStack.Navigator>
            {/* <InitialStack.Screen name = "OnClickAPICallScreen" component = { OnClickAPICallScreen }/> */}
            {/* <InitialStack.Screen name = "OnClickAPIPostScreen" component = { OnClickAPIPostScreen }/> */}
            {/* <InitialStack.Screen name = "TestScreen" component = { TestScreen } /> */}
            {/* <InitialStack.Screen name = "ProductDetailScreen" component = { ProductDetailScreen }/> */}
            {/* <InitialStack.Screen name = "LoginTestScreen" component = { LoginTestScreen } /> */}
            <InitialStack.Screen name = "AddressAddTestScreen" component = { AddressAddTestScreen } />
        </InitialStack.Navigator>
    )
}

export default InitialStackNavigator;