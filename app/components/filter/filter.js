import React, {Component} from 'react'
import { View } from 'react-native'

export default class Filter extends Component{
	constructor(props){
		super(props)
		this.state = { data: this.props.data }
	}

	filterData(filters){
		if(Object.keys(filters).length === 0 && filters.constructor === Object) 
			return this.state.data;
		const newData = this.props.data.filter((obj,index,arr) => {
			let ret = true;
			if((filters.condition && obj.condition !== filters.condition) ||
				(filters.priceMin && obj.cost < filters.priceMin) ||
				(filters.priceMax && obj.cost > filters.priceMax) ||
				(filters.search && obj.name.toLowerCase().indexOf(filters.search.toLowerCase()) < 0)){
				ret = false;			
			}
			return ret;
		});
		this.setState({data: newData});
		console.log('filter', filters)
	}

	render(){
		const Content = this.props.content
		return <View>
			<Content {...this.props.passedProps} data={this.state.data} filterData={(o) => this.filterData(o)}/>
			</View>
	}
}