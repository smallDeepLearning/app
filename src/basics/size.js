import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'

// 组件的高度和宽度决定了其在屏幕上显示的尺寸 -- 指定固定的width和height
// React Native中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点
// 在组件样式中使用flex可以使其在可利用的空间中动态地扩张或收缩

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}
