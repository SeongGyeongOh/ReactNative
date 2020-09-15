import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';

export default class MainComponent extends Component{
    render(){
        return(
            <View style={{flex:1, flexDirection:'row', justifyContent:"space-evenly", alignItems:'center'}}>
                <View style={{width:50, height:50, backgroundColor:'green'}}></View>
                <View style={{width:50, height:50, backgroundColor:'red'}}></View>
                <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
            </View>
        );
    }
}

// const styles=StyleSheet.create({
//     root:{
//         padding:16,
//         flex:1,
//     }
// });
