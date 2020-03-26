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
    fontSize: 14,
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
  xButton: {
    textAlign:'right',
    backgroundColor: 'darkgrey',
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
 
  state={};

 client = Stitch.defaultAppClient;
db = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('rankdb');


  getCatagory() {
  console.log('in get Catagory', this.client, this.db)
  let catagories = this.db.collection('ranks');
  catagories.find({ [this.client.auth.user.id]: 'catagoryList'  }, { limit: 50 })
    .toArray()
    .then(results => this.setState({catState: results})
      ).then(
      console.log('state set'))
      }


  componentDidMount() {
    this.getCatagory();
  }


  componentWillMount() {
    this.setState({refresh:'true'})
  }


  deleteItem(itemToDelete, catToDelete) {
    if(confirm('Delete catagory and associated items?')=== true){
  console.log('item to delete', itemToDelete)
    console.log('cat to delete', catToDelete)
  let catagories = this.db.collection('ranks');
  catagories.deleteMany({ "_id": itemToDelete } )
    .then(
      catagories.deleteMany({ "itemCatagory": catToDelete })
      ).then(
        console.log('deleted Catagory and items!')
      )
}
  }
  render() {


 console.log('catagory prop', this.state)

    return (
      <View>
        {this.props &&
        console.log('PROPS IN HOME DETAILS', this.props)}
        {this.state.catState &&
       this.state.catState.map(object => ( 

       <View key={object.catagoryTitle} style={styles.display}> 
          <View><Text onPress={() => { this.props.navigation.navigate('CategoryScreen',object) }} 
             style={styles.Category}>{object.catagoryTitle}</Text><Text onPress={() => { this.deleteItem(object._id, object.catagoryTitle)}} style={styles.xButton}>❌</Text></View>
          {/* <Text style ={styles.ratings}>Hold</Text> */}
            <Text style={styles.topRated}>{object.criteriaOne}</Text>
            <Text style={styles.topRated}>{object.criteriaTwo}</Text>
            <Text style={styles.topRated}>{object.criteriaThree}</Text>
        <TouchableOpacity>
          <Button onPress={()=>{this.props.navigation.navigate('NewItem',object)}} title="Add New Item"></Button>
          </TouchableOpacity>
         
      </View>
          
       ))}
      </View>
    )

}
}




function HomeScreen(props){
  const navigation = useNavigation();
  return (
    <View style={styles.box}>
      <Header />

  <ScrollView style={styles.home}>


        <Display navigation={navigation} />
        

  </ScrollView>
    <View style={styles.containerCat}>
        <Text style={styles.addFont} onPress={() => { navigation.navigate('NewCategory') }}>👑 Add Category</Text>
      
      </View>
      </View>
  )
          }


export default HomeScreen;
 
