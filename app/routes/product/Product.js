import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Toolbar, Subheader } from "react-native-material-ui"

import Styles from './styles'

import NavBar from '../../components/navbar'
import ProductDetail from '../../components/productDetail'

export default class ProductList extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return <View style={{paddingBottom: 15}}>
            <NavBar title={this.props.item.name} navigator={this.props.navigator} openDrawer={() => this.props.toggleDrawer()}/>
            <ScrollView style={{marginTop: 50}}>
              <ProductDetail item={this.props.item}/>
              <Subheader text="About this Product" />
              <Text style={{paddingHorizontal: 30}}>{this.props.item.about}</Text>
            </ScrollView>
          </View>

  }
}
