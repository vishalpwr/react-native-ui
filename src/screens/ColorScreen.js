import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import MyHeader from '../components/MyHeader';
import Animated, { FadeIn, useAnimatedRef } from 'react-native-reanimated';

export default function ColorScreen({ route, navigation }) {
  const viewRef = useAnimatedRef(null);
  const [bgColor, setBgColor] = useState();
  useEffect(() => {
    switch (route.name) {
      case 'Home': { setBgColor(Colors.primary); break; }
      case 'Search': { setBgColor(Colors.green); break; }
      case 'Add': { setBgColor(Colors.red); break; }
      case 'Account': { setBgColor(Colors.purple); break; }
      case 'Like': { setBgColor(Colors.yellow); break; }
      default: setBgColor(Colors.white);
    }
  }, [])
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     viewRef.current.animate({ 0: { opacity: 0.5, }, 1: { opacity: 1 } });
  //   })
  //   return () => unsubscribe;
  // }, [navigation])
  return (
    <Animated.View ref={viewRef} entering={FadeIn.duration(800)}
      style={[Styles.container, { backgroundColor: bgColor }]}>
      <MyHeader
        menu
        onPressMenu={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      />
      <View style={[Styles.container, { backgroundColor: bgColor }]}>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({})
