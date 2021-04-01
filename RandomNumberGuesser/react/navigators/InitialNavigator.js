import React from "react";
import { Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "../screens/GameScreen";
import LandingScreen from "../screens/LandingScreen";
import AntIcons from "react-native-vector-icons/AntDesign";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import InstructionsResource from "../instructionsResource/instructionsResource";

const ScreenStack = createStackNavigator();

function InitialNavigatorStack(props) {
    function viewRulesHandler() {
        navigation.navigate("LandingScreen");
    }

    return (
        <ScreenStack.Navigator mode="modal">
            <ScreenStack.Screen
                name="LandingScreen"
                component={LandingScreen}
                options={
                    {
                        headerStyle: {
                            backgroundColor: "#ffffff",
                            shadowColor: "transparent",
                        },
                        headerTitle: null
                    }
                }
            />
            <ScreenStack.Screen
                name="GameScreen"
                component={GameScreen}
                options={
                    {
                        headerStyle: {
                            backgroundColor: "#333333",
                            shadowColor: "transparent",
                        },
                        headerTitle: null,
                        headerLeft: () => null,
                    }
                }
            />
        </ScreenStack.Navigator >
    )
}

export default InitialNavigatorStack;