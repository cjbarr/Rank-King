
import React, { Component } from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';



const styles = StyleSheet.create({
    Header: {
        backgroundColor:'black',
    },
    display: {fontSize:64,
    color:'white',}
});




const CategoryScreen = (props) => {
    return (<View style={styles.Header}>
        <Text style={styles.display}> Category is!</Text>
        
    </View>
    )
}

export default CategoryScreen;
