import React, {Component} from 'react'
import { Toolbar } from 'react-native-material-ui';


export default class NavBar extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const props = {
        key: "toolbar",
        centerElement: this.props.title,
        style: {
            container: { backgroundColor: 'white' },
            titleText: { color: 'rgba(0,0,0,.87)' },
            leftElement: { color: 'rgba(0,0,0,.54)' },
            rightElement: { color: 'rgba(0,0,0,.54)' },
        }
    }
    return !this.props.initial ?
      <Toolbar
        leftElement= "close"
        onLeftElementPress={() => this.props.navigator.pop()}
        { ...props }
      /> :
      <Toolbar
          leftElement= "menu"
          onLeftElementPress={() => this.props.openDrawer()}
          { ...props }
        />
  }
}
