import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../first-native/screens/HomeScreen';
import Header from './screens/Header';
import BottomMenu from './screens/BottomMenu';
import CategoryScreen from './screens/CategoryScreen';
import NewCategory from './screens/NewCategory';
import NewItem from './screens/NewItem';
import SplashScreen from './screens/SplashScreen';



const Stack = createStackNavigator();


export default function App(props) {

  
return(
  <NavigationContainer>
 
    <Stack.Navigator
    initialRouteName="Home"
    headerMode='none'
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewItem" component={NewItem} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="NewCategory" component={NewCategory} />
    
   
 
    </Stack.Navigator>
  </NavigationContainer>
)
}