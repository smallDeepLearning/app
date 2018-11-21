import React, { Component } from 'react'
import {
  Image,
  View,
  Text
} from 'react-native'

// 基础组件Image
// 名为source的prop来指定要显示的图片地址
// 名为style的prop来控制图片尺寸
// 请注意{pic}外围有一层括号，我们通过使用括号把pic这个变量嵌入JSX语句中。
// 括号内部作为一个js变量或表达式，需要执行后取值的。 -- 任意合法的js表达式

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello, {this.props.name}!</Text>
      </View>
    )
  }
}

// 自定义组件也可以使用props

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={pic} style={{width: 193, height: 110}} />
        <Greeting name="Rexxar" />
        <Greeting name="Jaina" />
      </View>
    )
  }
}
