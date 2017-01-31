import React, {Component} from 'react'
import { Text, View, Navigator, TouchableOpacity, DrawerLayoutAndroid, NativeModules } from 'react-native'

import { COLOR, ThemeProvider, Toolbar, Drawer } from 'react-native-material-ui';

import Filter from '../../components/filter'
import Home from '../../routes/home'
import Product from '../../routes/product'

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
    const props = {
      toggleDrawer: () => this.refs.drawer.openDrawer(),
      navigator: nav
    }

    let content;

    switch(route.title){
      case 'Home': content = Home; break;
      case "Product": content = Product; props.item = route.item; break;
      default: content = <Text>Failed.</Text>; break;
    }

    return <Filter data={this.props.data} content={content} passedProps={props} />
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
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottomAndroid}
                initialRoute={{title:'Home', index:0}}
                renderScene={(r,n) => this.renderScene(r,n)}
                sceneStyle={Styles.scene}
            />
          </DrawerLayoutAndroid>
        </ThemeProvider>)
  }
}
