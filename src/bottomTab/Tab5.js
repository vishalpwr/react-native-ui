import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon, { Icons } from '../components/Icons';
import Screen from '../screens/Screen';
import Colors from '../constants/Colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Ionicons, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: Screen },
  { route: 'Like', label: 'Like', type: Icons.MaterialCommunityIcons, activeIcon: 'heart-plus', inActiveIcon: 'heart-plus-outline', component: Screen },
  { route: 'Search', label: 'Search', type: Icons.MaterialCommunityIcons, activeIcon: 'timeline-plus', inActiveIcon: 'timeline-plus-outline', component: Screen },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, activeIcon: 'user-circle', inActiveIcon: 'user-circle-o', component: Screen },
];

export default function Tab5() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        swipeEnabled: false,
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          position: 'absolute',
          top: 0,
          height: 6,
          backgroundColor: Colors.primary,
        },
        tabBarItemStyle: { flexDirection: 'row' },
        // tabBarStyle: { backgroundColor: 'powderblue' },
        // tabBarScrollEnabled: true,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.primaryLite,
      }}
    >
      {TabArr.map((_, index) => {
        return (
          <Tab.Screen key={index} name={_.route} component={_.component}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <Icon name={focused ? _.activeIcon : _.inActiveIcon} type={_.type} size={size} color={color} />
              ),
            }}
          />
        )
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({})
