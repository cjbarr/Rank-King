import React, { Component } from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const styles = StyleSheet.create({
    menu: {
        backgroundColor: 'black',
        height:'10%',
    },
    add: {
        fontSize: 36,
        color: 'white',
        textAlign: 'center',
        height:60,
    },
      back: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        height:30,
    }
});




const Footer = (props) => {
    const navigation = useNavigation();
    return (<View style={styles.menu}>
        <View style={styles.box}>
            <TouchableOpacity>
                <Text onPress={() => { navigation.navigate('Home') }}style={styles.add}>Home</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
        <Text style={styles.back}>Back</Text>
   </TouchableOpacity> */}
   </View> 
   </View>
    )
}

export default Footer;
