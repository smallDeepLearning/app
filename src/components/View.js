import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

class BoxView extends Component {
  render() {
    return (
      <View style={styles.box}>
        <View style={styles.leftBox} />
        <View style={styles.rightBox} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    padding: 20,
    height: 100
  },
  leftBox: {
    backgroundColor: 'blue',
    flex: 0.3
  },
  rightBox: {
    backgroundColor: 'red',
    flex: 0.5
  }
})

export default BoxView
