import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../screens/LandingScreen";
import PlaylistScreen from "../screens/PlaylistScreen";
import TestScreen from "../screens/TestScreen";

const InitialStack = createStackNavigator()

function InitialNavigator() {
    return(
        <InitialStack.Navigator mode = "modal">
            <InitialStack.Screen name = "LandingScreen" component = { LandingScreen } options = {{header: () => null}} />
            <InitialStack.Screen name = "PlaylistScreen" component = {PlaylistScreen} options = {{header: () => null}} />
            {/* <InitialStack.Screen name = "TestScreen" component = { TestScreen } options = {{header: () => null}} /> */}
        </InitialStack.Navigator>
    )
}

export default InitialNavigator;