import React, { Component } from 'react'
import { View, ListView, TouchableOpacity } from 'react-native'

import Styles from './styles'
import ProductItem from '../productItem/productItem'

export default class ProductList extends Component{
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const src =this.props.data;
    this.state = {
      src,
      dataSource: ds.cloneWithRows(src),
    };
    this.renderRow = this.renderRow.bind(this)
  }
  componentWillReceiveProps(props){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const src =props.data
    this.setState({
      src,
      dataSource: ds.cloneWithRows(src),
    });
  }
  didSelectRow(i,row){
    this.props.navigateTo({title: 'Product', item:row, index: 1})
  }
  renderRow(rowData, sectionID, rowID, highlightRow) {
    return   <ProductItem
                key={rowData}
                item={rowData}
                clicked={() => this.didSelectRow(rowID, rowData)}
                firebase={this.props.firebase}
              />
  }
  render() {
    return <ListView
      enableEmptySections={true}
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
      // renderSeparator={ (sectionId, rowId) => <View key={rowId} style={Styles.separator} />}
    />
  }
}
