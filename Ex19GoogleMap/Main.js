import React, {Component} from 'react';
import {View, Text} from 'react-native';

// 라이브러리 저장
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default class Main extends Component{

    constructor(){
        super();
        this.state={
            region:{
                latitude: 37.562080,
                longitude: 127.035192,
                latitudeDelta: 0.00981,
                longitudeDelta:0.0421
            },

            // 여러개의 마커 정보를 가지고 있는 객체
            markers:[
                {latlng:{latitude:37.562114, longitude:127.036891},
                title:'대량의 위치1',
                description:'왕십리어찌고1'},
                {latlng:{latitude:37.561155, longitude:127.04560},
                title:'대량의 위치2',
                description:'왕십리어찌고2'},
                {latlng:{latitude:37.567714, longitude:127.035545},
                title:'대량의 위치3',
                description:'왕십리어찌고3'},
                {latlng:{latitude:37.525321, longitude:127.032256},
                title:'대량의 위치4',
                description:'왕십리어찌고4'},
                {latlng:{latitude:37.561164, longitude:127.033333},
                title:'대량의 위치5',
                description:'왕십리어찌고5'}
            ]
        }
    }
    render(){
        return (
            <View style={{flex:1, padding:14}}>
                <Text style={{fontSize:18, fontWeight:"bold", alignSelf:'center'}}>Map Test</Text>

                {/* 맵뷰는 사이즈가 필수이다!!  */}
                <MapView 
                    style={{flex:1}}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={this.state.region}>
                    {/* 맵에 마커 추가하기 */}
                    <Marker
                        // 마커 위치 좌표- latitude와 longitude 두 멤버변수만 있음 되기 때문에 그냥 state.region을 줘버림 됨(나머 멤버야 있던 없던....)
                        coordinate={this.state.region}
                        title='ㅇ아무위치임'
                        description="http://kamniang.dothome.co.kr">
                    </Marker>

                    <Marker
                        // 마커 위치 좌표- latitude와 longitude 두 멤버변수만 있음 되기 때문에 그냥 state.region을 줘버림 됨(나머 멤버야 있던 없던....)
                        coordinate={{latitude:37.561727, longitude:127.036370}}
                        title='아무위치임2'
                        description="http://kamniang.dothome.co.kr">
                    </Marker>

                    {/* 미커 여러개를 한 번에 놓고싶다면??/ */}
                    {this.state.markers.map((marker, index)=>{
                        return (
                            <Marker key={index} 
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}></Marker>
                        );
                    })}


                </MapView>
            </View>
        );
    }
}
