import React from 'react';
import MovieList from '../screens_movie/MovieList';
import MovieDetail from '../screens_movie/MovieDetail';
import {createStackNavigator} from '@react-navigation/stack'

const StackNav=createStackNavigator();

// 선언적 함수로 함수 컴포넌트 만들기!
export default function MovieStackNav(){
    return(
            <StackNav.Navigator>
                <StackNav.Screen name="MovieList" component={MovieList}></StackNav.Screen>
                <StackNav.Screen name="MovieDetail" component={MovieDetail}></StackNav.Screen>
            </StackNav.Navigator>
    );
}

