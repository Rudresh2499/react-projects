/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./app/screens/LoginScreen";
import AuthStack from "./navigators/InitialStackNavigator";

class App extends Component
{

  onPressHandler(props) {
    console.log("Press Handler called")
  }

  render() {
    return(
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    )
  }
}

export default App;
