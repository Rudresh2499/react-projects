/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import InitialNavigatorStack from './react/navigators/InitialNavigator';

export default function App(props) {
  return (
    <NavigationContainer>
      <InitialNavigatorStack />
    </NavigationContainer>
  )
}