import React, { Component } from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Header from './Header';
import BottomMenu from './BottomMenu';
import { useNavigation } from '@react-navigation/native';
const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} = require('mongodb-stitch-browser-sdk');




const styles = StyleSheet.create({
    home: {
        backgroundColor: 'coral',
        height:'80%',
    },
    title: { backgroundColor:'darkgrey',
            fontSize:36,
            textAlign:'center',
    },

    display: {
        backgroundColor: 'antiquewhite',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        height:'90%'
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
    criteriaButton: {
        width:'25%',
        marginLeft:'65%',
    },
    box:{height:'100%',
},

});



const AddButton = (props) => {
    const navigation = useNavigation();
    const db = props.db
    const client = props.client

    function addCatagory (){
        db.collection('ranks').insertOne({
            owner_id: client.auth.user.id,
            catagoryTitle: props.state.categoryName,
            criteriaOne: props.state.criteriaOne,
            criteriaTwo: props.state.criteriaTwo,
            criteriaThree: props.state.criteriaThree,
        })
    }
    

    return (

        <View style={styles.criteriaButton}>
            <Button onPress={() => {navigation.navigate('NewItem', props.state); addCatagory()}} title={'Add Category'}></Button>
        </View>
        
    )
}

class NewCategory extends Component {

    state={categoryName:'',
            criteriaOne:'',
            criteriaTwo:'',
            criteriaThree:''
    }

    handleChange = (event, typeOf) => {
        this.setState({
            ...this.state,
            [typeOf]: event.target.value
        })
    }

    client = Stitch.defaultAppClient;
    db = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('rankdb');
    


    
    render() {
        
        console.log(this.client);

        

        return (<View style={styles.box}>
            <Header />
            <View style={styles.home}>
                <View style={styles.display}>
                    <Text style={styles.title}>New Category</Text>
                    <br></br>
                    <TextInput onChange={(event) => { this.handleChange(event, 'categoryName') }} placeholder={'New Category Name'}
                        style={styles.nameInput}
                    />
                    <br></br>
                    <TextInput onChange={(event) => { this.handleChange(event, 'criteriaOne') }} placeholder={' New Criteria 1'}
                        style={styles.criteriaInput}
                    />
                    <br></br>
                    <TextInput onChange={(event) => { this.handleChange(event, 'criteriaTwo') }} placeholder={' New Criteria 2'}
                        style={styles.criteriaInput}
                    />
                    <br></br>
                    <TextInput onChange={(event) => { this.handleChange(event, 'criteriaThree') }} placeholder={' New Criteria 3'}
                        style={styles.criteriaInput}
                    />
                    <br></br>
                    <AddButton client={this.client}  db={this.db} state={this.state} />

                    {/* <View style={styles.criteriaButton}>
                        <Button onPress={() => console.log(this.state)} title={'Add Category'}></Button>
                        </View> */}
                    
                </View>



            </View>   
            <BottomMenu />  
            </View>
        )
    }
}


export default NewCategory;
