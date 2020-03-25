
import React, { Component } from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Header from './Header';
import BottomMenu from './BottomMenu';
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

critOne ='object.'+this.props.one

    render() {
        console.log('passed down props', this.props)
        return (

            <View>
                {this.state.itemState &&
                    this.state.itemState.map(object => (

                <View style={styles.display}>
                    <Text style={styles.topRated}>{object.itemName}</Text>
                    <Text style={styles.ratings}>{this.props.one}: </Text>
                    <Text style={styles.ratings}>{this.props.two}:</Text>
                    <Text style={styles.ratings}>{this.props.three}: 5</Text>
                    <TouchableOpacity>
                        <Button onPress={() => { console.log('you pressed edit') }} title="Edit Item"></Button>
                    </TouchableOpacity>
                </View>
                    ))}
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

