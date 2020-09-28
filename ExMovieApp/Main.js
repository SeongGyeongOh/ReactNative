import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// StackNavigator을 만들기 위한 함수를 import
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

// 최상위 Stack Navigator에서 보여줄 스크린들 import
import Intro from './Intro'
import LoginStackNav from './navigators/LoginStackNav';

// 앱 전체화면을 전환할 수 있는 최상위 Stact Navigator
const RootStack=createStackNavigator();

export default class Main extends Component{
    render(){
        return ( 
            <NavigationContainer>
                <RootStack.Navigator
                    // StackNavi들의 제목줄 이름 없애기
                    screenOptions={{
                        headerShown:false
                    }}>
                    {/* 별명을 클래스 이름과 동일하게 설정! */}
                    <RootStack.Screen name="Intro" component={ Intro }></RootStack.Screen>
                    <RootStack.Screen name="LoginStackNav" component={ LoginStackNav }></RootStack.Screen>
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}