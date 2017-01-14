import React, { Component } from 'react'
import { View, ListView, TouchableOpacity } from 'react-native'

import Styles from './styles'
import ProductItem from '../productItem/productItem'

export default class ProductList extends Component{
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const src =['row 1', 'row 2', 'row 3', 'row 4', 'row infinity']
    this.state = {
      src,
      dataSource: ds.cloneWithRows(src),
    };
    this.renderRow = this.renderRow.bind(this)
  }
  didSelectRow(i,row){
    this.props.navigateTo({title: 'Detail', text:row, index: i+1})
  }
  renderRow(rowData, sectionID, rowID, highlightRow) {
    return   <ProductItem
                key={rowData}
                item={rowData}
                clicked={() => this.didSelectRow(rowID, rowData)}
              />
  }
  render() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
      renderSeparator={ (sectionId, rowId) => <View key={rowId} style={Styles.separator} />}
    />
  }
}
