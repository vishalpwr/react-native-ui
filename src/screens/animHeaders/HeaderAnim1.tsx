import React from 'react'

import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Colors from '../../constants/Colors';

import MapList from '../../components/MapList';
import images from '../../assets/images/images';
import Icon, { Icons } from '../../components/Icons';
import { headerPageText, subtitle1, subtitle2, title } from '../../constants/Constants';

export const { height: sHeight, width: sWidth } = Dimensions.get('screen')
type Props = {}

const ImageHeight = 280;

const HeaderAnim1 = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <TouchableOpacity style={styles.backButton} onPress={() => { }}>
        <Icon type={Icons.Feather} name="chevron-left" color={Colors.white} />
      </TouchableOpacity>
      <View style={styles.headerImage}>
        <Image source={images.headerImg} resizeMode='contain' style={{ width: sWidth, zIndex: -1 }} />
      </View>

      <View>
        <View style={[styles.headerView]}>
          <View>
            <Text style={[styles.title]}>{title}</Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: Colors.black, zIndex: 99 }}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>{subtitle1}</Text>
            <Text style={styles.text2}>{subtitle2}</Text>
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
  },
  title2: {
    fontSize: 18,
    fontWeight: '500',
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

export default HeaderAnim1;
