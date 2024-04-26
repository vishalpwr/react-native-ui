import React, { } from 'react'

import { View, Text, TouchableOpacity, StatusBar, Dimensions, StyleSheet, Platform } from 'react-native';
import Animated, { Extrapolation, interpolate, interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import Colors from '../../constants/Colors';
import MapList from '../../components/MapList';
import images from '../../assets/images/images';
import Icon, { Icons } from '../../components/Icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { TheadCTAOptionsList, TheadSettingsOptionsList, TheadSettingsOptionsList2 } from '../../constants/WhatsApp';
import { CTAItems, ListItem, MembersTab } from './Header2Components';

const { height: sHeight, width: sWidth } = Dimensions.get('screen')

export const constants = {
  padding: 16,
  margin: 10,
  titleSize: 28,
  textSize: 20,
  subtextSize: 18,
  headerButtonWidth: 40,

  name: 'Developer',
  membersCount: 2,
}

const HeaderAnim2 = () => {
  const scrollY = useSharedValue(0);
  const navigation = useNavigation();
  const { colors, dark } = useTheme()

  const handleScroll = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y;
  })

  const bgColor = dark ? Colors.darkHeaderColor : Colors.light;
  const bgColor2 = dark ? Colors.darkGray : Colors.green;
  const offsetValue = 140;
  const animatedHeader = useAnimatedStyle(() => {
    const headerInitialHeight = 130;
    const headerNextHeight = Platform.OS === 'ios' ? 110 : 120;
    const height = interpolate(
      scrollY.value,
      [0, offsetValue],
      [headerInitialHeight, headerNextHeight],
      Extrapolation.CLAMP,
    )

    const backgroundColor = interpolateColor(
      scrollY.value,
      [0, offsetValue],
      [bgColor, bgColor2]
    )
    return {
      backgroundColor, height
    }
  })
  const nameAnimatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, 100, offsetValue],
      [0, 0, 1],
      Extrapolation.CLAMP,
    )
    const translateX = interpolate(
      scrollY.value,
      [0, offsetValue],
      [-28, 0],
      Extrapolation.CLAMP,
    )
    const translateY = interpolate(
      scrollY.value,
      [0, offsetValue],
      [28, 0],
      Extrapolation.CLAMP,
    )
    return { opacity, transform: [{ translateX }, { translateY }] }
  })
  const animImage = useAnimatedStyle(() => {
    const yValue = Platform.OS === 'ios' ? 54 : 45;
    const translateY = interpolate(
      scrollY.value,
      [0, offsetValue],
      [0, -yValue],
      Extrapolation.CLAMP,
    )

    const xValue = sWidth / 2 - (2 * constants.padding) - constants.headerButtonWidth;
    const translateX = interpolate(
      scrollY.value,
      [0, offsetValue],
      [0, -xValue],
      Extrapolation.CLAMP,
    )

    const scale = interpolate(
      scrollY.value,
      [0, offsetValue],
      [1, 0.3],
      Extrapolation.CLAMP,
    )
    return {
      transform: [{ translateY }, { translateX }, { scale }]
    }
  })

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={bgColor2} translucent />
      {/* header */}
      <Animated.View style={[styles.header, { backgroundColor: bgColor }, animatedHeader]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon type={Icons.Feather} name="arrow-left" color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.showMoreButton} onPress={() => { }}>
          <Icon type={Icons.Feather} name="more-vertical" color={Colors.white} />
        </TouchableOpacity>
        <Animated.View style={[styles.headerView, nameAnimatedStyles]}>
          <Text style={styles.headerTitle}>{constants.name}</Text>
        </Animated.View>
      </Animated.View>
      <Animated.Image source={images.headerImg} style={[styles.profileImage, animImage]} />
      {/* ScrollView */}
      <Animated.ScrollView
        bounces={false}
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: constants.padding }}>
        <View style={[styles.nameTextContainer, { backgroundColor: bgColor }]}>
          <Text style={[styles.name, { color: colors.text }]}>{constants.name}</Text>
          <Text style={styles.threadType}>Group - {constants.membersCount} members</Text>
        </View>
        {/* horizontal CTA's view */}
        <View style={[styles.ctaStyles, { backgroundColor: bgColor }]}>
          <MapList fragment data={TheadCTAOptionsList}
            renderItem={(item, index) => <CTAItems key={index}
              name={item.name} iconName={item.icon} iconType={item.iconType} color={colors.text}
            />} />
        </View>
        <View style={{ marginVertical: constants.margin, padding: constants.padding, backgroundColor: bgColor }}>
          <Text style={styles.tabTitleText}>Add group description</Text>
          <Text style={styles.createdAt}>Created by You, today at 2:26 pm</Text>
        </View>
        {/* thread settings list1 */}
        <View style={{ backgroundColor: bgColor, }}>
          <MapList fragment
            data={TheadSettingsOptionsList}
            renderItem={(item, index) => <ListItem key={index} {...item} color={colors.text} />} />
        </View>
        {/* thread settings list2 */}
        <View style={{ backgroundColor: bgColor, marginVertical: constants.margin }}>
          <MapList fragment
            data={TheadSettingsOptionsList2}
            renderItem={(item, index) => <ListItem key={index} {...item} color={colors.text} />} />
        </View>

        <View style={[styles.addCommunityTab, { backgroundColor: bgColor }]}>
          <View style={styles.iconContainer}>
            <Icon name='users' type={Icons.FontAwesome5} color={Colors.light} />
          </View>
          <View style={styles.communityTextContainer}>
            <Text style={styles.tabTitleText}>Add group to a community</Text>
            <Text style={styles.bringMembersText}>Bring members together to topic based groups</Text>
          </View>
        </View>

        <View style={{ backgroundColor: bgColor, marginVertical: constants.margin }}>
          <Text style={styles.membersCountStyles}>2 Members</Text>
          <MembersTab text='Add members' color={colors.text} iconName='person-add' />
          <MembersTab text='Invite via link' color={colors.text} iconName='insert-link' />
        </View>
      </Animated.ScrollView>
    </View>
  )
}

