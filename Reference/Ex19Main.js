import React, {Component} from 'react';
import {View, Text, Linking} from 'react-native';

import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export default class Main extends Component{
    state={
        region:{
            latitude:37.562080,
            longitude:127.035192,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007
        },

        // 여러개의 마커정보들..
        markers:[
            {
                latlng: {latitude:37.562516, longitude:127.035679},
                title: '희망약국',
                description:"왕십리에 있는 약국"                
            },
            {
                latlng: {latitude:37.561155, longitude:127.034560},
                title: '이수프라자약국',
                description:"왕십리에 있는 약국"                
            },
            {
                latlng: {latitude:37.560710, longitude:127.035978},
                title: '연세우리약국',
                description:"왕십리에 있는 약국"                
            },
            {
                latlng: {latitude:37.562162, longitude:127.032171},
                title: '왕십리약국',
                description:"왕십리에 있는 약국"                
            }

        ],
    };

    render(){
        return (
            <View style={ {flex:1, padding:16} }>
                <Text style={{padding:8}}>Map Test</Text>

                <MapView
                    style={ {flex:1} }
                    provider={PROVIDER_GOOGLE}
                    initialRegion={this.state.region}>

                    <Marker
                        coordinate={ this.state.region }
                        title="미래능력개발교육원"
                        description="http://www.mrhi.or.kr" ></Marker>

                    <Marker
                        coordinate={ {latitude:37.561727, longitude:127.036370 } }
                        title="성동경찰서"
                        description="https://www.smpa.go.kr" ></Marker> 

                    {/* 마커 여러개를 한방에.. */}
                    {
                        this.state.markers.map( (marker, index)=>{
                            return (
                                <Marker
                                    coordinate={ marker.latlng }
                                    title={ marker.title }
                                    description={ marker.description}
                                    key={index}
                                    image={ require('./icons/icon.png') }>                                    
                                </Marker>
                            );
                        })
                    }

                    {/* 마커 Collout(툴팁박스) 클릭반응하기 */}
                    <Marker
                        coordinate={{latitude:37.563341, longitude:127.036909}}
                        title="성동구청"
                        description="http://www.sd.go.kr"
                        onCalloutPress={ this.clickMarker }></Marker>                   

                </MapView>


            </View>
        );
    }

    clickMarker=()=>{
        //웹브라우저 열기
        Linking.openURL('http://www.sd.go.kr');
    }

}