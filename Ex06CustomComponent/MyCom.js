import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native'

export default class MyCom extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Button title={this.props.title} color={this.props.color} onPress={this.props.onclick}></Button>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        margin:16,
        color:'pink',
    }
})


