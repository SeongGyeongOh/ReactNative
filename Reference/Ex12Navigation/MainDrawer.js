import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Screen1 from './screen_drawer/Screen1';
import Screen2 from './screen_drawer/Screen2';
import Screen3 from './screen_drawer/Screen3';
import { View, Image } from 'react-native';

// DrawerNavigator 객체 생성
const Drawer= createDrawerNavigator();

export default class MainDrawer extends Component{
    render(){
        return (
            <NavigationContainer>
                {/* 1. Drawer Navigator 컴포넌트 및 스크린(화면) 지정 */}
                {/* <Drawer.Navigator>
                    <Drawer.Screen name='one' component={ Screen1 }></Drawer.Screen>
                    <Drawer.Screen name='two' component={ Screen2 }></Drawer.Screen>
                    <Drawer.Screen name='three' component={ Screen3 }></Drawer.Screen>
                </Drawer.Navigator> */}

                {/* 2. Drawer Options */}
                <Drawer.Navigator
                    drawerPosition='right'
                    hideStatusBar={true}
                    drawerType='front'
                    drawerStyle={{
                        backgroundColor:'white',
                        width:'40%'
                    }}
                    drawerContentOptions={{
                        activeTintColor:'red',
                        itemStyle:{
                            marginVertical: 16
                        }                        
                    }}
                    openByDefault={true}>
                    <Drawer.Screen name='one' component={ Screen1 }></Drawer.Screen>

                    {/* 2.1 개별 스크린 option지정 */}
                    {/* drawerIcon : 아이콘위치에 보여질 컴포넌트 리턴해주는 함수 설정 [ 파라미터 : focued, color, size 정보를 가진 객체 (아이콘의 생상이나 사이즈를 지정할때 사용)] */}
                    <Drawer.Screen name='two' component={ Screen2 } options={ {drawerLabel:'두번째', drawerIcon:(  obj  )=>{return <Image source={require('./icons/RN_logo.png')} style={{width:obj.size, height:obj.size}}></Image>}} }></Drawer.Screen>

                    {/* drawerIcon 파라미터 객체를 구조분해 할당 하고 축약형 표시( {} 생략 ): focued, color, size 정보를 가진 객체 (아이콘의 생상이나 사이즈를 지정할때 사용)] */}
                    <Drawer.Screen name='three' component={ Screen3 } options={ {drawerLabel:'Three', drawerIcon: ( {focused, color, size} )=><Image source={require('./icons/RN_logo.png')} style={{width:size, height:size}}></Image>} }></Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}
