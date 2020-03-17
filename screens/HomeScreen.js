import React, {Component} from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';



const styles = StyleSheet.create({
  Category: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
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
    height:650,
  },
  box: {
   
  },
  display: {
    backgroundColor: 'antiquewhite',
    marginTop:2,
    marginBottom:2,
    marginRight:10,
    marginLeft:10
  }
});


class Display extends Component {
  render() {
    return (
      <View style={styles.display}>
        <Text style={styles.Category}>{this.props.category}</Text>
        <View style={styles.box}>
        <Text style={styles.topRated}>Taco John</Text>
        <Text style={styles.ratings}>Flavor: 2</Text>
        <Text style={styles.ratings}>Cost: 3</Text>
        <Text style={styles.ratings}>Quality: 5</Text>
        </View>
        <TouchableOpacity>
          <Button title="Add New Item"></Button>
          </TouchableOpacity>
      </View>
    );
  }
}


const HomeScreen = (props) =>{
  return (<ScrollView style={styles.home}>
   <Display category='Tacos'/>
   <br></br>
    <Display category='Tamales' />
    <br></br>
    <Display category='Burritos' />
    <br></br>
    <Display category='Ice Cream' />
    <br></br>
    <Display category='Soda' />
    <br></br>
    <Display />
    <br></br>
    <Display />
    <br></br>
    <Display />
    <br></br>
    <Display />
    <br></br>
    <Display />
   

  </ScrollView>)
}

export default HomeScreen;
 
