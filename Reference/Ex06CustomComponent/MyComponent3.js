//JSX를 JS로 변환하는 React와 Component를 인식하기 위해 import
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class MyComponent3 extends Component{

    // 이 컴포넌트가 그려낼 JSX를 리턴하는 메소드
    render(){

        return (
            // 1) 우선 간단한 텍스트 출력
            // <View>
            //     <Text>Component 3</Text>
            // </View>

            // 2) 버튼의 title속성에 props사용하기
            // 스타일이 없으면 버튼들이 너무 붙어 있어서 margin스타일 적용
            // <View style={ {margin:16} }>
            //     <Button title={ this.props.title }></Button>
            // </View>

            // 3) 버튼의 onPress속성에 props사용하여 함수객체 전달받기
            // MainComponent.js의 3.1실습 작성 후..
            <View style={ {margin:16} }>
                <Button onPress={ this.props.onPress } title={ this.props.title }></Button>
            </View>
            
        );

    }//render method..

}// MyComponent3 class

//클래스를 다른 JS에서 사용할 수 있도록 export하기
export default MyComponent3;

