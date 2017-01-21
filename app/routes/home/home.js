import React, { Component } from 'react'
import { View } from 'react-native'
import { Drawer, Toolbar, Container } from "react-native-material-ui"

import Styles from './styles'

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
    return <ProductList
              navigateTo = {(o) => this.navigate(o)}
              data={this.props.data}
            />
  }
}
