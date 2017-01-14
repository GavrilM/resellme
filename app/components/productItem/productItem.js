import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'

import Styles from './styles'

export default (props) => {
  return <TouchableNativeFeedback onPress={props.clicked}>
          <View style={Styles.stretch}>
            <Text style={{textAlign:'center', height: 30}}>{props.item}</Text>
          </View>
        </TouchableNativeFeedback>
}
