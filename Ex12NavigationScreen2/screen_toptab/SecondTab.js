import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

export default class SecondTab extends Component{    
    render(){
        return (
            <View style={styles.root}>
                <Text style={styles.text}>Second Tab</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:8
    },

    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})