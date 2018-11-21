import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

// 在React Native中，核心组件都接受名为style的属性 -- JavaScript 对象
// 样式名基本上是遵循了web上的CSS的命名 -- 驼峰命名法
// 在数组中位置居后的样式对象比居前的优先级更高 -- 间接实现样式

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
})
