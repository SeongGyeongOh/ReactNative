import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';

// position 속성의 웹과의 차이점 : 기본적으로 Comopnent-View의 속성이 relative로 들어가 있다.(기본 flex 속성)
// 그래서 absolute를 줬을 때 해당 Component를 감싸는 부모 요소의 좌상단을 기준으로 움직인다!!!

export default class MainComponent extends Component{
    render(){
        return(
            <View style={ { flex:1, flexDirection:'column' }}>
                {/* 크게 세로 1:2 */}
                <View style={{flex:1, flexDirection:'row', backgroundColor:'green'}}>
                    {/* 좌우 1:2 */}
                    <View style={{flex:1, backgroundColor:'red'}}>
                        <View style={{position:'absolute', backgroundColor:'white', width:50, height:50, top:10, left:10, zIndex:1}}></View>
                        <View style={{position:'absolute', backgroundColor:'black', width:50, height:50, top:20, left:20}}></View>
                    </View>
                    <View style={{flex:2, backgroundColor:'black'}}>
                    </View>
                </View>
                <View style={{flex:2, backgroundColor:'blue', flexDirection:'row'}}>
                    {/* 좌우 1:2 */}
                    <View style={{flex:2, backgroundColor:'yellow'}}>
                        <View style={{position:'absolute', backgroundColor:'grey', width:50, height:50, right:0, bottom:0}}></View>
                        <View style={{position:'absolute', backgroundColor:'pink', width:50, height:50, top:70, left:70}}></View>
                    </View>
                    <View style={{flex:1, backgroundColor:'orange'}}></View>
                </View>
                    <View style={{width:50, height:50, backgroundColor:'purple', position:"absolute", zIndex:1, borderRadius:25, bottom:10, right:110}}></View>
            </View>
        );
    }
}
