import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Intro extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.text}>testing...</Text>
                <Button color="orange" title="button" onPress={()=>this.props.navigation.navigate('LoginStackNav')} ></Button>
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