import { StyleSheet } from 'react-native'

const cellHeight = 50

export default StyleSheet.create({
  stretch: {
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection: 'row',
    height: cellHeight,
    paddingLeft: 25,
    paddingRight: 25,
  },
  image: {
    width: cellHeight - 10,
    // borderColor: 'black',
    // borderWidth: 2,
    // padding: 20,
    // backgroundColor: 'black',
    borderRadius: 50
  },
  text:{
    textAlign:'center',
    height: 30,
  },
  indicator: {
    borderColor: 'orange',
    borderWidth: 2,
  }
})
