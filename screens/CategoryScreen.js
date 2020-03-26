
import React, { Component } from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
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
    Category: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 34,
        textAlign: 'center',
        backgroundColor: 'darkgrey',
        height:'8%'
    },
    topRated: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold'
    },
    ratings: {
        color: 'green',
        fontSize: 12,
        fontStyle: 'italic'
    },
    home: {
        backgroundColor: 'coral',
    },
    box: {
        height: '100%',
        backgroundColor: 'coral',

    },
    display: {
        backgroundColor: 'antiquewhite',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10
    }
});


function DeleteButton(props) {
    const navigation = useNavigation();

    function deleteItem(itemToDelete) {
        console.log(props, 'props')
        console.log('item to delete', itemToDelete)
        let catagories = props.db.collection('ranks');
        catagories.deleteOne({ "_id": itemToDelete })
            .then(
                console.log('Deleted Item'))
    }

    return (

        <TouchableOpacity>
            <Button onPress={() => { navigation.navigate('EditItem', props) }} title="Edit Item"></Button>
            <Button onPress={() => { deleteItem(props.object._id); navigation.navigate('Home'); }} title="Delete Item"></Button>
        </TouchableOpacity>

    )
}

class Display extends Component {
    
    state = {
    }


    client = Stitch.defaultAppClient;
    db = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('rankdb');


    getItems() {
        console.log('in get Catagory', this.client, this.db)
        let catagories = this.db.collection('ranks');
        catagories.find({ itemCatagory: this.props.catagoryTitle }, { limit: 10 })
            .toArray()
            .then(results => this.setState({ itemState: results })
            ).then(
                console.log('state set'))
    }

    
    
    componentDidMount() {
        this.getItems();
    }
    crit1=this.props.one
    crit2 = this.props.two
    crit3 = this.props.three
    render() {
        console.log('passed down props', this.props)
        console.log(this.crit1)
        return (

            <View>
                {this.state.itemState &&
                    this.state.itemState.map(object => (

                <View key={object.itemName} style={styles.display}>
                    <Text style={styles.topRated}>{object.itemName}</Text>
                            <Text style={styles.ratings}>{this.props.one}: {object[this.crit1]} </Text>
                            <Text style={styles.ratings}>{this.props.two}: {object[this.crit2]}</Text>
                    <Text style={styles.ratings}>{this.props.three}: {object[this.crit3]}</Text>
                    <DeleteButton criteria={this.props} db={this.db} client={this.client} object={object}/>
                </View>
                    ))
                    }
            </View>
                    )
    }
}


class CategoryScreen extends Component {
    render() {

        console.log('is this my state', this.props)

        return (<View style={styles.box}>
            <Header />
            <Text style={styles.Category}>{this.props.route.params.catagoryTitle}</Text>
            <ScrollView style={styles.home}>
                        <Display one={this.props.route.params.criteriaOne} two={this.props.route.params.criteriaTwo} three={this.props.route.params.criteriaThree}  catagoryTitle={this.props.route.params.catagoryTitle} />




            </ScrollView>
            <BottomMenu />
            </View>
        )
    }
}

export default CategoryScreen;

