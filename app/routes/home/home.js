import React, { Component } from 'react'
import { View } from 'react-native'
import { Toolbar, ActionButton } from "react-native-material-ui"

import Styles from './styles'

import FilterBar from '../../components/filterBar'
import ProductList from '../../components/productList'

export default class Home extends Component{
  constructor(props) {
    super(props)
    this.state= {}
  }

  navigate(data){
    this.props.navigator.push(data)
  }

  toggleFilter(bool){
    this.setState({filterOpen: bool})
  }

  render() {
    const top = this.state.filterOpen ? 100 : 50;
    const navProps = {
      title: 'Home',
      initial: true,
      navigator: this.props.navigator,
      openDrawer: () => this.props.toggleDrawer()
    }

    return (<View>
      <FilterBar 
        filterData={(o) => this.props.filterData(o)}
        toggleFilter={t => this.toggleFilter(t)}
        navProps={navProps}/>
      <View style={{marginTop: top}}>
        <ProductList
          navigateTo = {(o) => this.navigate(o)}
          data={this.props.data}
        />
      </View>
      <ActionButton
        icon="share"
        onPress={() => this.navigate({title: 'Add New'})}
      />
    </View>)
  }
}
