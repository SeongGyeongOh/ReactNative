import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class ResetPassword extends Component{
    render(){
        return (
            <View style={styles.root}>
                <Text style={styles.text}>reset screen</Text>
                <Button title="button" color="navy"></Button>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:16,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#FEFFFF'
    },

    text:{
        fontSize:18,
        fontWeight:'bold'
    }
})