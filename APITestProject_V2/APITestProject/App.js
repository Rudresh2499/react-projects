/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import InitialStackNavigator from "./app/navigators/InitialStackNavigator";

export default function App(props) {
  return(
    <NavigationContainer>
      <InitialStackNavigator />
    </NavigationContainer>
  )
}