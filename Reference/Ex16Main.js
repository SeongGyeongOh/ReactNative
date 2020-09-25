import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Main extends Component{
    //1. 생성자
    constructor(){
        super();

        //로그 출력
        console.log('constructor');
    }

    //2. 화면에 보이기 전에 .. 이 컴포넌트 클래스가 화면에
    //연결되기 직전에 호출 (deprecated)
    //지금 사용하면 경고표시됨..
    // componentWillMount(){

    // }
    UNSAFE_componentWillMount(){
        console.log('component will mount');
    }

    //3. 화면에 그려질때 호출
    render(){
        console.log('render');
        return <View>
                <Text>Hello RN</Text>
               </View>;
    }

    //4. 화면에 그려진 후 딱 1번 호출되는 메소드
    //보통 이 메소드 안에서 네트워크 데이터 fetch작업 수행
    //또는 navigation의 옵션 설정들... 수행
    //또는 File저장 데이터 읽어오기 같은 작업 수행
    componentDidMount(){
        console.log('component did mounted');
    }

    //5. render()호출 후에 매번 실행됨(즉, 화면 갱신때마다 실행)
    componentDidUpdate(){
        console.log('component did update');
    }

    //6. 컴포넌트가 종료될대 호출
    componentWillUnmount(){
        console.log('component will unmounted');
    }
    
    

}