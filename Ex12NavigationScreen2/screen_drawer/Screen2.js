import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Screen2 extends Component{

    
    render(){
        return (
            <View style={styles.root}>
                <Text style={styles.text}>Screen #2</Text>
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