import React, {Component} from 'react';
//라이브러리를 가지고 오는 대상이 달라짐
import {NavigationContainer, StackActions} from '@react-navigation/native';
// stack navigator 라이브러리 데리고 오기 - 네비게이터를 만드는 함수를 임포트
import {createStackNavigator} from '@react-navigation/stack'
import Home from './screen/Home';
import Second from './screen/Second';
import { Alert, Button, Image, View, Text } from 'react-native';

// Stack 객체 생성(Stack Navigator을 만들 수 있는 녀석)
const Stack=createStackNavigator();

export default class Main extends Component{
    render(){
        return(
            // 네비게이터를 가질 수 있는 컨테이너 박스를 먼저 생성
            <NavigationContainer>
                {/* StackNavigator 컴포넌트 및 화면들 지정 */}
                {/* Stack은 위에서 지정한 객체 이름 */}
                {/* 스크린에 옵션 주기 */}
                <Stack.Navigator
                    screenOptions={{
                        headerTintColor:'silver',
                        headerTitleAlign:'center',
                        headerTitleStyle:{
                            fontWeight:"bold",
                            fontSize:16
                        },
                        headerStyle:{
                            backgroundColor:'brown'
                        }
                    }}>
                    {/* 이녀석이 보여줄 화면들을 지정 */}
                    {/* .Screen의 필수 속성: name(별명, 기본으로 제목줄에 이 이름이 들어감!), component(어떤 컴포넌트인지..) */}
                    <Stack.Screen name="home" component={Home} options={{
                        title:'첫 번재 화면입니다~'
                    }}></Stack.Screen>
                    <Stack.Screen name="second" 
                        component={Second} 
                        options={{
                        headerTintColor:'black',
                        title:'두 번째 화면입니다~',
                        headerStyle:{
                            backgroundColor:'gold'
                        },
                        headerRight:()=>{return (<Button title="menu" onPress={()=>Alert.alert('메뉴버튼~!')}></Button>);},
                        // headerTitle:()=>{return (<LogoHeader></LogoHeader>); },
                        // headerShown: false
                    }}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


// 타이틀바 한번에 꾸며서 적용하기!!!!!
class LogoHeader extends Component{
    render(){
        return(
            <View style={{flexDirection:"row", justifyContent:"flex-start"}}>
                <Image source={require('./img/RN_logo.png')} style={{width:30, height:30}}></Image>
                <Text style={{fontSize:18, color:'green', fontWeight:'bold', marginLeft:8}}>두 번째 페이지~</Text>
            </View>
        );
    }
}

