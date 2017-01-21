
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DrawerNav from './layouts/material'

import Data from './dummy'

export default class resellme extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerNav data={Data}/>
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
