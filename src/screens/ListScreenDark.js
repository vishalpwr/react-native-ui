import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, ScrollView, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import MyHeader from '../components/MyHeader';
import * as Animatable from 'react-native-animatable'
import Icon, { Icons } from '../components/Icons';
import { Animations } from '../constants/Animations';
import { Transition, Transitioning } from 'react-native-reanimated';

const colorAr = [
  '#637aff',
  '#60c5a8',
  '#CCCCCC',
  '#ff5454',
  '#039a83',
  '#dcb834',
  '#8f06e4',
  'skyblue',
  '#ff4c98',
]
const bgColor = (i) => colorAr[i % colorAr.length];

const list = [
  { height: 200, title: '' },
  { height: 160, title: '' },
  { height: 150, title: '' },
  { height: 120, title: '' },
  { height: 150, title: '' },
  { height: 200, title: '' },
  { height: 180, title: '' },
  { height: 180, title: '' },
  { height: 200, title: '' },
  { height: 240, title: '' },
  { height: 200, title: '' },
  { height: 150, title: '' },
]

const ListItem = ({ item, index, animation, navigation, onPress }) => {
  return (
    <View style={[styles.listItem,]}>
      <TouchableOpacity
        activeOpacity={0.7}
        // onPress={() => navigation.navigate('Screen')}
        onPress={onPress}>
        <View style={[styles.image, { backgroundColor: bgColor(index), height: item.height }]} />
      </TouchableOpacity>
      {/* <View style={styles.detailsContainer}>
          <Text style={styles.name}>Lorem ipsum</Text>
          <Icon type={Icons.Feather} name="more-vertical" size={20} color={Colors.white} />
        </View> */}
    </View>
  )
}
const { width } = Dimensions.get('window');
export default function ListScreenDark({ route, navigation }) {
  const transition = (
    <Transition.Together>
      <Transition.Change interpolation="easeInOut" durationMs={500} />
    </Transition.Together>
  )
  const listRef = useRef(null)
  const viewRef = useRef(null);
  const animation = Animations[Math.floor(Math.random() * Animations.length)]
  console.log(animation);
  const renderItem = ({ item, index }) => (
    <ListItem
      item={item}
      index={index}
      animation={animation}
      navigation={navigation}
    />
  )

  const [List, setList] = useState(list)
  const filterItems = (i) => {
    const newList = List.filter((l, id) => id !== i);
    setList(newList);
    listRef.current?.animateNextTransition()
  }

  const ListEmptyComponent = () => {
    const anim = {
      0: { translateY: 0 },
      0.5: { translateY: 50 },
      1: { translateY: 0 },
    }
    return (
      <View style={[styles.listEmpty]}>
        <Animatable.Text
          animation={anim}
          easing="ease-in-out"
          duration={3000}
          style={{ fontSize: 24 }}
          iterationCount="infinite">
          Empty List!
        </Animatable.Text>
      </View>
    )
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      viewRef.current.animate({ 0: { opacity: 0.5, }, 1: { opacity: 1 } });
    })
    // ToastAndroid.show(animation + ' Animation', ToastAndroid.SHORT);
    return () => unsubscribe;
  }, [navigation])

  return (
    <View style={[Styles.container, { backgroundColor: '#0e121a' }]}>
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        headerBg={Colors.black}
        iconColor={Colors.white}
        onRightPress={() => console.log('right')}
      />
      <ScrollView>
        <Transitioning.View ref={listRef} transition={transition}>
          <Animatable.View
            ref={viewRef}
            easing={'ease-in-out'}
            duration={500}
            style={[Styles.container, { flexDirection: 'row' }]}>
            <View>
              {List.filter((it, id) => id % 2 == 0).map((_, i) => (//'#171c26'
                <ListItem
                  item={_}
                  index={i}
                  key={i}
                  animation={animation}
                  navigation={navigation}
                  onPress={() => filterItems(i)}
                />
              ))}
            </View>
            <View>
              {List.filter((it, id) => id % 2 !== 0).map((_, i) => (//'#171c26'
                <ListItem
                  item={_}
                  index={i}
                  key={i}
                  animation={animation}
                  navigation={navigation}
                  onPress={() => filterItems(i)}
                />
              ))}
            </View>
          </Animatable.View>
        </Transitioning.View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.white,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
  listEmpty: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    // height: 200,
    width: width / 2 - 24,
    backgroundColor: Colors.black,
    margin: 8,
    borderRadius: 10,
  },
  image: {
    height: 150,
    margin: 5,
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
