import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screen1 from './screen_drawer/Screen1'
import Screen2 from './screen_drawer/Screen2'
import Screen3 from './screen_drawer/Screen3'
import { Image } from 'react-native';

const Drawer=createDrawerNavigator();
export default class MainDrawer extends Component{
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator 
                    drawerPosition='left'
                    hideStatusBar={false}
                    drawerType='front'
                    drawerStyle={{
                        backgroundColor:'snow',
                    }}
                    drawerContentOptions={{
                        activeTintColor:'red',
                        activeBackgroundColor:'grey',
                        itemStyle:{
                            marginVertical:16
                        }
                    }}
                    openByDefault={false}>
                    <Drawer.Screen name="one" component={Screen1}></Drawer.Screen>
                    <Drawer.Screen name="two" component={Screen2}
                        options={{
                            drawerLabel:'둘둘둘',
                            drawerIcon:(obj)=><Image source={require('./img/RN_logo.png')} style={{width:obj.size, height:obj.size}}></Image>
                        }}
                        ></Drawer.Screen>
                    <Drawer.Screen name="three" component={Screen3}
                        options={{
                            drawerIcon:({size, focused, color})=><Image source={require('./img/RN_logo.png')} style={{width:size, height:size}}></Image>
                        }}
                        ></Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

// draserIcon에서 주의할 것!!
// 아이콘을 지정할 때 파라미터로 객체가 하나 온다!
// 아이콘 사이즈를 전달된 파라미터에 근거해서 만들어야 모든 핸드폰에 잘 적용되는 사이즈를 적용할 수 있음
// 구조분해할당을 이용해서 사이즈를 지정해보자 - screen3