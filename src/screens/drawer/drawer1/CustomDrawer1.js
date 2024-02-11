import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useReducer, useRef } from 'react'
import { useDrawerProgress } from '@react-navigation/drawer'
import { colors, constant } from '../constant'
import Icon, { Icons } from '../../../components/Icons'
import { ProfileMenu, ProjectsArray } from '../arrays'
import Animated, { interpolate, useAnimatedStyle, useDerivedValue, withSpring, withTiming } from 'react-native-reanimated'
import DrawerItemList from './DrawerItemList'

const ProjectItem = ({
  label, onPress, type, name,
  activeItemColor, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.row, { backgroundColor: activeItemColor }]}
    >
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Icon type={type} name={name} color={colors.white} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const ProfileItem = ({ label, onPress, type, name }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.row, { margin: constant.SPACING / 4 }]}>
      <Icon type={type} name={name} color={colors.dark} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const CustomDrawer1 = (props) => {
  const { state, descriptors, navigation } = props;
  const scrollRef = useRef(null)

  const [show, toggleProfile] = useReducer(s => !s, false);

  const fun = () => {
    show ? scrollRef.current.scrollTo({
      y: 0,
      animated: true,
    }) : scrollRef.current.scrollToEnd({
      animated: true,
    })
    toggleProfile()
  }

  const progress = useDerivedValue(() => {
    return show ? withTiming(1) : withTiming(0);
  })

  const menuStyles = useAnimatedStyle(() => {
    const scaleY = interpolate(
      progress.value,
      [0, 1],
      [0, 1],
    )
    return {
      transform: [{ scaleY }]
    }
  })

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateX = interpolate(
      drawerProgress.value,
      [0, 1],
      [-200, 0],
    )
    return {
      transform: [{ translateX }]
    }
  })

  const viewStyles2 = (type) => useAnimatedStyle(() => {
    const val = type === 'top' ? -100 : 100;
    const translateY = interpolate(
      drawerProgress.value,
      [0, 1],
      [val, 0],
    )
    const opacity = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, 1],
    )
    return {
      transform: [{ translateY }], opacity
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <Animated.View style={[styles.row, styles.view, styles.marginTop, viewStyles2('top')]}>
        <View style={styles.iconContainer}>
          <Icon name="logo-electron" type={Icons.Ionicons} size={30} />
        </View>
        <Text style={styles.headerTitle}>Hello there👋</Text>
      </Animated.View>
      {/* Drawer List Item */}
      <Animated.ScrollView
        ref={scrollRef}
        {...props}
        showsVerticalScrollIndicator={false}
        style={[styles.marginVertical, viewStyles]}>
        <DrawerItemList {...props} styles={styles} />
        {/* 2nd menu */}
        <View style={[styles.view, styles.marginVertical]}>
          <Text>Projects 3</Text>
          <View style={styles.separator} />
          {ProjectsArray.map((_, i) => (
            <ProjectItem key={i}
              label={_.title}
              type={_.iconType}
              color={_.color}
              name={_.icon}
            />
          ))}
        </View>
        {/* profile menu */}
        <Animated.View style={[styles.view,
        { backgroundColor: colors.primary },
          menuStyles
        ]}>
          <Text>Kelsey Van</Text>
          <Text>kelseyvan@gmail.com</Text>
          <View style={styles.separator} />
          {ProfileMenu.map((_, i) => (
            <ProfileItem key={i} label={_.label}
              type={_.iconType}
              name={_.icon}
            />
          ))}
          <Text style={{ marginTop: 10 }}>v1.0.0 - Terms & Condition</Text>
        </Animated.View>
      </Animated.ScrollView>
      {/* footer */}
      <TouchableOpacity
        onPress={fun}>
        <Animated.View
          style={[styles.row, styles.view, styles.marginBottom, viewStyles2('bottom')]}>
          <Image style={styles.profile} source={require('../../../assets/images/avatar.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.headerTitle}>Kelsey Van</Text>
            <Text style={styles.text}>Software Engineer</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CustomDrawer1

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    backgroundColor: colors.white,
    borderRadius: constant.borderRadius,
    marginHorizontal: constant.SPACING / 2,
    padding: constant.SPACING / 1.5,
  },
  marginTop: {
    marginTop: constant.SPACING / 2,
  },
  marginBottom: {
    marginBottom: constant.SPACING / 2,
  },
  marginVertical: {
    marginVertical: constant.SPACING / 2,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: constant.SPACING / 2,
    justifyContent: 'space-between',
    borderRadius: constant.borderRadius,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: constant.textFontSize,
    color: colors.dark,
    paddingHorizontal: constant.SPACING,
  },
  notificationBadge: {
    paddingVertical: constant.SPACING / 5,
    paddingHorizontal: constant.SPACING / 2,
    borderRadius: constant.borderRadius / 2,
  },
  iconContainer: {
    padding: constant.SPACING / 2.4,
    borderRadius: constant.borderRadius,
    margin: constant.SPACING / 2,
    backgroundColor: colors.primary,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.darkGray,
    marginVertical: constant.SPACING / 2,
  },
  headerTitle: {
    fontSize: constant.titleFontSize,
    color: colors.dark,
  },
  profile: {
    marginVertical: constant.SPACING / 2,
    marginRight: constant.SPACING,
    marginLeft: constant.SPACING / 2,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.light,
  },
  profileText: {
    color: colors.dark,
  },
})