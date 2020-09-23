import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class Test1_1 extends Component{
    render(){
        return (
            <View>
                <Text>1 - 1</Text>
                <Button title="1" onPress={()=>this.props.navigation.navigate('1')}> </Button>
                <Button title="2" onPress={()=>this.props.navigation.navigate('2')}> </Button>
                <Button title="3" onPress={()=>this.props.navigation.navigate('3')}> </Button>
            </View>
        );
    }
}