import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Test1_1 from './screen_test/Test1_1';
import Test1_2 from './screen_test/Test1_2';
import Test1_3 from './screen_test/Test1_3';

const Stack=createStackNavigator();
// const Top=createMaterialTopTabNavigator();

export default class MainPractice extends Component{
    render(){
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="1" component={Test1_1}></Stack.Screen>
                    <Stack.Screen name="2" component={Test1_2}></Stack.Screen>
                    <Stack.Screen name="3" component={Test1_3}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

