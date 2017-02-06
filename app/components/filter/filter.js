import React, {Component} from 'react'
import { View } from 'react-native'

export default class Filter extends Component{
	constructor(props){
		super(props)
		this.state = { data: [], filtered:[] }
	}

	listenForItems(itemsRef) {
		itemsRef.on('value', (snap) => {

	    // get children as an array
		    let items = [];
		    snap.forEach((child) => {
		    	items.push(Object.assign(child.val(),{key: child.key}));
		    });

		    this.setState({
		    	data: items,
		    	filtered: items
		   	});
	 	});
	 }

	 componentDidMount() {
	   this.listenForItems(this.props.firebase.database().ref('products'));
	 }


	filterData(filters){
		if(Object.keys(filters).length === 0 && filters.constructor === Object) 
			return this.state.data;
		const newData = this.state.data.filter((obj,index,arr) => {
			let ret = true;
			if((filters.condition && obj.condition !== filters.condition) ||
				(filters.priceMin && parseInt(obj.cost) < filters.priceMin) ||
				(filters.priceMax && parseInt(obj.cost) > filters.priceMax) ||
				(filters.search && obj.name.toLowerCase().indexOf(filters.search.toLowerCase()) < 0)){
				ret = false;			
			}
			return ret;
		});
		this.setState({filtered: newData});
	}

	render(){
		const Content = this.props.content
		return <View style={{flex:1}}>
			<Content {...this.props.passedProps} data={this.state.filtered} filterData={(o) => this.filterData(o)} firebase={this.props.firebase}/>
			</View>
	}
}