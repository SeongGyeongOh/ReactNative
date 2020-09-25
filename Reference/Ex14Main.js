import React,{Component} from 'react';
import {View, Image, Button, Text} from 'react-native';

//imapge picker 라이브러리 적용
import ImagePicker from 'react-native-image-picker';


export default class Main extends Component{

    constructor(){
        super();

        this.state={
            img: {uri:''}
        }
    }

    render(){
        return (
            <View style={ {flex:1, padding:16} }>
                <Button onPress={ this.showPicker } title="show picker"></Button>
                <Text style={ {margin:8} }> { this.state.img.uri } </Text>
                <Image source={ this.state.img } style={ {flex:1, marginTop:8} }></Image>
            </View>
        );
    }

    showPicker= ()=>{

        //안드로이드의 퍼미션 작업 필요
        // 카메라 퍼미션, 외부메모리 사용 퍼미션 필요!!
        // AndroidManifest.xml문서에서 작업

        //다이얼로그의 옵션객체
        const options= {
            title: '사진 선택',
            cancelButtonTitle:'취소',
            takePhotoButtonTitle:'카메라',
            chooseFromLibraryButtonTitle:'이미지선택',

            //카메라 선택시 추가 옵션
            storageOptions:{
                skipBackup: true, //ios에서 icloud에 백업할 것인가? -android는 무시
                path:'images', //저장될 폴더명 [Pictures/images]에 저장
            }


        };

        //Picker Dialog보이기
        ImagePicker.showImagePicker( options, (response)=>{
            if(response.didCancel){
                alert('User cancelled image picker');
            }else if( response.error){
                alert('Image Picker Error :'+ response.error);
            }else{
                //잘 선택되었다는 것임

                //선택된 이미지의 uri 경로를 얻어오기
                const source= {uri: response.uri};

                //state에 적용
                this.setState({ img: source} );
            }
        });

    }
}