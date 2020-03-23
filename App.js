import React, { Component } from 'react';
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


const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} = require('mongodb-stitch-browser-sdk');

Stitch.initializeDefaultAppClient('rank-stitch-hyyrw');
const client = Stitch.defaultAppClient;

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('rankdb');

client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
  console.log(`logged in anonymously as user ${user.id}`),
  db.collection('ranks').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
).then(() =>
  db.collection('ranks').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
    console.error(err)
});

// function addCatagory() {
//   db.collection('ranks').insertOne({
//     owner_id: client.auth.user.id,
//     catagoryTitle: state.categoryName,
//     criteriaOne: state.criteriaOne,
//     criteriaTwo: state.criteriaTwo,
//     criteriaThree: state.criteriaThree,
//   })
// }





const Stack = createStackNavigator();


class App extends Component {
  

  
render(){


  
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
}


export default App