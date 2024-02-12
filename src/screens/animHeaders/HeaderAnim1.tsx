import React, { useState } from 'react'

import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StatusBar, StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

import MapList from '../../components/MapList';
import images from '../../assets/images/images';
import Icon, { Icons } from '../../components/Icons';
import { headerPageText } from '../../constants/Constants';

export const { height: sHeight, width: sWidth } = Dimensions.get('screen')
type Props = {}

const HeaderAnim1 = (props: Props) => {
  const scrollOffset = Platform.OS === 'ios' ? 200 : 340;

  return (
    <View style={[styles.container, { backgroundColor: Colors.black }]}>
      <StatusBar translucent backgroundColor={'transparent'} />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon type={Icons.Feather} name="chevron-left" color={Colors.white} />
      </TouchableOpacity>

      <View style={[styles.headerImage]}>
        <Image source={images.headerImg} resizeMode='contain' style={{ width: sWidth, zIndex: -1, }} />
      </View>

      <View style={[]}>
        <View style={[styles.headerView]}>
          <View>
            <Text style={[styles.title]}>Elevate Your Experience</Text>
          </View>
          {/* <View style={[{ marginTop: 30 }]}>
            <Text style={[styles.title2]}>Elevate Your Experience</Text>
          </View> */}
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: Colors.black, zIndex: 99 }}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>Rise Above the Ordinary, Every Day.</Text>
            <Text style={styles.text2}>Elevate Your Experience: Where Potential Meets Possibility.</Text>
            <ScrollView horizontal style={{ paddingVertical: 30, }}>
              <MapList fragment data={[1, 2, 3, 4, 5, 6]}
                renderItem={(item, index) => (
                  <View key={index} style={styles.listItem} />
                )} />
            </ScrollView>
            <View>
              <Text style={styles.description}>{headerPageText}</Text>
            </View>
            <ScrollView horizontal style={{ paddingVertical: 30, }}>
              <MapList fragment data={[1, 2, 3, 4, 5, 6]}
                renderItem={(item: any, index: number) => (
                  <View key={index} style={styles.listItem} />
                )} />
            </ScrollView>
            <View>
              <Text style={styles.description}>{headerPageText}</Text>
              <Text style={[styles.description, { marginTop: 30 }]}>{headerPageText}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default HeaderAnim1;

const styles = StyleSheet.create({
  container: {
  },
  headerImage: {
    width: '100%',
    height: 280,//sHeight * 0.3,
    justifyContent: 'center',
    flexDirection: 'row',
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
    width: "100%",
    height: 100,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.orange,
    marginHorizontal: 20,
  },
  title2: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.orange,
    marginHorizontal: 20,
    textAlign: 'center',
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
  },
});