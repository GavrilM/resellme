import React, {Component} from 'react'
import { Toolbar } from 'react-native-material-ui';


export default class NavBar extends Component{
  constructor(props){
    super(props)
    this.state= {}
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
          searchable={{
              autoFocus: true,
              placeholder: 'Search',
              onChangeText: value => this.props.submitSearch(value),
              onSearchClosed: () => this.props.submitSearch(''),
          }}
          rightElement={{
              actions: ['edit'],
          }}
          onRightElementPress={() => this.props.openFilter()}
        />
  }
}
