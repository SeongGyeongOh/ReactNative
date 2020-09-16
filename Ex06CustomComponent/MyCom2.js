import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class MyCom2 extends Component{
    render(){
        return (
            <View>
                <Text>{this.props.msg}</Text>
            </View>
        );        
    }
}
