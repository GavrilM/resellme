import { StyleSheet } from 'react-native'

const navBarHeight = 50;

export default StyleSheet.create({
  navbar: {
    backgroundColor: '#F5FCFF',
    height: navBarHeight,
  },
  scene: {
    paddingTop: navBarHeight
  },
  navbarItem: {
    flex: 1,
    justifyContent: 'center'
  }
})
