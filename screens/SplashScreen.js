import React, { Component } from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';



const styles = StyleSheet.create({
    words: {backgroundColor:'black',
            fontSize:64,
            textAlign:'center',
            color:'white',
        
    },
    screen:{backgroundColor:'black',
        height:812,
        textAlignVertical: 'center',
    },
    myName:{color:'white',
    fontSize:16,
textAlign:'center',
fontFamily:'tahoma'}
});




const SplashScreen = (props) => {
    return (
    
    <View style={styles.screen}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Text style={styles.words}>CooL</Text>
            <Text style={styles.words}>👑</Text>
            <Text style={styles.words}>RankS</Text>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Text style={styles.myName}>Corey Barr</Text>

       
    </View>
    )
}

export default SplashScreen;
