import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

// Tab에 의해 전환될 스크린 3개
import MAP from '../screens_community/MAP'
import Favor from '../screens_community/Favor'
import Community from '../screens_community/Community'

const TopTab=createMaterialTopTabNavigator();

export default function CommunityTabNav(){
    return(
        <TopTab.Navigator  tabBarPosition='bottom'>
            <TopTab.Screen name="Community" component={Community}></TopTab.Screen>
            <TopTab.Screen name="MAP" component={MAP}></TopTab.Screen>
            <TopTab.Screen name="Favor" component={Favor}></TopTab.Screen>
        </TopTab.Navigator>

    );

}