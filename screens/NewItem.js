import React, { Component } from 'react';
import { FlatList, Image, Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { RadioButton } from 'react-native-paper';
import Header from './Header';
import BottomMenu from './BottomMenu';



const styles = StyleSheet.create({
    home: {
        backgroundColor: 'coral',
        height:'80%',
    },
    title: {
        backgroundColor: 'darkgrey',
        fontSize: 36,
        textAlign: 'center',
    },

    display: {
        backgroundColor: 'antiquewhite',
        marginTop: 10,
        marginBottom: 0,
        marginRight: 10,
        marginLeft: 10,
        height:'85%',
    },
    nameInput: {
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 2,
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 20,
        textAlign: 'center',
    },
    box: {
        height: '100%',

    },
    criteriaInput: {
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 2,
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 16,
        textAlign: 'center',
    },
    criteriaButton: { 
        marginRight: 10,
        marginLeft: 10,
        
    },
    radioButtons:{
        flexDirection:'row',
        marginLeft:'auto',
        marginRight:'auto',
    },
    criteriaName:{
        textAlign:'center',
                    fontSize:20,
    },


});


class Display extends Component {
    state = {
        checked: 'first',
    };


    
  
    render() {
        const { checked } = this.state;
return (
<View>

    <Text style={styles.criteriaName}> {this.props.criteria}</Text>
        <View style={styles.radioButtons} onChange={(event) => { this.props.handleChange(event, 'criteriaTwo') }}>
        <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'first' })
        }}
        />
        <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'second' }); }}
        />
        <RadioButton
            value="third"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'third' }); }}
        />
        <RadioButton
            value="fourth"
            status={checked === 'fourth' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'fourth' }); }}
        />
        <RadioButton
            value="fifth"
            status={checked === 'fifth' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'fifth' }); }}
        />
    </View>
   
</View>
)
    }
}

class NewItem extends Component {


    state = {
        categoryName: this.props.route.params.categoryName,
        criteriaOne: this.props.route.params.criteriaOne,
        criteriaTwo: this.props.route.params.criteriaTwo,
        criteriaThree: this.props.route.params.criteriaThree,
    }

    handleChange = (event, typeOf) => {
        this.setState({
            ...this.state,
            [typeOf]: event.target.value
        })
    }

    render() {

        console.log(this.props)

        return (
            <View style={styles.box}>
                <Header />
           
            <View style={styles.home}>
                <View style={styles.display}>
                        <Text style={styles.title}>{this.props.route.params.category}{this.props.route.params.categoryName}</Text>
                <br></br>


                        <Display handleChange={this.handleChange} criteria={this.props.route.params.criteriaOne} />
                        <Display handleChange={this.handleChange} criteria={this.props.route.params.criteriaTwo} />
                        <Display handleChange={this.handleChange} criteria={this.props.route.params.criteriaThree} />
            <br></br>

                    <TextInput placeholder={'Sub Category'}
                        style={styles.criteriaInput}/>

                 </View>
                    <View style={styles.criteriaButton}>
                    <Button onPress={() => console.log('adding new item')} title={'Add new item'}></Button>
                </View>
                </View>
<BottomMenu />
</View>


        )
    }
}


export default NewItem;
