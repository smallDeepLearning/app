import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  title: {
  	lineHeight: 30,
  	textAlign: 'center',
  	fontSize: 14,
    color: '#cccccc'
  }
})

export default class App extends Component {
  render() {
    return (
      <Text style={styles.title}>Hello World!</Text>
    );
  }
}
