import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import MyCom from './MyCom';
import MyCom2 from './MyCom2';

export default class Main extends Component{
    state={
        text:'hello?'
    }
    
    click=()=> this.setState({text:'nice!'})
    
    click2=()=> this.setState({text:'good!'})
        
    // click3=()=> this.setState({text:'great!'})
    


    render(){
        return (
            <View style={styles.root}>
                {/* <Text style={styles.text}>{this.state.text}</Text> */}
                {/* 컴포넌트간 데이터 건드릴 때 직접 건드리지 말고, 건너건너 건드려야 안전함!! 꼭 기억할 것!!! */}
                {/* props로 값을 전달할 때 한번에 전달하는 spread 연산자도 있음!!!! 꼭 교수님 주석 파일을 확인할 것! */}
                <MyCom2 msg={this.state.text}></MyCom2>
                <MyCom color='grey' title='grey' onclick={this.click}></MyCom> 
                <MyCom color='skyblue' title='skyblue' onclick={this.click2}></MyCom> 
                <MyCom color='pink' title='pink' onclick={()=> this.setState({text:'great!'})}></MyCom> 
            </View>

        );

    }//render method

}//Main class

//나만의 커스텀 컴포넌트
class MyComponent extends Component{
    render(){
        return (
            <View style={{margin:8}}>
                {/* 속성을 전달받기 위한 용도의 props!!! 내가 직접 만드는거 아님! - 값 변경 불가능한 상수!*/}
                <Text style={styles.textStyle}>Hello { this.props.name }</Text>
                <Button title={this.props.title
                }></Button>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:8
    },

    textStyle:{
        backgroundColor:'yellow',
        color:'green'
    },

    text:{
        fontSize:20,
        fontWeight:"bold",
        alignSelf:"center"
    }
})

