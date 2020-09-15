//리액트 라이브러리 사용/그 중에서도 Component 클래스를 사용
import React, {Component} from 'react';
// 리액트 네이티브의 라이브러리의 클래스를 import
import {Text, View, Button, Image, StyleSheet} from 'react-native';


//리액트 네이티브는 Component를 상속받은 클래스들만 화면에 보여질 수 있다!
class MyApp extends Component{
    //이 컴포넌트가 보여줄 뷰를 그려내는 메소드가 있어야 한다
    render(){
        //리액트 네이티브는 한 번에 하나의 Component만 리턴 가능함
        //Component를 감싸는 Component를 만들어야 함(마치 안드로이드의 ViewGroup같은 역할, web의 div같은 역할)

        // xml 문법 안에서 JS 문법도 사용이 가능함!! (중괄호 {} 사용 - 단, 중괄호 안에 변수나 상수, 값, 또는 함수만 놓여질 수 있다)
        let name="SAM"; 
        let btntitle="click";

        // 스타일 적용하기 : css 인라인 적용과 흡사함
        // 스타일을 JS의 객체로 만들어서 지정해줌! (버튼은 뷰로 감싸서 스타일 지정해야함)
        return ( //여러줄 쓸 수 있도록 () 권장!-안해도 에러는 아님
            <View style={styles.viewstyle}> 
                <Text style={styles.textstyle}>Hello? {name}</Text>
                <Text style={plain}>Nice to meet you!</Text>
                <View style={{marginTop:20}}>
                    <Button title={btntitle}></Button>
                </View>
                <Image source={ require('../Ex01MyApp/ms21.png') }></Image>
            </View>
        );
    }
}


// 전역 위치에 스타일 객체들을 만들어 보자
let viewstyle={
    backgroundColor:'#aaffff',
    padding: 16,
    // height: '100%' 비권장
    // RN은 기본적으로 css중에서 flex 스타일이 적용되어 있다
    flex: 1 //이미 display:flex는 되어있는 상태. flex-grow 속성을 사용해서 화면 전체를 채우도록 하자(그냥 flex로 씀)
}
let plain={
    color:'gray',
    fontSize:15,
    marginBottom:8
}
let textstyle={
    color:'red',
    fontSize: 20, //기본단위는 dp
    fontWeight:'bold',
    marginBottom:5
}


//스타일이 위처럼 개별변수로 존재하면 가독성이 좋지 못함..
//스타일을 몰아서 한방에...
const styles= StyleSheet.create({
    viewstyle:{
        backgroundColor:'#aabbcc',
        flex:1,
        padding:16
    },

    textstyle:{
        color:'blue',
        fontSize:25,
        fontWeight:'bold',
        margin:15
    }
});


export default MyApp; //위에서 만든 MyApp 클래스를 index.js에서 첫번째로 실행할 컴포넌트로 설정하기 위해 추출을 하자
