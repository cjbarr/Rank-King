import * as React from 'react';
import { Text, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../first-native/screens/HomeScreen';
import Header from './screens/Header';
import BottomMenu from './screens/BottomMenu';



const Stack = createStackNavigator();

export default function App(props) {
  
return(
  <View>
  <Header />
  <HomeScreen />
  <BottomMenu />
  </View>
)
}