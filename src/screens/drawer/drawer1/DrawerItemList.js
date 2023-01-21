import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constant'
import Icon from '../../../components/Icons'


const DrawerItem = ({ label, onPress, tabBarTestID, type, name, notification,
  activeItemColor, color, styles }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={tabBarTestID}
      accessibilityRole="button"
      style={[styles.drawerItem, { backgroundColor: activeItemColor }]}
    >
      <View style={styles.row}>
        <Icon type={type} name={name} {...{ color }} />
        <Text style={[styles.label, { color }]}>{label}</Text>
      </View>
      {notification > 0 && <View style={[styles.notificationBadge,
      { backgroundColor: notification > 5 ? colors.important : colors.normal }]}>
        <Text>{notification}</Text>
      </View>}
    </TouchableOpacity>
  )
}

const DrawerItemList = ({ state, descriptors, navigation, styles }) => {
  return (
    <View style={styles.view}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          })
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        }
        {/* console.log(options) */ }

        const drawerItem = options.item;
        const color = isFocused ? colors.dark : colors.darkGray;
        const activeItemColor = isFocused ? colors.primary : null;

        return (
          <DrawerItem key={index} label={drawerItem.label}
            tabBarTestID={options.tabBarTestID}
            onPress={onPress}
            name={drawerItem.icon}
            type={drawerItem.type}
            notification={drawerItem.notification}
            color={color}
            activeItemColor={activeItemColor}
            styles={styles}
          />
        )
      })}
    </View>
  )
}

export default DrawerItemList
