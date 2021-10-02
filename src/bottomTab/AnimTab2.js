import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from '../components/Icons';
import Colors from '../constants/Colors';
import ColorScreen from './ColorScreen';
import * as Animatable from 'react-native-animatable';

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: ColorScreen },
  { route: 'Search', label: 'Search', type: Icons.Feather, icon: 'search', component: ColorScreen },
  { route: 'Add', label: 'Add', type: Icons.Feather, icon: 'plus-square', component: ColorScreen },
  { route: 'Like', label: 'Like', type: Icons.Feather, icon: 'heart', component: ColorScreen },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: ColorScreen },
];

const Tab = createBottomTabNavigator();

export default function AnimTab2() {
  return (
    <View>
      <Text>Teb2</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
