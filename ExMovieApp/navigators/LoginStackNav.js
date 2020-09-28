// 이 문서는 내비게이팅만 하면 되니까.. 함수형으로 Stateless 컴포넌트로 만들자
import React from 'react';
import Login from '../screens_login/Login';
import SignUp from '../screens_login/SignUp';
import ResetPassword from '../screens_login/ResetPassword';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const StackNav=createStackNavigator();

export default LoginStackNav=()=>{
    return (
            <StackNav.Navigator
                screenOptions={{
                    headerShown:false
                }}>
                <StackNav.Screen name="Login" component={Login}></StackNav.Screen>
                <StackNav.Screen name="SignUp" component={SignUp}></StackNav.Screen>
                <StackNav.Screen name="ResetPassword" component={ResetPassword}></StackNav.Screen>
            </StackNav.Navigator>
    );
}
