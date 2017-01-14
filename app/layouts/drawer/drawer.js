import React, {Component} from 'react'
import { Text, View, Navigator, TouchableOpacity, DrawerLayoutAndroid } from 'react-native'

import Home from '../../routes/home'
import ProductDetail from '../../components/productDetail'

import Styles from './styles'

export default class DrawerLayout extends Component{
  constructor(props){
    super(props)
  }

  renderScene(route, nav){
    switch(route.title){
      case 'Master': return <Home navigator={nav}/>
      case "Detail": return <ProductDetail innerText={route.text} navigator={nav}/>
      default: return <Text>Failed.</Text>
    }
  }

  render(){
    const routemap={
       LeftButton: (route, navigator, index, navState) => {
         return (route.index === 0 ?
           <TouchableOpacity
              onPress={() => this.refs.drawer.openDrawer()}
              style={Styles.navbarItem}>
                <Text>Menu</Text>
            </TouchableOpacity> :
            <TouchableOpacity
                 onPress={() => navigator.pop()}
                 style={Styles.navbarItem}>
                   <Text>Back</Text>
               </TouchableOpacity>)
          },
       RightButton: (route, navigator, index, navState) =>
         { return (<View style={Styles.navbarItem}><Text>Done</Text></View>); },
       Title: (route, navigator, index, navState) =>
         { return (<View style={Styles.navbarItem}><Text>Awesome Nav Bar</Text></View>); },
     }
     const navigationView = <TouchableOpacity onPress={ () => this.refs.drawer.closeDrawer() }><Text>Press Me!</Text></TouchableOpacity>;

    return (
      <DrawerLayoutAndroid
        ref="drawer"
        drawerWidth={200}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView = {() => navigationView}>
          <Navigator
          initialRoute={{title:'Master', index:0}}
          renderScene={(r,n) => this.renderScene(r,n)}
          sceneStyle={Styles.scene}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={routemap}
              style={Styles.navbar}
            />
          }/>
      </DrawerLayoutAndroid>)
  }
}
