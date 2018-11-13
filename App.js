import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    )
  }
}

const Navigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
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
