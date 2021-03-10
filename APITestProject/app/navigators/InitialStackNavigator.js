import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnClickAPICallScreen from "../screens/OnClickAPICallScreen";
import OnClickAPIPostScreen from "../screens/OnClickAPIPostScreen";
import TestScreen from "../screens/TestScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import LoginTestScreen from "../screens/LoginTestScreen";
import RegisterTestScreen from "../screens/RegisterTestScreen";
import ProductListingTestScreen from "../screens/ProductListingTestScreen";
import ProductSearchingTestScreen from "../screens/ProductSearchingTestScreen";
import GetUserAddressTestScreen from "../screens/GetUserAddressTestScreen";

const InitialStack = createStackNavigator();

function InitialStackNavigator(params) {
    return(
        <InitialStack.Navigator>
            {/* <InitialStack.Screen name = "OnClickAPICallScreen" component = { OnClickAPICallScreen }/> */}
            {/* <InitialStack.Screen name = "OnClickAPIPostScreen" component = { OnClickAPIPostScreen }/> */}
            {/* <InitialStack.Screen name = "TestScreen" component = { TestScreen } /> */}
            {/* <InitialStack.Screen name = "ProductDetailScreen" component = { ProductDetailScreen }/> */}
            {/* <InitialStack.Screen name = "LoginTestScreen" component = { LoginTestScreen } /> */}
            {/* <InitialStack.Screen name = "RegisterTestScreen" component = { RegisterTestScreen } /> */}
            {/* <InitialStack.Screen name = "ProductListingTestScreen" component = { ProductListingTestScreen } /> */}
            {/* <InitialStack.Screen name = "ProductSearchingTestScreen" component = { ProductSearchingTestScreen } /> */}
            <InitialStack.Screen name = "GetUserAddressTestScreen" component = { GetUserAddressTestScreen } />
        </InitialStack.Navigator>
    )
}

export default InitialStackNavigator;