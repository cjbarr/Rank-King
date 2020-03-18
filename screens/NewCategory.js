import React, { Component } from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';


const styles = StyleSheet.create({
    home: {
        backgroundColor: 'coral',
        height: 650,
    },
    title: { backgroundColor:'lightgrey',
            fontSize:36,
            textAlign:'center',
    },

    display: {
        backgroundColor: 'antiquewhite',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        height: 600,
    },
    nameInput: { height: 40, 
        borderColor: 'black',
        backgroundColor:'white', 
        borderWidth: 2,
        width:'75%',
        marginLeft:'auto',
        marginRight:'auto',
        fontSize:20,
        textAlign: 'center',
    },
    criteriaInput: {
        height: 30,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 2,
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize:16,
        textAlign:'center',
    },


});





class NewCategory extends Component {



    render() {



        return (
            <View style={styles.home}>
                <View style={styles.display}>
                    <Text style={styles.title}>New Category</Text>
                    <br></br>
                    <TextInput placeholder={'New Category Name'}
                        style={styles.nameInput}
                    />
                    <br></br>
                    <TextInput placeholder={' New Criteria'}
                        style={styles.criteriaInput}
                    />
                    <br></br>
                    <TextInput placeholder={' New Criteria'}
                        style={styles.criteriaInput}
                    />
                    <br></br>
                    <TextInput placeholder={' New Criteria'}
                        style={styles.criteriaInput}
                    />
                </View>




            </View>
        )
    }
}


export default NewCategory;
