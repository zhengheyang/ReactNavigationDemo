/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreen from './app/screen/Main';

const App = StackNavigator({
  Main: {screen: MainScreen}
})


AppRegistry.registerComponent('ReactNavigationDemo', () => App);
