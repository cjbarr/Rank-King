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
  state = {
    category: ['Tacos',
      'Burritos',
      'Soda',
      'Ice Cream',
      'Dip']
  }
  render() {
    
    return (
      <View>
        {this.state.category.map(category => <View key={category} style={styles.display}> 
          <Text onPress={() => { this.props.navigation.navigate('CategoryScreen',{category}) }} 
          style={styles.Category}>{category}</Text>
            <Text style={styles.topRated}>{category} John 👑</Text>
            <Text style={styles.ratings}>Flavor: 2</Text>
            <Text style={styles.ratings}>Cost: 3</Text>
            <Text style={styles.ratings}>Quality: 5</Text>
        <TouchableOpacity>
          <Button onPress={()=>{this.props.navigation.navigate('NewItem',{category})}} title="Add New Item"></Button>
          </TouchableOpacity>
      </View>)}
      </View>
    );
  }
}


function HomeScreen(){
  const navigation = useNavigation();
  return (
    <View style={styles.box}>
      <Header />

  <ScrollView style={styles.home}>
<Display navigation={navigation} />


   

  </ScrollView>
    <View style={styles.containerCat}>
        <Text style={styles.addFont} onPress={() => { navigation.navigate('NewCategory') }}>👑 Add Category</Text>
        {/* <Text style={styles.addFont} onPress={() => { navigation.navigate('Home') }}>👑 Add New Item</Text> */}
      </View>
      </View>
  )
}


export default HomeScreen;
 
