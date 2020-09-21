import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import SecondTab from './screen_toptab/SecondTab'
import ThirdTab from './screen_toptab/ThirdTab'
import FirstTab from './screen_toptab/FirstTab';
import { Image } from 'react-native';

const TopTab=createMaterialTopTabNavigator();

export default class MainMaterialTopTab extends Component{
    render(){
        return (
            <NavigationContainer>
                <TopTab.Navigator
                    initialRouteName={'second'}
                    tabBarPosition='top'
                    swipeEnabled={true}
                    tabBarOptions={{
                        activeTintColor:'blue',
                        inactiveTintColor:'grey'
                    }}
                    >
                    <TopTab.Screen name="first" component={FirstTab}></TopTab.Screen>
                    <TopTab.Screen name="second" component={SecondTab}
                        options={{
                            tabBarLabel:'두 번째',
                            tabBarIcon:()=><Image source={require('./img/RN_logo.png')} style={{width:24, height:24}}></Image>
                        }}></TopTab.Screen>
                    <TopTab.Screen name="third" component={ThirdTab}></TopTab.Screen>
                </TopTab.Navigator>
            </NavigationContainer>
        );
    }
}