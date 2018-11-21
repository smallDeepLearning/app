import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'

//  React Native中使用 flexbox 规则来指定某个组件的子元素的布局
//  flexDirection可以决定布局的主轴
// 子元素水平轴(row)方向、竖直轴(column)方向、竖直轴(column)方向

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}
