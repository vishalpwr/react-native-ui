import React, { useEffect, useRef } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import MyHeader from '../components/MyHeader';
import { Button, List } from 'react-native-paper';
import * as Animatable from 'react-native-animatable'
import Icon, { Icons } from '../components/Icons';
import { Animations } from '../constants/Animations';

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

const ListItem = ({ item, index, animation, navigation }) => {
  return (
    <Animatable.View
      animation={animation}
      duration={1000}
      delay={index * 300}
    >
      <View style={styles.listItem}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Screen')}>
          <View style={[styles.image, { backgroundColor: bgColor(index) }]} />
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>Lorem ipsum</Text>
          <Icon type={Icons.Feather} name="more-vertical" size={20} color={Colors.black} />
        </View>
      </View>
    </Animatable.View>
  )
}

export default function ListScreen({ route, navigation }) {

  const viewRef = useRef(null);
  const animation = Animations[Math.floor(Math.random() * Animations.length)]
  console.log('====================================');
  console.log(Math.floor(Math.random() * Animations.length), Math.random() * Animations.length, Animations.length);
  console.log('====================================');

  const renderItem = ({ item, index }) => (
    <ListItem item={item} index={index} animation={animation} navigation={navigation} />)

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
    // ToastAndroid.show(animation+ ' Animation', ToastAndroid.SHORT);
    return () => unsubscribe;
  }, [navigation])

  return (
    <View style={[Styles.container]}>
      <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      />
      <Animatable.View
        ref={viewRef}
        easing={'ease-in-out'}
        duration={500}
        style={Styles.container}>
        <FlatList
          data={Array(15).fill('')}
          keyExtractor={(_, i) => String(i)}
          numColumns={2}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={ListEmptyComponent}
        />
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
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
    height: 200,
    width: Dimensions.get('window').width / 2 - 16,
    backgroundColor: 'white',
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
