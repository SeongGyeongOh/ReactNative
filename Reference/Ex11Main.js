import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screen/Home';
import Second from './screen/Second';
import { Alert, Button, View, Image, Text } from 'react-native';

//Stack Navigator 객체 생성
const Stack= createStackNavigator();

export default class Main extends Component{
    render(){
        return (
            <NavigationContainer>
                {/* Stack Navigator 컴포넌트 및 화면들 지정 */}
                <Stack.Navigator
                    screenOptions={{
                        headerTintColor:'yellow',
                        headerTitleStyle:{
                            fontWeight:'bold'
                        },
                        headerStyle:{
                            backgroundColor:'green'
                        },
                        headerTitleAlign:'center'
                    }}>
                    <Stack.Screen name="home" component={ Home } options={ {title:'홈'} } ></Stack.Screen>
                    <Stack.Screen
                        name="second"
                        component={ Second }
                        options={{
                            title:'두번째',
                            headerTintColor:'white',
                            headerRight: ()=>{return <Button title='menu' onPress={ ()=>Alert.alert('menu') }></Button>;},
                            // headerTitle: ()=>{ return <LogoHeader></LogoHeader>},
                            headerShown: true                            
                        }}>
                    </Stack.Screen>                    
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

class LogoHeader extends Component{
    render(){
        return (
            <View style={ {flexDirection:'row', paddingLeft:8, alignItems:'center'} }>
                <Image source={require('./icons/RN_logo.png')} style={ {width:30, height:30} }></Image>
                <Text style={ {color:'blue', fontWeight:'bold', fontSize:24, marginLeft:16} }> SECOND </Text>
            </View>
        );
    }
}