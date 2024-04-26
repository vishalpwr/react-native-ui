import React, { useState } from 'react'

import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Colors from '../../constants/Colors';

import MapList from '../../components/MapList';
import images from '../../assets/images/images';
import Icon, { Icons } from '../../components/Icons';
import { headerPageText, subtitle1, subtitle2, title } from '../../constants/Constants';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Extrapolation, FadeIn, interpolate, interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export const { height: sHeight, width: sWidth } = Dimensions.get('screen')
type Props = {}

const ImageHeight = 280;

const HeaderAnim1 = () => {

  const navigation = useNavigation()
  const scrollY = useSharedValue(0)
  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  })

  const scrollAnimatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, 320],
      [0, -ImageHeight],
      Extrapolation.CLAMP,
    )
    return { transform: [{ translateY }] };
  })
  const headerViewAnimatedStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollY.value,
      [0, 320],
      ['transparent', Colors.darkGray],
    )
    return { backgroundColor };
  })
  const titleAnimatedStyles = (fadeIn: boolean) => useAnimatedStyle(() => {
    const outputRange = fadeIn ? [0, 0, 1] : [1, 0, 0]
    const opacity = interpolate(
      scrollY.value,
      [0, 120, 320],
      outputRange,
    )
    return { opacity };
  })
  const animatedImageStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      [0, 320],
      [1.4, 1],
      { extrapolateRight: Extrapolation.CLAMP },
    )
    return { transform: [{ scale }] };
  })

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon type={Icons.Feather} name="chevron-left" color={Colors.white} />
      </TouchableOpacity>
      <Animated.View style={[styles.headerImage, animatedImageStyles]}>
        <Image source={images.headerImg} resizeMode='contain' style={{ width: sWidth, zIndex: -1 }} />
        <LinearGradient colors={['transparent', 'transparent', Colors.black]} style={styles.imageOverlay} />
      </Animated.View>

      <Animated.View style={scrollAnimatedStyles}>
        <Animated.View style={[styles.headerView, headerViewAnimatedStyles]}>
          <View>
            <Animated.Text style={[styles.title, titleAnimatedStyles(false)]}>{title}</Animated.Text>
            <Animated.Text style={[styles.title2, titleAnimatedStyles(true)]}>{title}</Animated.Text>
          </View>
        </Animated.View>
        <Animated.ScrollView
          onScroll={handleScroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
          style={{ backgroundColor: Colors.black, zIndex: 99 }}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>{subtitle1}</Text>
            <Text style={styles.text2}>{subtitle2}</Text>
            <ScrollView horizontal style={{ paddingVertical: 30, }}>
              <MapList fragment data={[1, 2, 3, 4, 5, 6]}
                renderItem={(item, index) => (
                  <Animated.View key={index}
                    entering={FadeIn.duration(400).delay(index * 300)}
                    style={styles.listItem} />
                )} />
            </ScrollView>
            <View>
              <Text style={styles.description}>{headerPageText}</Text>
            </View>
            <ScrollView horizontal style={{ paddingVertical: 30, }}>
              <MapList fragment data={[1, 2, 3, 4, 5, 6]}
                renderItem={(item: any, index: number) => (
                  <Animated.View key={index}
                    entering={FadeIn.duration(400).delay(index * 300)}
                    style={styles.listItem} />
                )} />
            </ScrollView>
            <View>
              <Text style={styles.description}>{headerPageText}</Text>
              <Text style={[styles.description, { marginTop: 30 }]}>{headerPageText}</Text>
            </View>
          </View>
        </Animated.ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  headerImage: {
    width: '100%',
    height: ImageHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.gray + '30',
    zIndex: 9999,
    position: 'absolute',
    top: 50,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  title: {
    fontSize: 38,
    fontWeight: '600',
    color: Colors.orange,
    marginHorizontal: 20,
    position: 'absolute',
  },
  title2: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.orange,
    marginHorizontal: 20,
    textAlign: 'center',
    marginTop: 34,
  },
  innerContainer: {
    margin: 20,
  },
  listItem: {
    width: 100,
    height: 100,
    borderRadius: 14,
    backgroundColor: Colors.darkGray,
    marginRight: 16,
  },
  text: {
    fontSize: 20,
    color: Colors.gray,
    fontWeight: '600',
  },
  text2: {
    fontSize: 16,
    color: Colors.orange,
    marginTop: 10,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: Colors.gray,
    textAlign: 'justify',
  },
  imageOverlay: {
    height: ImageHeight + 50,
    ...StyleSheet.absoluteFillObject,
  },
});

export default HeaderAnim1;
