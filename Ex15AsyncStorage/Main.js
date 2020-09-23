import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

// AsyncStorage : 마치 안드로이드의 SharedPreference와 같은 녀석

export default class Main extends Component{

    constructor(){
        super();
        this.state={
            text:'result',
            // TextInput에서 입력될 글씨를 가진 변수
            inputText:''
        }
    }
    render(){
        return(
            <View style={styles.root}>
                <TextInput 
                value={this.state.inputText}
                style={styles.textInput}
                placeholder="텍스트를 입력하세요"
                onChangeText={this.changeText}
                >
                </TextInput>
                <Button color="brown" title="저장" onPress={this.clickSave}></Button>
                <View style={{marginVertical:2}}></View>
                <Button color="skyblue" title="불러오기" onPress={this.clickShow}></Button>
                <Text style={styles.text}>{this.state.text}</Text>
                <View style={{marginVertical:2}}></View>
                <Button title="ES7을 이용한 비동기 처리" onPress={this.getData}></Button>
            </View>
        );
    }

    changeText=(value)=>{
        // 왜 굳이 글자를 하나하나 받아올 때마다 받아왔을까?
        // 나중에 저장 버튼을 누르며 바로 텍스트인풋 칸을 비우기 위해!
        this.setState({inputText:value})
    }

    clickSave=async ()=>{
        // AsyncStorage에 저장해보자 - SharedPreference와 비슷하게 키 - value 값임
        // 이 앞에도 await를 써서 데이터가 저장될 때 까지 기다려줘야함
        await AsyncStorage.setItem('Data', this.state.inputText);
        Alert.alert('저장됐습니다');

        this.setState({inputText:''});
    }

    clickShow=()=>{
        // 저장되어있는 값 읽기 - 키값 'Data'
        // 이 친구는 비동기 방식으로 움직이는 녀석 - 즉, 별도의 스레드가 돌아감
        // 즉, 값을 달라는 요청과 별도로 메인스레드가 진행됨! - 대입으로 값을 받을 수 없음!
        // promise 문법 사용
        AsyncStorage.getItem('Data').then(value=>this.setState({text:value}));
    }

    getData= async()=>{
        // 어떤 함수를 실행해서 결과를 받기 전, 비동기 방식으로 처리되는 것들을 기다리기 위한 표현 - await
        // 대입연산자가 가능해짐!
        // 이 함수에 await 문법이 있을거라는 것을 함수 앞에 별도로 표시해주기
        const value= await AsyncStorage.getItem('Data'); //이건 비동기가 처리되기까지 메인을 멈추라는 것 - 마치 syncronized
        if(value!=null) this.setState({text:value});
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:8
    },

    textInput:{
        paddingHorizontal:16,
        marginVertical:8,
        borderWidth:2,
        borderColor:'grey',
        borderRadius:4
    },

    text:{
        fontSize:18,
        marginTop:16,
        padding:8,
        textAlign:"center"
    }
})