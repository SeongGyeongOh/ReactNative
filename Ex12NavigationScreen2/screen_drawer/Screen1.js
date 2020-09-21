import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Screen1 extends Component{

    
    render(){
        return (
            <View style={styles.root}>
                <Text style={styles.text}>Screen #1</Text>
                <View style={{width:100, alignSelf:'center'}}>
                    <Button title="드로어 열기" onPress={()=> this.props.navigation.openDrawer()}></Button>
                </View>
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