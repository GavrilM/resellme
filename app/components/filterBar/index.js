import React, {Component} from 'react'
import { View, Text, TextInput, ToastAndroid, Picker, TouchableNativeFeedback, Alert } from 'react-native'
import { Toolbar, Button } from 'react-native-material-ui';

import NavBar from '../navbar'

export default class FilterBar extends Component{
  constructor(props){
    super(props)
    this.state= {open: false, condition:''}
    //priceMin, priceMax, condition
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  openFilter(){
    ToastAndroid.show("Filter enabled", ToastAndroid.SHORT);
    this.props.toggleFilter(true);
    this.setState({open: true});
  }

  closeFilter(){
    ToastAndroid.show("Filter disabled", ToastAndroid.SHORT);
    this.props.toggleFilter(false);
    this.filter({open: false, condition:undefined, priceMin:undefined, priceMax:undefined});
  }

  filter(obj){
    this.props.filterData(Object.assign(this.state,obj))
    this.setState(obj)
  }

  render(){
    const btn = <Button 
              uppercase= {false}
              onPress={() => this.setModalVisible(true)} 
              text ={this.state.priceMin || this.state.priceMax ? (this.state.priceMin + " - " + this.state.priceMax) : "No Price Range" }/>

    return this.state.open ?
      <View>
        <NavBar {...this.props.navProps} submitSearch={ text => this.filter({search: text}) } openFilter={() => this.openFilter()}/>
        <Toolbar
          leftElement= "close"
          onLeftElementPress={() => this.closeFilter()}
          centerElement= {<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>

            <Picker
              selectedValue={this.state.condition}
              onValueChange={(val) => this.filter({condition: val})}
              style={{width: 125}}>
              <Picker.Item label="No Condition" value="" />
              <Picker.Item label="Like New" value="Like New" />
              <Picker.Item label="Lightly Used" value="Lightly Used" />
              <Picker.Item label="Fair" value="Fair" />
              <Picker.Item label="Well Worn" value="Well Worn" />
              <Picker.Item label="Falling Apart" value="Falling Apart" />
            </Picker>

            <View style={{flexDirection: 'row', width: 100}}>
              <Text style={{fontSize: 16}}>$</Text>
              <TextInput
                keyboardType= 'numeric'
                style={{height: 35, width:35, fontSize: 16}}
                onChangeText={(text) => this.filter({priceMin: text})}
                value={this.state.priceMin}
                placeholder= "Min"
              />
              <Text style={{fontSize: 16}}> - $</Text>
              <TextInput
                keyboardType= 'numeric'
                style={{height: 35, width: 40, fontSize: 16}}
                onChangeText={(text) => this.filter({priceMax: text})}
                value={this.state.priceMax}
                placeholder= "Max"
              />
            </View>
            

          </View>}
          style={{ container: {marginTop: 50} }}
        /> 
      </View>:
      <NavBar {...this.props.navProps} submitSearch={ text => this.filter({search: text}) } openFilter={() => this.openFilter()}/>
  }
}
