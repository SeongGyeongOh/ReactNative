import React, {Component} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FirstTab from './screen_materialtoptab/FirstTab';
import SecondTab from './screen_materialtoptab/SecondTab';
import ThirdTab from './screen_materialtoptab/ThirdTab';

// MaterialTopTab객체 생성
const TopTab= createMaterialTopTabNavigator();

export default class MainMaterialTopTab extends Component{
    render(){
        return (
            <NavigationContainer>
                {/* 1. MaterialTopTab Navigator 컴포넌트 및 Tab에 의해 보여질 스크린(화면) 지정 */}
                {/* <TopTab.Navigator>
                    <TopTab.Screen name='First' component={ FirstTab }></TopTab.Screen>
                    <TopTab.Screen name='Second' component={ SecondTab }></TopTab.Screen>
                    <TopTab.Screen name='Third' component={ ThirdTab }></TopTab.Screen>
                </TopTab.Navigator> */}

                {/* 2. Options 설정 */}
                <TopTab.Navigator
                    tabBarPosition='top'
                    swipeEnabled={true}
                    initialRouteName='Second'
                    tabBarOptions={{
                        activeTintColor:'blue',
                        inactiveTintColor:'gray',
                        showLabel:true,
                        indicatorStyle:{
                            backgroundColor:'green',
                            height:4
                        },
                        showIcon:true
                    }}
                    >
                    <TopTab.Screen name='First' component={ FirstTab }></TopTab.Screen>

                    {/* 2.1 개별 옵션 지정 */}
                    <TopTab.Screen name='Second' component={ SecondTab } options={ {tabBarLabel:'두번째', tabBarIcon: ()=> <Image source={ require('./icons/RN_logo.png')} style= { {width:24, height:24} }></Image>}}></TopTab.Screen>
                    <TopTab.Screen name='Third' component={ ThirdTab }></TopTab.Screen>
                </TopTab.Navigator>
            </NavigationContainer>
        );
    }
}