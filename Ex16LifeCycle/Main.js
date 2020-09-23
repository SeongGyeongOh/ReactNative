import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Main extends Component{
    //순서대로 적어보자
    // 1. 생성자
    constructor(){
        super();
        // 로그 출력
        console.log('생성자 호출');
        this.state={
            data:'aa'
        }
    }
    // 2. 화면에 보이기 전에 ... 이 컴포넌트 클래스가 화면에 연결되기 직전에 호출
    // componentWillMount - deprecated, 지금 사용하면 경고창이 뜸!
    // 만약 꼭 사용하고 싶다면....앞에 UNSAFE_ 붙이기! 이러면 경고가 뜨지 않음!
    UNSAFE_componentWillMount(){ console.log('더이상 사용하지 않는 componentWillMount!')}

    // 3. 화면에 그려지는 것
    render(){
        console.log('render() 호출');
        return (
            <View>
                <Text>{this.state.data}</Text>
                <Button onPress={()=>{this.setState({data:'bb'})}} title="테스트"></Button>
            </View>
        );
    }

    // 4. componentDidMount
    // 화면에 그려진 다음에 딱 한 번 호출되는 메소드 - 많이 사용함!(render은 여러 번 호출이 가능(setState)하나, 이녀석은 한 번 컴포넌트가 시작했으면 다시 불러지지 않는다!)
    // 보통 이곳에서 네트워크 데이터 fetch, 네비게이션 옵션 설정, 파일에 저장된 데이터 읽어오기 등 작업을 함!
    componentDidMount(){
        console.log('componentDidMount까지 ~')
    }

    // 5. componentDidUpdate
    // render 이후에 무조건 실행됨
    componentDidUpdate(){
        console.log('componentDidUpdate도 실행됨!');
    }

    // 6. componentWillUnMount 
    // 컴포넌트가 없어질 때..
    componentWillUnmount(){
        console.log('componentWillUnmount 끝!!!!!!!!!!!!!!')
    }
}