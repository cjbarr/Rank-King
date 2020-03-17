
import React, { Component } from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';



const styles = StyleSheet.create({
    Header: {
        backgroundColor:'black',
    }
});




const CategoryScreen = (props) => {
    return (<View style={styles.Header}>
        <Text >Category is!</Text>
        
    </View>
    )
}

export default CategoryScreen;
