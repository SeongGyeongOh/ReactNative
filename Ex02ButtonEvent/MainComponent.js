import React, {Component} from 'react';
import {Text, Button, View, StyleSheet, Alert} from 'react-native';

class MainComponent extends Component{
    //속성property 생성
    text="Hello!";
    state={
        data: "hello React Native?!",
        data2: "react native"
    };
    render(){
        return (
            <View style={styles.root}>
                {/* onPress 속성 안에 함수는 전역함수 비권장, 동일한 클래스에서 멤버메소드로 처리하는거 권장 */}
                {/* 멤버를 사용할 때 반드시!!!! this. 키워드가 필요하다 */}
                <Button title="button" onPress={ this.setTextValue }></Button>

                {/* 글씨를 보여주는 Component */}
                <Text style={styles.textStyle}>{this.state.data}</Text>
                
                <Button color="orange" title="button" onPress={ this.setTextValue2 }></Button>
                <Text style={styles.textStyle}>{this.state.data2}</Text>
            </View>
        );
    }//render메소드

    //버튼이벤트 처리하는 메소드
    // show(){
        // Alert.alert('멤버메소드');

        //Text 컴포넌트가 보여주는 글씨 변경하기
        // 글씨를 가진 뷰를 참조해서 제어 ㄴㄴㄴㄴㄴㄴㄴ
        // 그 뷰가 보여주는 내용물을 변경(내용물을 가진 변수의 값을 변경변경 ㄱㄱ)
        // this.text="aassddff"; //버튼 클릭하면 에러남!!!
        //에러 이유 : 버튼 클릭 시 발동하는 함수를 선언적 함수로 만들면 그 함수 안에서 this 키워드는 함수를 실행시키는 버튼을 가리키게 된다....
        // 즉, 여기서 text는 MainComponent 클래스의 멤버가 아니라 버튼 안에서 찾고있기 때문에 에러가 난다.
    // }

    //그렇기에 React Native에서 이벤트 처리함수는 반드시 화살표함수로 만들 것을 권장한다!!
    show2=()=>{
        // 이 화살표 안에서 this는 MainComponent클래스를 가리킨다!
        this.text="화살표 함수가 필수이다!!";
        // 여기서 변수값은 바뀌었지만, 화면을 갱신하지 않으면 값이 바뀐지 안바뀐지 모른다 - 즉, 화면의 변화가 없다
        // this.forceUpdate(); //re render() 함수 호출->사용은 안함

        //모든 Component 클래스에는 독특한 속성(property)(엄밀히는 객체) 2개를 가지고 있다
        // 1. state <- 요 녀석!!
        // 2. props
    }

    setTextValue=()=>{
        // Alert.alert('a');

        //컴포넌트의 특별한 멤버변수-state의 값을 변경하면 화면이 자동으로 갱신된다?!?
        // 반드시 변경은 setState()라는 메소드를 이용해야함 한다! (state의 상태값을 바꾸겠다는 메소드)
        this.setState( {data:"중요 포인트 1)화살표 함수 2)state 속성"}); 
    }
    setTextValue2=()=>{
        this.setState({data2:"이상하고 이상한 리액트 네이티브 나라"});
    }
}//MainComponent

//가급적 버튼 이벤트 함수들은 그 버튼을 가진 class 안에서 처리하는 것을 권장한다!
// //전역 함수
// function clickBtn(){
//     Alert.alert('버튼 클릭됨, 일반 전역함수');
// }
// //익명함수
// let clickBtn2=function(){
//     Alert.alert('클릭 2, 익명함수');
// }
// //화살표함수
// let clickBtn3=()=> Alert.alert('클릭3 화살표함수');



//적용할 스타일시트
let styles= StyleSheet.create({
    root:{
        padding:16,
        flex:1
    },

    textStyle:{
        marginTop:16,
        fontWeight:'bold',
        paddingLeft:10,
        paddingRight:10
    }
});


//index.js에서 MainComponent를 인식할 수 있도록 추출 ㄱㄱ
export default MainComponent;