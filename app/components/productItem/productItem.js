import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import { ListItem } from 'react-native-material-ui'

import Styles from './styles'
import Pic from "../../lib/game.png"

export default (props) => {
  return <ListItem
            divider
            leftElement={ <Image source={props.item.img} style={Styles.image} resizeMode='contain'/> }
            centerElement={{
                primaryText: props.item.name,
                secondaryText: props.item.about,
            }}
            rightElement={ <Text style={Styles.price}>${props.item.cost}</Text> }
            onPress={props.clicked}
            numberOfLines={3}
            style={{
              contentViewContainer:{
                flex:1,
              },
              textViewContainer: {
                flex: .45,
                alignItems: 'center',
                justifyContent: 'center'
              },
              leftElementContainer:{
                flex:.35,
                alignItems: 'center',
                justifyContent: 'center'
              },
              rightElementContainer:{
                flex:.2,
                alignItems: 'center',
                justifyContent: 'center'
              }
            }}
        />
  // return <TouchableNativeFeedback onPress={props.clicked}>
  //         <View style={Styles.stretch}>
  //           <Image source={props.item.img} style={Styles.image} resizeMode='contain'/>
  //           <Text style={Styles.text}>{props.item.name}</Text>
  //           <Text style={Styles.text}>${props.item.cost}</Text>
  //         </View>
  //       </TouchableNativeFeedback>
}
