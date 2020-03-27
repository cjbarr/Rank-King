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
    color: 'black',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  ratings: {
    color: 'black',
    fontSize: 16,
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
    textAlign:'right',
    backgroundColor: 'gold',
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
    let catagories = this.props.db.collection('ranks');
    catagories.find({ itemCatagory: this.props.cat }, { sort: { score: -1 } })
      .asArray()
      .then(results => this.setState({ top: results })
      )
  }


  componentDidMount() {
    this.getTop();
  }

  render(){
    return(
      <View style={styles.topRated}>
      {this.state.top &&
      <>
          <Text><Text style={styles.ratings}>👑</Text><Text style={styles.ratings}> {this.state.top[0].itemName}</Text></Text>
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


  getCatagory() {
 
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


          <Top cat={object.catagoryTitle} db={this.db} client={this.client}></Top>
            {/* <Text style={styles.topRated}>{object.criteriaOne}</Text>
            <Text style={styles.topRated}>{object.criteriaTwo}</Text>
            <Text style={styles.topRated}>{object.criteriaThree}</Text> */}
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
        <Text style={styles.addFont} onPress={() => { navigation.navigate('NewCategory') }}>Add Category</Text>
      
      </View>
      </View>
  )
          }


export default HomeScreen;
 
