import React, { Component } from 'react'
import { Text, View } from 'react-native'

// 我们通过两种数据来控制一个组件: props和state
// props是在父组件里指定的，不再变化
// state是来改变数据的

// 原理： constructor中初始化state, 需要修改时再调用setState方法
// 要点: setState是一个merge合并操作, 只需要修改指定的属性， 不影响其他属性
//       setState是一个异步操作，修改后不会，马上生效


class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = { isShowingText: true }

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText }
      })
    }, 5000)
  }

  render() {
    if (!this.state.isShowingText) {
      return null
    }
    return (
      <Text>{this.props.text}</Text>
    )
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    )
  }
}