export default HeaderAnim2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 60,
    width: "100%",
    height: 120,
    paddingHorizontal: 8,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  headerView: {
    // marginTop: 60,
    // backgroundColor: 'yellow',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '500',
    marginHorizontal: 60,
    color: Colors.white,
  },
  backButton: {
    width: constants.headerButtonWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: constants.padding,
  },
  showMoreButton: {
    width: constants.headerButtonWidth,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: Platform.OS === 'ios' ? 66 : 76,
    right: constants.padding,
    zIndex: 1,
  },
  nameTextContainer: {
    paddingTop: 100,
    paddingBottom: 4,
    alignItems: 'center'
  },
  name: {
    fontSize: constants.titleSize,
    alignSelf: 'center',
    marginBottom: 8,
  },
  threadType: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.gray,
  },
  ctaStyles: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: constants.margin,
    paddingVertical: constants.padding,
  },
  addCommunityTab: {
    padding: constants.padding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  communityTextContainer: { paddingHorizontal: constants.padding, width: '90%' },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: constants.margin,
    backgroundColor: Colors.green,
    borderRadius: 6,
  },
  tabTitleText: {
    color: Colors.green,
    fontSize: constants.textSize
  },
  bringMembersText: { color: Colors.gray, fontSize: 15, marginTop: 4 },
  createdAt: {
    color: Colors.gray,
    fontSize: 17,
    marginTop: constants.margin,
  },
  membersCountStyles: {
    paddingHorizontal: constants.padding,
    color: Colors.gray,
    fontSize: 15,
    marginTop: 4,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    position: 'absolute',
    zIndex: 99999,
    alignSelf: 'center',
    top: 70,
  },
});