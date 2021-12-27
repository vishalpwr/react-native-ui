import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import MyHeader from '../../components/MyHeader'
import Colors from '../../constants/Colors'
import { bagsList } from '../../constants/Constants'
const { width } = Dimensions.get('window');
const ListItem = ({ item, navigation }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', { item })}
        style={[styles.imageContainer, { backgroundColor: item.bgColor }]}>
        <SharedElement id={`item.${item.id}.image`}>
          <Image source={item.image} style={styles.image} />
        </SharedElement>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: Colors.darkGray }]}>{item.title}</Text>
        <Text style={styles.text}>${item.price}</Text>
      </View>
    </View>
  )
}

export default function ProductsList({ navigation, route }) {
  return (
    <View style={styles.container}>
      <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        optionalBtn="shopping-cart"
        onRightPress={() => console.log('right')}
      />
      <FlatList
        data={bagsList}
        numColumns={2}
        style={{ paddingVertical: 10 }}
        keyExtractor={(item, index) => item.id + index.toString()}
        renderItem={({ item }) => <ListItem item={item} navigation={navigation} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  item: {
    width: width / 2 - 24,
    marginLeft: 16,
    marginBottom: 16,
  },
  imageContainer: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray,
    borderRadius: 14,
  },
  image: {
    height: 140,
    width: 140,
    resizeMode: 'center',
  },
  textContainer: {
    marginVertical: 4,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
})
