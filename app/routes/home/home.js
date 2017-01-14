import React, { Component } from 'react'
import { View } from 'react-native'

import Styles from './styles'

import ProductList from '../../components/productList'

export default class Home extends Component{
  constructor(props) {
    super(props)
    this.state= {}
  }

  navigate(data){
    this.props.navigator.push(data)
  }

  render() {
    return <ProductList
              navigateTo = {(o) => this.navigate(o)}
            />
  }
}
