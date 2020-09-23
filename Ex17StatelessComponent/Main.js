import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default class Main extends Component{

    state={
        msg:'hello'
    }

    clickBtn=()=>{
        this.setState({msg:'nice'})
    }


    render(){
        return (
            <View style={styles.root}>
                {/* 새로운 컴포넌트를 만드는 2 가지 방법 */}
                {/* 1. 원래 하던 방식 - Stateful Component, Component를 상속받은 class를 만듦 */}
                {/* 2. stateless Component - 마치 함수를 만들듯이 Component를 만듦[함수형 컴포넌트] */}

                <MyComponent aaa="sam"></MyComponent>
                <MyComponent aaa="robin"></MyComponent>
                <MyComponent aaa="rabbit"></MyComponent>

                {/* {
                    MyComponent2()
                } */}
                {/* 위의 함수를 마치 하나의 컴포넌트 인 양... 쓰는 것을 허락해줌!! */}
                <MyComponent2 aaa="cute" bbb="cat"></MyComponent2>
                <MyComponent2 aaa="lovely"></MyComponent2>
                <MyComponent2 aaa="adorable"></MyComponent2>

                <AAA clickBtn={this.clickBtn}></AAA>
                <BBB msg={this.state.msg}></BBB>
            </View>
        );
    }
}

const AAA=(props)=>{
    return(
        <View>
            <Button title="글씨 바꾸기" onPress={props.clickBtn}></Button>
        </View>
    );
}

const BBB=({msg})=>{
    return(
        <View>
            <Text>{msg}</Text>
        </View>
    );
}


// 원래방식으로 컴포넌트 설계하기
class MyComponent extends Component{
    render(){
        return (
            <View>
                <Text style={styles.text}>{this.props.aaa}</Text>
            </View>
        );
    }
}

// Stateless Component(함수형 컴포넌트) 설계하기
// 사용하기에 아주 간결하고 편해보이나, 함수이기 때문에 멤버변수 사용이 불가능하다! (state)
// 즉, 값 변경 없이 그냥 같은 모양의 컴포넌트를 쉽게 사용하기에 적합하다!
// 화살표 함수 뿐 아니라 익명함수로 해도, 선언적 함수로 해도 모두 잘 작동한다
// props같은 경우는 파라미터로 전달받아(여러 props들이 하나의 객체로 전달됨!) 그것으로 값을 출력할 수 있음!
// const MyComponent2 = props=>{
//     return (
//     <View>
//         <Text style={styles.text2}>Nice to meet you {props.aaa} {props.bbb} </Text>
//     </View>);
// }
// 위의 코드를 구조분해할당까지 사용하자!
const MyComponent2 = ({aaa, bbb})=>{
    return (
    <View>
        <Text style={styles.text2}>Nice to meet you {aaa} {bbb} </Text>
    </View>);
}


const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },
    text:{
        margin:8,
        padding:8,
        fontSize:18
    },
    text2:{
        color:'blue',
        fontWeight:'bold'
    }
})