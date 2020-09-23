import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
// 이미지피커 라이브러리 적용
import ImagePicker from 'react-native-image-picker'

export default class Maim extends Component{

    constructor(){
        super();
        this.state={
            img:{uri:''}
        }
    }
    render(){
        return(
            <View style={{flex:1, padding:16}}>
                <Button title="show picker" onPress={this.showPicker}></Button>
                <Button title="directly" onPress={this.showPicker2}></Button>
                <Text style={{margin:8}}>{this.state.img.uri}</Text>
                {/* 이미지를 uri로 받아올 때는 반드시 크기값을 지정해야 한다 - 아니면 안보임 */}
                <Image source={this.state.img}  style={{flex:1}}></Image>
            </View>
        );
    }

    
    showPicker=()=>{
        // 안드로이드 퍼미션 작업 필요
        // 카메라 퍼미션, 외부 메모리 사용 퍼미션
        // AndroidManifest.xml 문서에서 작업!

        // 다이아로그의 옵션객체
        const options={
            title:'사진 선택',
            cancelButtonTitle:'취소',
            takePhotoButtonTitle:'카메라',
            chooseFromLibraryButtonTitle:'갤러리에서 선택',

            // 카메라 선택시 추가 옵션
            storageOption:{
                skipBackup: true, //ios에서 혹시 icloud에 백업 할 것인지
                path: 'RNimages' //저장할 경로 - DCIM 안에 Pictures 안에 이 이름의 폴더가 생성됨                 
            }
        };

        // Picker 다이아로그 띄우기 (response)는 ActivityResult같은 녀석
        ImagePicker.showImagePicker(options, (response)=>{
            if(response.didCancel){
                // alert('이미지 선택 안함');
            }else if(response.error){
                alert('Image Picker error : '+ response.error);
            }else{
                // 이미지가 잘 선택되었을 때

                // 선택된 이미지의  uri 경로를 얻어오기!!
                const source={uri:response.uri}
                // state 변수에 적용
                this.setState({img:source})
            }
        })
    }

    showPicker2=()=>{
        const options={
            title:'사진 선택',
            cancelButtonTitle:'취소',
            takePhotoButtonTitle:'카메라',
            chooseFromLibraryButtonTitle:'갤러리에서 선택',

            // 카메라 선택시 추가 옵션
            storageOption:{
                skipBackup: true, //ios에서 혹시 icloud에 백업 할 것인지
                path: 'RNimages' //저장할 경로 - DCIM 안에 Pictures 안에 이 이름의 폴더가 생성됨                 
            }
        };

        ImagePicker.launchCamera(options, (response)=>{
            if(response.didCancel){
                // alert('이미지 선택 안함');
            }else if(response.error){
                alert('Image Picker error : '+ response.error);
            }else{
                // 이미지가 잘 선택되었을 때

                // 선택된 이미지의  uri 경로를 얻어오기!!
                const source={uri:response.uri}
                // state 변수에 적용
                this.setState({img:source})
            }
        })
    }
}