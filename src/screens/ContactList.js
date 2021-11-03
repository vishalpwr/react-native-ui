import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import MyHeader from '../components/MyHeader';
import { contacts } from '../constants/Contacts';
import * as Animatable from 'react-native-animatable'
import { Animations } from '../constants/Animations';

const ContactItem = ({ item: { name, number }, index, animation }) => {
  return (
    <Animatable.View
      animation={animation}
      duration={1000}
      delay={index * 300}
    >
      <TouchableOpacity style={styles.item}>
        <View style={styles.avatar}>
          <Text style={styles.letter}>
            {name.slice(0, 1).toUpperCase()}
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.number}>{number}</Text>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  )
}

export default function ContactList({ route, navigation }) {


  const animation = Animations[Math.floor(Math.random() * Animations.length)]
  console.log(animation);
  const ItemSeparator = () => <View style={styles.separator} />

  const renderItem = ({ item, index }) => (
    <ContactItem item={item} index={index} animation={animation} />)

  const ListEmptyComponent = () => {
    const anim = {
      0: { translateY: 0 },
      0.5: { translateY: 50 },
      1: { translateY: 0 },
    }
    return (
      <Animatable.View style={[styles.listEmpty]}>
        <Animatable.Text
          animation={anim}
          easing="ease-in-out"
          duration={3000}
          style={{ fontSize: 24 }}
          iterationCount="infinite">
          Empty List!
        </Animatable.Text>
      </Animatable.View>
    )
  }
  return (
    <View style={[Styles.container]}>
      <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      />
      <FlatList
        data={contacts}
        keyExtractor={(_, i) => String(i)}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: 'white',
    fontWeight: 'bold',
  },
  details: {
    margin: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  number: {
    fontSize: 14,
    color: Colors.darkGray,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.gray,
  },
  listEmpty: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    backgroundColor: Colors.white,
  },
})
