import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import Icon, { Icons } from '../../components/Icons'
import MyHeader from '../../components/MyHeader'
import Colors from '../../constants/Colors'
import { bagsList } from '../../constants/Constants'
const { width, height } = Dimensions.get('window');

const colors = [
  Colors.red,
  Colors.green,
  Colors.yellow,
  Colors.black,
]
const ColorsSelector = () => {
  const [selected, setSelected] = useState(0)//index
  return (
    <View style={styles.container}>
      <Text>Colors</Text>
      <View style={{ flexDirection: 'row', marginVertical: 5, }}>
        {colors.map((_, i) => (
          <View key={i} style={[styles.outerCircle, { borderColor: selected == i ? _ : 'transparent' }]}>
            <TouchableOpacity
              onPress={() => setSelected(i)}
              style={[styles.colorBtn, { backgroundColor: _ }]} />
          </View>
        ))}
      </View>
    </View>
  )
}

const SizeSelector = () => {
  return (
    <View style={styles.container}>
      <Text>Size</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 5, }}>12 cm</Text>
    </View>
  )
}

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.quantity}>
      <TouchableOpacity style={styles.qtBtn} onPress={() => setQuantity(prev => prev - 1)}>
        <Icon type={Icons.Entypo} name="minus" />
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity style={styles.qtBtn} onPress={() => setQuantity(prev => prev + 1)}>
        <Icon type={Icons.Entypo} name="plus" />
      </TouchableOpacity>
    </View>
  )
}

export default function DetailsScreen({ navigation, route }) {
  const { item } = route.params;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBackgroundColor(item.bgColor);
      StatusBar.setBarStyle('light-content')
    })
    return () => unsubscribe;
  }, [navigation])
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      StatusBar.setBackgroundColor(Colors.white);
      StatusBar.setBarStyle('dark-content')
    })
    return () => unsubscribe;
  }, [navigation])
  return (
    <View style={[styles.container, { backgroundColor: item.bgColor }]}>
      <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        optionalBtn="shopping-cart"
        headerBg={item.bgColor}
        iconColor={Colors.white}
        onRightPress={() => console.log('right')}
      />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View>
            <Text style={styles.smallText}>{item.subtitle}</Text>
            <Text style={styles.bigText}>{item.title}</Text>
          </View>
          <View>
            <Text style={styles.smallText}>Price</Text>
            <Text style={styles.bigText}>{item.price}</Text>
          </View>
        </View>
        <SharedElement id={`item.${item.id}.image`} style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} resizeMode='center' />
        </SharedElement>
        <View style={styles.bottomContainer}>
          <View style={styles.variants}>
            <ColorsSelector />
            <SizeSelector />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Description</Text>
            <Text>{item.description}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Quantity />
            <TouchableOpacity style={[styles.favoriteBtn, { backgroundColor: item.bgColor }]}>
              <Icon type={Icons.AntDesign} name="heart" size={18} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity style={[styles.cartBtm, { borderColor: item.bgColor }]}>
              <Icon type={Icons.AntDesign} name="shoppingcart" color={item.bgColor} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, { backgroundColor: item.bgColor }]}>
              <Text style={styles.btnText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

DetailsScreen.sharedElements = (route) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.id}.image`,
      animation: 'move',
      resize: 'clip',
    }
  ]
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: height / 3,
    padding: 16,
    justifyContent: 'space-between',
  },
  bottomContainer: {
    padding: 16,
    flex: 1,
    backgroundColor: Colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 80,
  },
  bigText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
  },
  smallText: {
    color: Colors.white,
  },
  image: {
    width: width / 1.5,
    height: width / 1.5,
  },
  imageContainer: {
    position: 'absolute',
    zIndex: 999,
    top: 60,
    alignSelf: 'flex-end',
  },
  colorBtn: {
    height: 16,
    width: 16,
    borderRadius: 6,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  variants: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    marginVertical: 10,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  qtBtn: {
    borderWidth: 1,
    borderColor: Colors.darkGray,
    borderRadius: 8,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  favoriteBtn: {
    borderRadius: 17,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBtm: {
    borderRadius: 10,
    width: 50,
    height: 45,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  btn: {
    flex: 1,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.white,
  },
})
