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
        backgroundColor: 'royalblue',
        height:'80%',
    },
    title: {
        backgroundColor: 'gold',
        fontSize: 34,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
    },
    display: {
        backgroundColor: 'antiquewhite',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '85%',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '3px',
        borderRadius: '15px',
        overflow: 'hidden',
        height: '90%',
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
        marginRight:'auto',
        marginLeft:'auto',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    box:{height:'100%',
},

});



const AddButton = (props) => {
    const navigation = useNavigation();
    const db = props.db
    const client = props.client

    function addCategory (){
        db.collection('ranks').insertOne({
            owner_id: client.auth.user.id,
            categoryTitle: props.state.categoryName,
            criteriaOne: props.state.criteriaOne,
            criteriaTwo: props.state.criteriaTwo,
            criteriaThree: props.state.criteriaThree,
            [client.auth.user.id]: 'categoryList'
        })
    }
    

    return (

        <View style={styles.criteriaButton}>
            <Button onPress={() =>{navigation.navigate('NewItem', props.state); addCategory()}} title={'Add Category'}></Button>
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


    handleSecret = () => {
        this.setState({
            categoryName:'French Fries',
            criteriaOne:'Taste',
            criteriaTwo:'Crispiness',
            criteriaThree:'Fresh Factor'
           
        })

        console.log('secret')
    }
    client = Stitch.defaultAppClient;
    db = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('rankdb');
    


    
    render() {
        
        console.log(this.client);

        

        return (<View style={styles.box}>
            <Header />
            <View style={styles.home}>
                <View style={styles.display}>
                    <Text onClick={()=>{this.handleSecret()}} style={styles.title}>New Category</Text>
                    <br></br>
                    <TextInput value={this.state.categoryName} onChange={(event) => { this.handleChange(event, 'categoryName') }} placeholder={'New Category Name'}
                        style={styles.nameInput}
                    />
                    <br></br>
                    <TextInput value={this.state.criteriaOne} onChange={(event) => { this.handleChange(event, 'criteriaOne') }} placeholder={' New Criteria 1'}
                        style={styles.criteriaInput}
                    />
                    <br></br>
                    <TextInput value={this.state.criteriaTwo} onChange={(event) => { this.handleChange(event, 'criteriaTwo') }} placeholder={' New Criteria 2'}
                        style={styles.criteriaInput}
                    />
                    <br></br>
                    <TextInput value={this.state.criteriaThree} onChange={(event) => { this.handleChange(event, 'criteriaThree') }} placeholder={' New Criteria 3'}
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
