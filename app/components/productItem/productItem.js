import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import { ListItem } from 'react-native-material-ui'

import Styles from './styles'
import Loader from "../../resource/ring.gif"

export default class ProductItem extends Component{
  constructor(props){
    super(props)
    this.state = { url: '' }
  }

  componentDidMount(){

  }

  render() {
    const src = this.props.item.image ? {uri: this.props.item.image} : Loader
    return <ListItem
              divider
              leftElement={ <Image source={src} style={Styles.image} resizeMode='contain'/> }
              centerElement={{
                  primaryText: this.props.item.name,
                  secondaryText: this.props.item.about,
              }}
              rightElement={ <Text style={Styles.price}>${this.props.item.cost}</Text> }
              onPress={this.props.clicked}
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
      }
  // return <TouchableNativeFeedback onPress={props.clicked}>
  //         <View style={Styles.stretch}>
  //           <Image source={props.item.img} style={Styles.image} resizeMode='contain'/>
  //           <Text style={Styles.text}>{props.item.name}</Text>
  //           <Text style={Styles.text}>${props.item.cost}</Text>
  //         </View>
  //       </TouchableNativeFeedback>
}
