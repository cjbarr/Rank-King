import React, {Component} from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Header from './Header';
import BottomMenu from './BottomMenu';




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
  },
  box: {
    height: 650,
   
  },
  display: {
    backgroundColor: 'antiquewhite',
    marginTop:10,
    marginBottom:10,
    marginRight:10,
    marginLeft:10
  }
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
    // const { navigate } = this.props.navigation;
    return (
      <View>
        {this.state.category.map(category => <View style={styles.display}> 
          <Text
          // onPress={() => navigate('CategoryScreen')} 
          style={styles.Category}>{category}</Text>
            <Text style={styles.topRated}>Taco John 👑</Text>
            <Text style={styles.ratings}>Flavor: 2</Text>
            <Text style={styles.ratings}>Cost: 3</Text>
            <Text style={styles.ratings}>Quality: 5</Text>
        <TouchableOpacity>
          <Button onPress={()=>{console.log('you pressed me', {category})}}title="Add New Item"></Button>
          </TouchableOpacity>
      </View>)}
      </View>
    );
  }
}


class HomeScreen extends Component {
  render(){
    
    

  return (
    <View style={styles.box}>
      <Header />
  <ScrollView style={styles.home}>
<Display />


   

  </ScrollView>
      <BottomMenu />
      </View>
  )
}
}

export default HomeScreen;
 
