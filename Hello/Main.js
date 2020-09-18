import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default class Main extends Component{

    state={
        datas:[
            {name:"개", msg:"멍멍", img:require('./images/num01.png')},
            {name:"고양이", msg:"야옹", img:require('./images/num02.png')},
            {name:"닭", msg:"꼭끼오", img:require('./images/num03.png')},
            {name:"쥐", msg:"찍찍", img:require('./images/num04.png')},
            {name:"소", msg:"음모", img:require('./images/num05.png')},
            {name:"염소", msg:"메에?", img:require('./images/num06.png')},
            {name:"호랑이", msg:"어흥", img:require('./images/num07.png')}
        ]
    }
    
    render(){
        return (
            <ScrollView style={styles.root}>
                {this.state.datas.map((element, index)=>{
                    return (
                    <View style={styles.itemstyle} key={index}>
                        <Image source={element.img} style={styles.imgstyle}></Image>
                        <Text>{element.name}</Text>
                        <Text>{element.msg}</Text>
                    </View>
                    );
                })}
            </ScrollView>
        );
    }
} 

const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:8
    },

    itemstyle:{
        marginBottom:20,
        padding:8,
        borderWidth:2,
        borderColor:'brown',
        borderRadius:10
    },
    imgstyle:{
        width:200,
        height:200,
    }
});