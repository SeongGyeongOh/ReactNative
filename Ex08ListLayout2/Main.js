import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, Image, Button, ImageBackground, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

    //  화면 갱신에 영향을 주는 대량의 데이터를 가진 객체
    state={
        datas:[
            {name:'sam', msg:'hello world', img:require('./images/flag_australia.png')},
            {name:'samsaek', msg:'hello java', img:require('./images/flag_belgium.png')},
            {name:'ha3', msg:'hello RN', img:require('./images/flag_canada.png')},
            {name:'hahaha', msg:'hello html', img:require('./images/flag_france.png')},
            {name:'haa', msg:'hello hey', img:require('./images/flag_russia.png')},
            {name:'hoo', msg:'hello ㅋㅋ', img:require('./images/flag_usa.png')},
            {name:'sam', msg:'hello world', img:require('./images/flag_australia.png')},
            {name:'samsaek', msg:'hello java', img:require('./images/flag_belgium.png')},
            {name:'ha3', msg:'hello RN', img:require('./images/flag_canada.png')},
            {name:'hahaha', msg:'hello html', img:require('./images/flag_france.png')},
            {name:'haa', msg:'hello hey', img:require('./images/flag_russia.png')},
            {name:'hoo', msg:'hello ㅋㅋ', img:require('./images/flag_usa.png')},
            {name:'sam', msg:'hello world', img:require('./images/flag_australia.png')},
            {name:'samsaek', msg:'hello java', img:require('./images/flag_belgium.png')},
            {name:'ha3', msg:'hello RN', img:require('./images/flag_canada.png')},
            {name:'hahaha', msg:'hello html', img:require('./images/flag_france.png')},
            {name:'haa', msg:'hello hey', img:require('./images/flag_russia.png')},
            {name:'hoo', msg:'hello ㅋㅋ', img:require('./images/flag_usa.png')}
        ]
    }
    render(){
        return (
            <ScrollView style={styles.root}>
                {/* 대량의 데이터를 가진 배열을 컴포넌트로 보여주기 */}
                {this.state.datas.map((element, index)=>{
                   return ( 
                   <TouchableOpacity onPress={()=>this.clickItem(element)} key={index} style={styles.item}>
                       <Image style={styles.itemImg} source={element.img}></Image>
                        <View style={{justifyContent:"center"}}>
                            <Text style={styles.itmeName}>{element.name}</Text>
                            <Text style={styles.itemMsg}>{element.msg}</Text>
                        </View>
                    </TouchableOpacity>);
                })}
                
            </ScrollView>
        );
    }

    clickItem= e=> Alert.alert(`${e.name} : ${e.msg}`);


}//main

const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:4
    },

    item:{
        flexDirection:'row', 
        borderWidth:2, 
        borderColor:'black', 
        borderRadius:4, 
        marginBottom:16,
    },

    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:16,
        marginLeft:20
    },

    itmeName:{
        fontSize:20,
        fontWeight:'bold'
    },

    itemMsg:{
        fontSize:16,
        fontStyle:'italic'   
    }
});
