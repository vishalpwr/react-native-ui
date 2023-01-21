import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { ScreensArray } from '../arrays';
import CustomDrawer1 from './CustomDrawer1';

const Drawer = createDrawerNavigator();

const DrawerNav1 = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: styles.drawerStyles,
        drawerType: 'front',
        swipeEdgeWidth: Platform.OS === 'android' && 180,
      }}
      drawerContent={(props) => <CustomDrawer1 {...props} />}
    >
      {ScreensArray.map((_, i) => (
        <Drawer.Screen key={i} name={_.route} component={_.component}
          options={{
            item: _,
          }}
        />
      ))}
    </Drawer.Navigator>
  )
}

export default DrawerNav1

const styles = StyleSheet.create({
  drawerStyles: {
    width: 260,
    backgroundColor: 'transparent',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
})