import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon, { Icons } from '../components/Icons';
import Colors from '../constants/Colors';
import ColorScreen from './ColorScreen';

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: ColorScreen, color: Colors.primary, alphaClr: Colors.primaryAlpha },
  { route: 'Search', label: 'Search', type: Icons.Feather, icon: 'search', component: ColorScreen, color: Colors.green, alphaClr: Colors.greenAlpha },
  { route: 'Add', label: 'Add New', type: Icons.Feather, icon: 'plus-square', component: ColorScreen, color: Colors.red, alphaClr: Colors.redAlpha },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: ColorScreen, color: Colors.purple, alphaClr: Colors.purpleAlpha },
];

const Tab = createBottomTabNavigator();

export default function AnimTab3() {
  return (
    <View>
      <Text>Teb3</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
