import { StyleSheet } from 'react-native'

const cellHeight = 100

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
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: cellHeight - 30,
    // maxWidth: 60,
    maxHeight: 80,
    // // borderColor: 'black',
    // // borderWidth: 2,
    // // padding: 20,
    // // backgroundColor: 'black',
    // borderRadius: 50
  },
  text:{
    textAlign:'center',
    height: 30,
  },
  price: {
    fontWeight: '600'
  },
  indicator: {
    borderColor: 'orange',
    borderWidth: 2,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
