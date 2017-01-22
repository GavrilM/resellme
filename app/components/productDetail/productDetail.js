import React, {Component} from 'react'
import { Text, ScrollView, View, Image, Dimensions } from 'react-native'
import { Button } from 'react-native-material-ui'

import Styles from './styles'

export default (props) => {
    const width = Dimensions.get('window').width-40;
    return <View style={Styles.main}>
            <View style={Styles.imageContainer}>
              <Image source={props.item.img} style={Styles.image} resizeMode='contain'/>
            </View>
            <View style={Styles.details}>
              <View style={Styles.detailLeft}>
                <Text style={Styles.productName}>{props.item.name}</Text>
                <Text style={Styles.condition}>{props.item.condition}</Text>
              </View>
              <View style={Styles.detailRight}>
                <Button raised primary text={"$"+props.item.cost} style={{ container:{ width:100 }}}/>
              </View>
            </View>
            <View style={Styles.line} />
          </View>
}
