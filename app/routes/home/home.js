import React, { Component } from 'react'
import { View } from 'react-native'
import { Toolbar } from "react-native-material-ui"

import Styles from './styles'

import NavBar from '../../components/navbar'
import ProductList from '../../components/productList'

export default class Home extends Component{
  constructor(props) {
    super(props)
    this.state= {}
    this.leftToolbarPress = this.leftToolbarPress.bind(this)
  }

  navigate(data){
    this.props.navigator.push(data)
  }

  leftToolbarPress(){
    this.props.toggleDrawer();
  }

  render() {
    return (<View>
      <NavBar title='Home' initial={true} navigator={this.props.navigator} openDrawer={() => this.props.toggleDrawer()}/>
      <View style={{marginTop: 50}}>
        <ProductList
          navigateTo = {(o) => this.navigate(o)}
          data={this.props.data}
        />
      </View>
    </View>)
  }
}
