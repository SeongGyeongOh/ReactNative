import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Main extends Component{    
    render(){
        return (
            <View style={{flex:1, padding:16, justifyContent:'center',alignItems:'center'}}>
                <Text>React Native Publising APP</Text>
            </View>
        );

    }
}