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
    backgroundColor:'gold',
  },
  topRated: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  ratings: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
   home: {
    backgroundColor: 'royalblue',
  },
  box: {
    height: '100%',
    backgroundColor: 'royalblue',
  },
  xButton: {
    textAlign:'center',
    backgroundColor: 'gold',
  },
  criteria:{
    backgroundColor:'gold',
    fontSize: 14,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  display: {
    backgroundColor: 'antiquewhite',
    marginTop:10,
    marginBottom:10,
    marginRight:'auto',
    marginLeft:'auto',
    width:'85%',
    borderStyle: 'solid',
    borderColor:'black',
    borderWidth:'3px',
    borderRadius: '15px',
    overflow:'hidden',
    },
  containerCat:{backgroundColor:'black',
  height:'10%',
},
addFont:{marginVertical:'auto',
color:'white',
fontSize:30,
  textAlign: 'center',
},
});



class Top extends Component{

  state={};

  getTop() {
    let categories = this.props.db.collection('ranks');
    categories.find({ itemCategory: this.props.cat }, { sort: { score: -1 } })
      .asArray()
      .then(results => this.setState({ top: results })
      )
  }


  componentDidMount() {
    this.getTop();
  }

  render(){
    return(
      <View>
      {this.state.top &&
      <>
          <Text style={styles.ratings}>👑{this.state.top[0].itemName}</Text>
  </>
  }
  </View>
    )
    }
  }


class Display extends Component {
 
  state={};

 client = Stitch.defaultAppClient;
db = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('rankdb');


  getCategory() {
 
  let categories = this.db.collection('ranks');
    categories.find({ [this.client.auth.user.id]: 'categoryList' }, { sort: {categoryTitle : 1 } })
    .toArray()
    .then(results => this.setState({catState: results})
      ).then(
      console.log('state set'))
      }




  componentDidMount() {
    this.getCategory();
  }



  deleteItem(itemToDelete, catToDelete) {
    if(confirm('Delete category and associated items?')=== true){
  console.log('item to delete', itemToDelete)
    console.log('cat to delete', catToDelete)
  let categories = this.db.collection('ranks');
  categories.deleteMany({ "_id": itemToDelete } )
    .then(
      categories.deleteMany({ "itemCategory": catToDelete })
      )
      // .then(
      //   this.props.refresh()
      // )
}
  }
  render() {

console.log('refresh function', this.props.refresh)
 console.log('category prop', this.state)

    return (
      <View>
        {this.props &&
        console.log('PROPS IN HOME DETAILS', this.props)}
        {this.state.catState &&
       this.state.catState.map(object => ( 

       <View key={object.categoryTitle} style={styles.display}> 
          <View><Text onPress={() => { this.props.navigation.navigate('CategoryScreen',object) }} 
             style={styles.Category}>{object.categoryTitle}</Text>
             <Text style={styles.criteria}>{object.criteriaOne} | {object.criteriaTwo} | {object.criteriaThree}</Text>
             </View>


          <Top cat={object.categoryTitle} db={this.db} client={this.client}></Top>
        <TouchableOpacity>
          <Button onPress={()=>{this.props.navigation.navigate('NewItem',object)}} title="Add New Item"></Button>
             <Button color='grey' onPress={() => { this.deleteItem(object._id, object.categoryTitle) }} title="Remove Category"></Button>
          </TouchableOpacity>
         
      </View>
          
       ))}
      </View>
    )

}
}


// class HomeDisplay extends Component{
// state={}
//   refresh(){
//   this.setState({fresh:'true'})

//   }
//   render(){
//     return(
// <HomeScreen refresh={this.refresh}></HomeScreen>
//     )
//   }
// }

function HomeScreen(props){

  const navigation = useNavigation();
  return (
    <View style={styles.box}>
      <Header />

  <ScrollView style={styles.home}>


        <Display navigation={navigation} />
        

  </ScrollView>
    <View style={styles.containerCat}>
        <Text style={styles.addFont} onPress={() => { navigation.navigate('NewCategory') }}>Add Category</Text>
      
      </View>
      </View>
  )
          }


export default HomeScreen;
 
