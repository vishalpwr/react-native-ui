import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { colors } from './drawer/constant';

export default function DrawerScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  }
})
