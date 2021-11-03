/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import AnimTab1 from './bottomTab/AnimTab1';
import AnimTab2 from './bottomTab/AnimTab2';
import AnimTab3 from './bottomTab/AnimTab3';
import Home from './screens/Home';
import Tab4 from './bottomTab/Tab4';
import Tab5 from './bottomTab/Tab5';
import Colors from './constants/Colors';
import ContactList from './screens/ContactList';
import ListScreen from './screens/ListScreen';
import { Provider } from 'react-native-paper';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <Provider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={Colors.white} />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
}

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Home" component={Home}
        options={{ title: 'React-Native Ui', headerShown: true }} />
      <Stack.Screen name="Tab1" component={AnimTab1} />
      <Stack.Screen name="Tab2" component={AnimTab2} />
      <Stack.Screen name="Tab3" component={AnimTab3} />
      <Stack.Screen name="Tab4" component={Tab4} />
      <Stack.Screen name="Tab5" component={Tab5} />
      <Stack.Screen name="Contacts" component={ContactList} />
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  )
}

export default App;
