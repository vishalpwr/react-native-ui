import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon, { Icons } from '../components/Icons';
import Screen from '../screens/Screen';
import Colors from '../constants/Colors';

const Tab = createMaterialBottomTabNavigator();

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: Screen, tabBarColor: Colors.primary, badge: false },
  { route: 'Search', label: 'Search', type: Icons.Feather, icon: 'search', component: Screen, tabBarColor: Colors.green, badge: false },
  { route: 'Add', label: 'Add', type: Icons.Feather, icon: 'plus-square', component: Screen, tabBarColor: Colors.red, badge: false },
  { route: 'Like', label: 'Like', type: Icons.Feather, icon: 'heart', component: Screen, tabBarColor: Colors.yellow, badge: true },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: Screen, tabBarColor: Colors.purple, badge: true },
];

export default function Tab4() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        shifting={true}
        barStyle={{ height: 70 }}
        screenOptions={{}}>
        {TabArr.map((_, index) => {
          return (
            <Tab.Screen key={index} name={_.route} component={_.component}
              options={{
                tabBarColor: _.tabBarColor,
                tabBarBadge: _.badge,
                tabBarIcon: ({ color, size }) => (
                  <Icon name={_.icon} type={_.type} size={size} color={color} />
                )
              }}
            />
          )
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})
