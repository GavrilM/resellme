import React, {Component} from 'react'
import { View } from 'react-native'

export default class Filter extends Component{
	constructor(props){
		super(props)
	}

	filterData(){
		return this.props.data;
	}

	render(){
		this.props.content.data = this.filterData();
		return <View>
			{this.props.content}
			</View>
	}
}