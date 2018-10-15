import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, WebView} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Notification from './src/components/Notification'
import Home from './src/container/Home'

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Notif: Notification
})

export default class App extends Component {
  render() {
    return (
      <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
