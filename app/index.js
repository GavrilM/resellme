
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from 'firebase'

import FirebaseConfig from './config'

import DrawerNav from './layouts/material'

import Data from './dummy'

export default class resellme extends Component {
  render() {
    const appData = firebase.initializeApp(FirebaseConfig)

    return (
      <View style={styles.container}>
        <DrawerNav  firebase={appData}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
});
