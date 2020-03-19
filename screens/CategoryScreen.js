
import React, { Component } from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Header from './Header';
import BottomMenu from './BottomMenu';




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
        Tacos: ['Tacos',
            'Burritos',
            'Soda',
            'Ice Cream',
            'Dip']
    }
    render() {
        
        return (
            <View>
               
                     <View style={styles.display}>
                        <Text style={styles.topRated}>Taco John 👑</Text>
                        <Text style={styles.ratings}>Flavor: 2</Text>
                        <Text style={styles.ratings}>Cost: 3</Text>
                        <Text style={styles.ratings}>Quality: 5</Text>
                        <TouchableOpacity>
                            <Button onPress={() => { console.log('you pressed edit') }} title="Edit Item"></Button>
                        </TouchableOpacity>
                </View>
                <View style={styles.display}>
                    <Text style={styles.topRated}>Taco Pete</Text>
                    <Text style={styles.ratings}>Flavor: 2</Text>
                    <Text style={styles.ratings}>Cost: 3</Text>
                    <Text style={styles.ratings}>Quality: 5</Text>
                    <TouchableOpacity>
                        <Button onPress={() => { console.log('you pressed edit') }} title="Edit Item"></Button>
                    </TouchableOpacity>
                </View>
                <View style={styles.display}>
                    <Text style={styles.topRated}>Taco Cart</Text>
                    <Text style={styles.ratings}>Flavor: 2</Text>
                    <Text style={styles.ratings}>Cost: 3</Text>
                    <Text style={styles.ratings}>Quality: 5</Text>
                    <TouchableOpacity>
                        <Button onPress={() => { console.log('you pressed edit') }} title="Edit Item"></Button>
                    </TouchableOpacity>
                </View>
                <View style={styles.display}>
                    <Text style={styles.topRated}>Taco Shack</Text>
                    <Text style={styles.ratings}>Flavor: 2</Text>
                    <Text style={styles.ratings}>Cost: 3</Text>
                    <Text style={styles.ratings}>Quality: 5</Text>
                    <TouchableOpacity>
                        <Button onPress={() => { console.log('you pressed edit') }} title="Edit Item"></Button>
                    </TouchableOpacity>
                </View>
                <View style={styles.display}>
                    <Text style={styles.topRated}>Taco Tunnel</Text>
                    <Text style={styles.ratings}>Flavor: 2</Text>
                    <Text style={styles.ratings}>Cost: 3</Text>
                    <Text style={styles.ratings}>Quality: 5</Text>
                    <TouchableOpacity>
                        <Button onPress={() => { console.log('you pressed edit') }} title="Edit Item"></Button>
                    </TouchableOpacity>
                </View>
                <View style={styles.display}>
                    <Text style={styles.topRated}>Taco Tornado</Text>
                    <Text style={styles.ratings}>Flavor: 2</Text>
                    <Text style={styles.ratings}>Cost: 3</Text>
                    <Text style={styles.ratings}>Quality: 5</Text>
                    <TouchableOpacity>
                        <Button onPress={() => { console.log('you pressed edit') }} title="Edit Item"></Button>
                    </TouchableOpacity>
                </View>
                <View style={styles.display}>
                    <Text style={styles.topRated}>Tacos?</Text>
                    <Text style={styles.ratings}>Flavor: 2</Text>
                    <Text style={styles.ratings}>Cost: 3</Text>
                    <Text style={styles.ratings}>Quality: 5</Text>
                    <TouchableOpacity>
                        <Button onPress={() => { console.log('you pressed edit') }} title="Edit Item"></Button>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


class CategoryScreen extends Component {
    render() {



        return (<View style={styles.box}>
            <Header />
            <Text style={styles.Category}>{this.props.route.params.category}</Text>
            <ScrollView style={styles.home}>
                <Display />




            </ScrollView>
            <BottomMenu />
            </View>
        )
    }
}

export default CategoryScreen;

