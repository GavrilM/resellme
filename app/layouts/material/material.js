import React, {Component} from 'react'
import { Text, View, Navigator, TouchableOpacity, DrawerLayoutAndroid, NativeModules } from 'react-native'

import { COLOR, ThemeProvider, Toolbar, Drawer } from 'react-native-material-ui';

import Home from '../../routes/home'
import ProductDetail from '../../components/productDetail'

import NavBar from './navbar'
import Styles from './styles'

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
        },
    },
};

export default class MaterialLayout extends Component{
  constructor(props){
    super(props)
  }

  renderScene(route, nav){
    switch(route.title){
      case 'Master': return <Home navigator={nav} data={this.props.data} toggleDrawer={() => this.toggleDrawer()}/>
      case "Detail": return <ProductDetail item={route.item} navigator={nav}/>
      default: return <Text>Failed.</Text>
    }
  }

  render(){
    const navigationView = (
      <Drawer>
        <Drawer.Section
            divider
            items={[
                { icon: 'bookmark-border', value: 'Notifications' },
                { icon: 'today', value: 'Calendar', active: true },
                { icon: 'people', value: 'Clients' },
            ]}
        />
        <Drawer.Section
            title="Personal"
            items={[
                { icon: 'info', value: 'Info' },
                { icon: 'settings', value: 'Settings' },
            ]}
        />
      </Drawer>
    )

    return (
      <ThemeProvider uiTheme={uiTheme}>
          <DrawerLayoutAndroid
            ref="drawer"
            drawerWidth={225}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView = {() => navigationView}>
              <Navigator
              initialRoute={{title:'Master', index:0}}
              renderScene={(r,n) => this.renderScene(r,n)}
              sceneStyle={Styles.scene}
              navigationBar={ <NavBar openDrawer={() => this.refs.drawer.openDrawer()}/> }
            />
          </DrawerLayoutAndroid>
        </ThemeProvider>)
  }
}
