import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator} from 'react-native';

export default class Intro extends Component{
    render (){

        // 로그인한 적이 있는지 AsyncStorage 값 검사하자
        AsyncStorage.getItem("email")
            .then((value)=>{
                if(value){
                    this.props.navigation.replace('MainDrawerNav');
                }else{
                    this.props.navigation.replace('LoginStackNav');
                }
            });
        
        return(
            <View style={styles.root}>
                {/* 기존에 로그인한 이메일 정보가 있는지 확인하는동안 뱅글뱅글.. */}
                <ActivityIndicator color="orange" size="large"></ActivityIndicator>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold'       
    }
})