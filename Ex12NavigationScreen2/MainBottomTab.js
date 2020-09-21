import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FirstTab from './screen_bottomtab/FirstTab';
import ThirdTab from './screen_bottomtab/ThirdTab';
import SecondTab from './screen_bottomtab/SecondTab';
import { Image } from 'react-native';

const BottomTab=createBottomTabNavigator();

export default class MainBottomTab extends Component{

    render(){
        return (
            <NavigationContainer>
                <BottomTab.Navigator
                initialRouteName={'second'} 
                tabBarOptions={{
                    activeTintColor:'green',
                    inactiveTintColor:'blue',
                    activeBackgroundColor:'grey',
                    showLabel:true,
                    labelPosition:"below-icon",
                    labelStyle:{fontSize:14, fontWeight:"bold"}
                }}>
                    <BottomTab.Screen 
                        name="first" 
                        component={FirstTab}
                        options={
                            {
                                tabBarLabel:'111',
                                tabBarBadge:'3',
                                tabBarIcon:()=>{return <Image source={require('./img/RN_logo.png')} style={{width:24, height:24}}></Image>}
                            }
                        }
                        ></BottomTab.Screen>
                    <BottomTab.Screen name="second" component={SecondTab}></BottomTab.Screen>
                    <BottomTab.Screen name="third" component={ThirdTab}></BottomTab.Screen>
                </BottomTab.Navigator>
            </NavigationContainer>
        );
    }
}