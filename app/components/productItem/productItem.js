import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback, Image } from 'react-native'

import Styles from './styles'
import Pic from "../../lib/game.png"

export default (props) => {
  return <TouchableNativeFeedback onPress={props.clicked}>
          <View style={Styles.stretch}>
            <Image source={Pic} style={Styles.image} resizeMode='contain'/>
            <Text style={Styles.text}>{props.item.name}</Text>
            <Text style={Styles.text}>${props.item.cost}</Text>
          </View>
        </TouchableNativeFeedback>
}
