import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Header from './Header';
import BottomMenu from './BottomMenu';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewItem from './NewItem';
const {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} = require('mongodb-stitch-browser-sdk');




const styles = StyleSheet.create({
  Category: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 34,
    textAlign:'center',
    backgroundColor:'darkgrey',
  },
  topRated: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold'
  },
  ratings: {
    color: 'green',
    fontSize: 12,
    fontStyle: 'italic'
  },
   home: {
    backgroundColor: 'coral',
  },
  box: {
    height: '100%',
    backgroundColor: 'coral',
  },
  display: {
    backgroundColor: 'antiquewhite',
    marginTop:10,
    marginBottom:10,
    marginRight:10,
    marginLeft:10
  },
  containerCat:{backgroundColor:'black',
  height:'10%',
},
addFont:{marginTop:5,
color:'white',
fontSize:24,
  textAlign: 'center',
},
});




class Display extends Component {
 
  componentDidMount(){
    console.log('catagory mount', this.props.catagory)
  }

  
  render() {

  let arrayMap = this.props.catagory

 console.log('catagory prop', arrayMap)

let item = 'potato'
    return (
      <View>
        <Text>What</Text>

        {arrayMap &&
          arrayMap.map(item=>(<View key={item} style={styles.display}> 
          <Text onPress={() => { this.props.navigation.navigate('CategoryScreen',{item}) }} 
          style={styles.Category}>{item}</Text>
            <Text style={styles.topRated}>{item} John 👑</Text>
            <Text style={styles.ratings}>Flavor: 2</Text>
            <Text style={styles.ratings}>Cost: 3</Text>
            <Text style={styles.ratings}>Quality: 5</Text>
        <TouchableOpacity>
          <Button onPress={()=>{this.props.navigation.navigate('NewItem',{item})}} title="Add New Item"></Button>
          </TouchableOpacity>
      </View>
          ))}
      </View>
    )
  }
}





function HomeScreen(){
  const navigation = useNavigation();

let catArray=[];
let count =0;
  const client = Stitch.defaultAppClient;
  const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('rankdb');

  function getCatagory() {
    console.log('in get Catagory', client, db)
    const catagories = db.collection('ranks');
    catagories.find({ owner_id: client.auth.user.id }, { limit: 10 })
      // catagories.collection.distinct({catagoryTitle: "Cheese" }, { limit: 10 })
      .toArray()
      .then(results =>
        results.map(
          // object => console.log(object.catagoryTitle)
          object => catArray.push(object.catagoryTitle)
          // object => <Display catagory={object.catagoryTitle} navigation={navigation} />
        )
      )
      console.log(catArray, 'cat array');
    count = 1
    // setTimeout(() => { this.setState({...this.state,
    //                                         thing:this.catArray}); }, 1000)
  }


    
  return (
    <View style={styles.box}>
      <Header />

  <ScrollView style={styles.home}>


        {db &&

          getCatagory()
        
        }

        {/* {count ==1 &&
        catArray.map(object => <View><Text>Hello</Text></View>)} */}
  

        <Display catagory={catArray} navigation={navigation} />
        
{/* <Display navigation={navigation} /> */}


   

  </ScrollView>
    <View style={styles.containerCat}>
        <Text style={styles.addFont} onPress={() => { navigation.navigate('NewCategory') }}>👑 Add Category</Text>
        {/* <Text style={styles.addFont} onPress={() => { navigation.navigate('Home') }}>👑 Add New Item</Text> */}
      </View>
      </View>
  )
          }


export default HomeScreen;
 
