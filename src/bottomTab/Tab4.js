import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon, { Icons } from '../components/Icons';
import Screen from '../screens/Screen';
import Colors from '../constants/Colors';

const Tab = createMaterialBottomTabNavigator();


const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: Screen, tabBarColor: Colors.primary },
  { route: 'Search', label: 'Search', type: Icons.Feather, icon: 'search', component: Screen, tabBarColor: Colors.green },
  { route: 'Add', label: 'Add', type: Icons.Feather, icon: 'plus-square', component: Screen, tabBarColor: Colors.red },
  { route: 'Like', label: 'Like', type: Icons.Feather, icon: 'heart', component: Screen, tabBarColor: Colors.yellow },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: Screen, tabBarColor: Colors.purple },
];

export default function Tab4() {
  return (
    <Tab.Navigator>
      {TabArr.map((_, index) => {
        return (
          <Tab.Screen key={index} name={_.route} component={_.component}
            options={{
              tabBarColor: _.tabBarColor,
              tabBarIcon: ({color, size}) => (
                <Icon name={_.icon} type={_.type} size={size} color={color} />
              )
            }}

          />
        )
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({})
