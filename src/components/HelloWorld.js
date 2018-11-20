import React, { Component } from 'react'
import { AppRegistry, Text, TextInput, View } from 'react-native'

// TextInput是一个允许用户输入文本的基础组件
// 它有一个名为onChangeText的属性，此属性接受一个函数，而此函数会在文本变化时被调用

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    )
  }
}
