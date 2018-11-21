import React, { Component } from 'react'
import { StyleSheet, View, Switch } from 'react-native'
/*
* Switch
* 作为'受控组件' -- 通过onValueChange回调来更新value属性以响应用户操作
* disabled [bool] -- 为true时则禁用此组件的交互
* trackColor [object] -- 设置Switch背景颜色;在IOS端, switch值为false时,轨道将收缩到边里。如果你想要收缩轨道再次暴露出来时，改变边的颜色，就应该使用ios_backgroundColor
* ios_backgroundColor [string] -- 在IOS端里，背景以常用颜色为主。当switch的值为false或者switch被禁用时，背景颜色也能被改变
* onValueChange [function] -- 当值改变的时候调用此回调函数，参数为新的值
* testID [string] -- 用来在端到端测试中定位此视图
* thumbColor [color] -- switch圆形按钮的背景颜色，在IOS上设置此颜色会丢失按钮的投影
* tintColor [color] -- 关闭状态时的边框颜色(ios)或背景颜色(anroid)
* value [bool] -- 表示开关是否打开
*/

class SwitchElement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true
    }
  }
  render() {
    const {isOpen} = this.state
    return (
      <View style={styles.box}>
        <Switch
          disabled={false}
          testID={'switchElement'}
          trackColor={{false: '#cccccc', true: '#ffffff'}}
          thumbColor={'blue'}
          onValueChange={(value) => {
            this.setState(previusState => {
              return { isOpen: !previusState.isOpen }
            })
          }}
          value={isOpen}>
        </Switch>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    padding: 20
  }
})

export default SwitchElement
