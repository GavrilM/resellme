import React, {Component} from 'react'
import { Text, View } from 'react-native'

import Styles from './styles'

export default class ProductDetail extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return <View style={Styles.main}><Text>{this.props.innerText}</Text></View>
  }
}
