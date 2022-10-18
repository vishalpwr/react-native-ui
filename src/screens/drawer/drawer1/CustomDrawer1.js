import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DrawerItem = () => {
  return (
    <></>
  )
}

const ProjectItem = () => {
  return (
    <></>
  )
}

const ProfileItem = () => {
  return (
    <></>
  )
}

const CustomDrawer1 = (props) => {
  return (
    <View style={styles.container}>
      {/* header */}
      <ScrollView>
        {/* Drawer Items List */}
        {/* 2nd menu(projects) */}
        {/* profile menu */}
      </ScrollView>
      {/* footer */}
    </View>
  )
}

export default CustomDrawer1

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})