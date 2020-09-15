import React, {Component} from'react';
import {Text, Button, View, StyleSheet} from 'react-native';

class Ex02Review extends Component{
    //Text 안에 들어갈 내용을 미리 정해진 state 속성 안에 넣어야함
    state={
        data1:"텍스트 변경 테스트",
        data2:"버튼 클릭과 텍스트 변경을 확인하는 이벤트임 ㅇㅇ"
    }

    render(){
        return(
            <View style={styles.view}>
                <Button title="버튼 1" onPress={this.changeText1}></Button>
                <Text>{this.state.data1}</Text>

                <Button title="버튼 2" onPress={this.changeText2}></Button>
                <Text>{this.state.data2}</Text>
            </View>
        )
    };

    //익명함수로 버튼클릭 이벤트 처리
    changeText1=()=>{
        this.setState({data1:"변경됨"});
    }

    changeText2=()=>{
        this.setState({data2:"얘도 잘 변경됨"});
    }
}

let styles = StyleSheet.create({
    view:{
        padding:16,
        flex:1,
        backgroundColor: 'grey'
    }
});

export default Ex02Review;