import React, {Component} from 'react'
import { Toolbar } from 'react-native-material-ui';

import Styles from './styles'

export default class NavBar extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return this.props.navigator.getCurrentRoutes().length > 1 ?
      <Toolbar
        key="toolbar"
        leftElement= "arrow-back"
        onLeftElementPress={() => this.props.navigator.pop()}
        centerElement="Navigation"
        style={{
            container: { backgroundColor: 'white' },
            titleText: { color: 'rgba(0,0,0,.87)' },
            leftElement: { color: 'rgba(0,0,0,.54)' },
            rightElement: { color: 'rgba(0,0,0,.54)' },
        }}
      /> :
      <Toolbar
          key="toolbar"
          leftElement= "menu"
          onLeftElementPress={() => this.props.openDrawer()}
          centerElement="Navigation"
          style={{
              container: { backgroundColor: 'white' },
              titleText: { color: 'rgba(0,0,0,.87)' },
              leftElement: { color: 'rgba(0,0,0,.54)' },
              rightElement: { color: 'rgba(0,0,0,.54)' },
          }}
        />
  }
}
