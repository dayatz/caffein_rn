/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  View,
} from 'react-native'

import App from './app/index'

class CaffeIn extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <App />
      </View>
    )
  }
}

AppRegistry.registerComponent('CaffeIn', () => CaffeIn)
