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

    componentDidMount(){
        this.props.navigation.setOptions({
            tabBarLabel:"두 번째~",
            tabBarIcon:()=><Image source={require('../img/RN_logo.png')} style={{width:24, height:24}}></Image>
        });
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