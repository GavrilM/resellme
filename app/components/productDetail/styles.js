import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  main: {
    flex:1,
    backgroundColor: 'white',
  },
  image: {
    height: 300,
    maxHeight: 350,
    maxWidth: Dimensions.get('window').width -20
  },
  imageContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding:15,
  },
  details: {
    flex:1,
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailLeft: {
    flex:.75,
  },
  detailRight: {
    flex:.25,
    alignItems: 'center',
  },
  productName: {
    fontWeight:'700',
    fontSize: 24
  },
  line: {
    width: 5000,
    height:1,
    backgroundColor: 'grey',
    marginLeft: 20,
    marginTop:10
  }
})
