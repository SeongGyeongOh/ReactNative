import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Test1_2 extends Component{
    render(){
        return (
            <View>
                <Text>1 - 2</Text>
                <Button title="1" onPress={()=>this.props.navigation.navigate('1')}> </Button>
                <Button title="2" onPress={()=>this.props.navigation.navigate('2')}> </Button>
                <Button title="3" onPress={()=>this.props.navigation.navigate('3')}> </Button>
            </View>
        );
    }
}