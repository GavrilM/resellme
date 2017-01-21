import React, {Component} from 'react'
import { Text, View, Image } from 'react-native'

import Styles from './styles'

export default (props) => {
    return <View style={Styles.main}><Text>{props.innerText}</Text></View>
}
