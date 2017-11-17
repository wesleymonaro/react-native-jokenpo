import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

export default class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('../../imgs/jokenpo.png')} />
      </View>
    )
  }
}