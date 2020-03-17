import React, { Component } from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';



const styles = StyleSheet.create({
    menu: {
        backgroundColor: 'black',
        height:90,
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




const Header = (props) => {
    return (<View style={styles.menu}>
        <View style={styles.box}>
        <Text style={styles.add}>Add</Text>
        <Text style={styles.back}>Back</Text>
   </View> 
   </View>
    )
}

export default Header;
