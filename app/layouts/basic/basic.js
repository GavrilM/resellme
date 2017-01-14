import React, {Component} from 'react'
import { Text, View, Navigator, TouchableOpacity } from 'react-native'

import Home from '../routes/home'
import ProductDetail from '../components/productDetail'

import Styles from './styles'

export default class BasicNav extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  renderScene(route, nav) {
    switch(route.title){
      case 'Master': return <Home navigator={nav}/>
      case "Detail": return <ProductDetail innerText={route.text} navigator={nav}/>
      default: return <Text>Failed.</Text>
    }
  }

  render(){
    const routemap={
       LeftButton: (route, navigator, index, navState) => {
         return (route.index === 0) ?
            (<View
              style={Styles.navbarItem}>
                <Text>Menu</Text>
              </View>) :
            (<TouchableOpacity
              style={Styles.navbarItem}
              onPress={() => {navigator.pop()}}>
                <Text>Back</Text>
            </TouchableOpacity>)
          },
       RightButton: (route, navigator, index, navState) =>
         { return (<View style={Styles.navbarItem}><Text>Done</Text></View>); },
       Title: (route, navigator, index, navState) =>
         { return (<View style={Styles.navbarItem}><Text>Awesome Nav Bar</Text></View>); },
     }

     return <Navigator
      initialRoute={{title:'Master', index:0}}
      renderScene={this.renderScene}
      navigationBar={
        <Navigator.NavigationBar
          routeMapper={routemap}
          style={Styles.navbar}
        />
      }
      sceneStyle = {Styles.scene}
    />
  }
}
