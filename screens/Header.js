import React, { Component } from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';



const styles = StyleSheet.create({
    Header: {
        backgroundColor:'black',
    },
    text:{
        fontSize: 64,
        color: 'white',
    textAlign:'center'}
});




const Header = (props) => {
    return (<View style={styles.Header}><Text style={styles.text}>CooLRankS</Text></View>
    )
}

export default Header;
