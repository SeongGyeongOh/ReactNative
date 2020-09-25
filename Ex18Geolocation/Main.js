import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, PermissionsAndroid, Alert} from 'react-native';

// geolocation 서비스를 사용할 수 있게 해주는 라이브러리
import Geolocation from 'react-native-geolocation-service';

export default class Main extends Component{

    constructor(){
        super();
        this.state={
            currPos:{latitude : 0.0, longitude: 0.0}
        }
    }


    // 코드에 에러 있음 - 확인해볼 것!

    render(){
        return (
            <View style={styles.root}>
                    <Button color='navy' title="get my location" onPress={this.getLocation}></Button>
                <View style={{marginVertical:8, flexDirection:'row', justifyContent:'space-between'}}>
                    <Button color='darkgreen' title="watch my location - update" onPress={this.watchLocation}></Button>
                    <Button color='lightgrey' title="stop my location" onPress={this.stopLocation}></Button>
                </View>
                <View style={styles.textarea}>
                    <Text style={styles.text}>latitude : {this.state.currPos.latitude}</Text>
                    <Text style={styles.text}>longitude : {this.state.currPos.longitude}</Text>
                </View>
            </View>
        );
    }

    watchLocation=()=>{
        // 실시간으로 위치정보 얻어오기
        // 현 위치 받아오는 것과 동일하게 - 세 개의 파라미터
        // state에 들어갈 id를 값이 필요한 순간 동적으로 추가해버리자!!(위에 별도로 안만들어도 ㅇㅋㄷㅋ)
        const id=Geolocation.watchPosition(
            position=>this.setState({currPos:position.coords}),
            error=>Alert.alert(error.message+'')
        );
        this.setState({id}); //변수명과 property 명이 같으면 변수명만 써도 된다!!!(마치 HTML과 같은 느낌!)
    }

    stopLocation=()=>{
        // 위치정보 받아오기 없애기
        // 해당 능력을 사용하는 앱이 하나가 아닐 수도 있으니 - 특정 아이디를 하나 줘야한다(watch를 하면 자동으로 하나 넘어옴)
        Geolocation.clearWatch(this.state.id);
    }

    getLocation=()=>{
        // 파라미터를 3개 받는 getCurrentPosition 메소드
        Geolocation.getCurrentPosition(
            // 위치 정보를 얻어오는 데 성공했을 때
            (position)=>{
                this.setState({currPos: position.coords}); //position.coords 로 latitude 값과 longitude 값이 온다
            },

            //위치 정보를 얻어오는 데 실패했을 때
            (error)=>{
                alert(error.message);
            },

            // 
            {}
        );
    }

    // 위치정보 서비스는 반드시 동적퍼미션을 해줘야 한다
    async requestLocationPermission(){
        // 앱이 시작될 때 이 퍼미션을 요청하자
        // 에러가 생길 가능성이 높으니 try-catch문 사용 권장
        try{
            // 퍼미션 요청 다이아로그를 보이도록
            // 결과를 받을 때 까지 기다리도록 async-await을 사용해보자!
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

            if(granted==PermissionsAndroid.RESULTS.GRANTED){
                alert('위치기반 서비스 이용 가능');
            }else{
                alert('위치기반 서비스 이용 불가');
            }
        }catch(error){
            // 콘솔에 경고로 표시됨
            console.warn(error);
        }
    }

    // 컴포넌트가 화면에 보여질 때 자동으로 실행되는 라이프사이클 메소드
    componentDidMount(){
        this.requestLocationPermission()
    }

    componentWillUnmount(){
        // if문 안에 그냥 긴지 아닌지 확인할 때 - null과 undefined가 아니면 전부 true임
        if(this.state.id) Geolocation.clearWatch();
    }
}



const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:8
    },
    textarea:{
        marginTop:16,
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    text:{
        fontSize:16,
    }
});