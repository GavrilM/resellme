import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Toolbar, Subheader, Button } from "react-native-material-ui"

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
              <Subheader text="Seller Info" />
              <View style={{height: 70, alignItems:'center', justifyContent: 'space-around'}}>
                <Text style={{fontWeight:'700', fontSize:20}}>{this.props.item.user}</Text>
                <Button primary text="Contact"/>
              </View>
            </ScrollView>
          </View>

  }
}
