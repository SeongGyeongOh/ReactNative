import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.text}>Home Screen</Text>
                <Button title='화면 전환!' onPress={this.clickBtn}></Button>
            </View>
        );
    }

    clickBtn=()=>{
        // react-navigation에서 navigating을 위한 코드
        // Navigator에 의해 보여지는 컴포넌트들은(각각의 화면들) 자동으로 props 변수 안에 navigation이라는 객체가 전달되어있음!!
        // this.props.navigation.navigate('second'); //각각의 스크린을 제어해줄 녀석, 컴포넌트의 별명을 써주자

        // navigate는 현재 컴포넌트를 백스택에 쌓아놓는다
        // 만약 화면을 전환하며 finish()를 하고싶다면?
        // this.props.navigation.replace('second');

        // 화면 전환시에 데이터 넘겨주기(android의 Extra Data)
        // , 찍고 그 뒤에 넘겨줄 데이터 적기(객체도 넘길 수 있다!, 무엇이든 넘길 수 있다!!)
        this.props.navigation.navigate('second', {name: "sam", age:20}); 
        
    }

    componentDidMount(){
        this.props.navigation.setOptions({
            title:'aa',
        });
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"        
    },

    text:{
        fontSize:20,
        padding:16,
        fontWeight:"bold"
    }
})
