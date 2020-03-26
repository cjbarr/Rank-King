import React, { Component } from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';



const styles = StyleSheet.create({
    Header: {
        backgroundColor:'black',
        height:'10%',
    },
    text:{
        fontSize: 42,
        color: 'white',
    textAlign:'center'}
});




const Header = (props) => {
    return (<View style={styles.Header}>
        <Text style={styles.text}>Rank 👑 King</Text>
        
    </View>
    )
}

export default Header;
