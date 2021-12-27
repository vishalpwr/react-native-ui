import React from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import MyHeader from '../components/MyHeader';
import { Button } from 'react-native-paper';

export default function Screen({ route, navigation }) {
  return (
    <View style={Styles.container}>
      <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      />
    </View>
  )
}
