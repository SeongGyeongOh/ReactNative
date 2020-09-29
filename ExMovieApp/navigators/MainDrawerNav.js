import React from 'react';
import MovieStackNav from './MovieStackNav'

import {createDrawerNavigator} from '@react-navigation/drawer'
import CommunityTabNav from './CommunityTabNav';

const DrawerNav=createDrawerNavigator();

export default MainDrawerNav=()=>{
    return(
        <DrawerNav.Navigator>
            <DrawerNav.Screen name="MovieStackNav" component={MovieStackNav}></DrawerNav.Screen>
            <DrawerNav.Screen name="CommunityTabNav" component={CommunityTabNav}></DrawerNav.Screen>
        </DrawerNav.Navigator>
    );
}