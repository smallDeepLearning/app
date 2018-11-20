import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import HelloWorld from './src/components/HelloWorld.js'


const Navigator = createStackNavigator({
  Home: { screen: HelloWorld }
}, {
  initialRouteName: 'Home',
  mode: 'modal',
  headerMode: 'none'
})

export default () => {
  return (
    <Navigator />
  )
}
