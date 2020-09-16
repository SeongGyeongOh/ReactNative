import React, {Component} from 'react';
import {Button, Image, ImageBackground, ScrollView, Text, TouchableHighlight, TouchableNativeFeedback, TouchableNativeFeedbackBase, TouchableOpacity, View} from 'react-native';

export default class MainComponent extends Component{
    //이미지의 경로값을 가진 변수를 만들자(버튼 클릭 이벤트를 위해!)
    // require() 메소드 안에 변수 사용이 불가능함....
    state={
        img: require('./images/moana01.jpg'),
        // 클릭 때마다 이미지 바꾸기
        images:[
            require('./images/moana01.jpg'),
            require('./images/moana02.jpg'),
            require('./images/moana03.jpg'),
            require('./images/moana04.jpg'),
            require('./images/moana05.jpg'),
            {uri:"https://post-phinf.pstatic.net/MjAxNzA3MjVfMjY4/MDAxNTAwOTY1MzgxNDgx.6xg0hoDv3TbaMOhE1JKGmSsY7wnc7_8FQGIh8BRG8okg.In4pIMARWM9zdJqa9T8TLeUeWZ90e5q280KdYggk41sg.JPEG/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C.jpg?type=w1200"}
        ],

        imgnum:0
    }

    render(){
        return(
            <View style={ {padding:16, flex:1, backgroundColor:'#eeeeee'}}>
                {/* 이미지를 배경화면으로 쓰고 싶으면 별도의 뷰그룹 - ImageBackground를 사용해야 한다! */}
                <ImageBackground style={{width:'100%', height:'100%'}} source={{uri:"https://post-phinf.pstatic.net/MjAxNzA3MjVfMjY4/MDAxNTAwOTY1MzgxNDgx.6xg0hoDv3TbaMOhE1JKGmSsY7wnc7_8FQGIh8BRG8okg.In4pIMARWM9zdJqa9T8TLeUeWZ90e5q280KdYggk41sg.JPEG/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C.jpg?type=w1200"}} >
                <ScrollView style={{flex:1}}>
                {/* 1. 이미지를 불러와서 객체화, 리턴해주는 함수가 존재함 - require*/}
                {/* 기본적으로 원본 사이즈로 들어감 */}
                {/* resizeMond: 디폴트는 cover, contains 사용 시 원본 비율대로 사이즈 안에 들어옴*/}
                <Image 
                    style={{width:200, height:200, resizeMode:"cover", alignSelf:"center"}} 
                    source={ this.state.img }>
                </Image>      

                <Button
                    title="이미지 변경"
                    onPress={this.clickBtn}
                >
                </Button>

                {/* 2. 네트워크 이미지 불러오기 */}
                {/* 객체의 속성(property)- uri를 사용 - 사이즈 지정이 필수임!!*/}
                <Image
                    style={{width:200, height:200, marginBottom:16}}
                    source={{uri:"https://post-phinf.pstatic.net/MjAxNzA3MjVfMjY4/MDAxNTAwOTY1MzgxNDgx.6xg0hoDv3TbaMOhE1JKGmSsY7wnc7_8FQGIh8BRG8okg.In4pIMARWM9zdJqa9T8TLeUeWZ90e5q280KdYggk41sg.JPEG/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C.jpg?type=w1200"} }>
                </Image>
                {/* 이미지 클릭 변경 이벤트 */}
                {/* 리액트 네이티브에서는 클릭되는 컴포넌트가 정해져 있음 - 이미지는 그중 하나가 아님 ㅜ */}
                {/* 대신, 뷰 그룹 중 터치가 가능한 Touchable을 갖다쓰면 됨(뒤에 달린 건 터치 느낌 처리) */}
                {/* 버튼 대신에도 Touchable을 더 많이 씀 - 버튼은 잘 사용 안함! */}
                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={this.clickBtn} style={{width:200, padding:4}}>
                <Image
                    style={{width:200, height:200}} 
                    source={this.state.img}>
                </Image>
                </TouchableNativeFeedback>
                
                <TouchableOpacity onPress={this.changeImg}>
                    <View style={{justifyContent:"center", alignItems:'center', borderWidth:3, borderColor:'black', borderRadius:16, width:220, height:250}}>
                        <Image source={this.state.images[this.state.imgnum]} style={{borderRadius:16, width:200, height:200}}></Image>
                        <Text style={{fontSize:20}}>Hello?</Text>
                    </View>
                </TouchableOpacity>

                <Image source={require('./images/moana01.jpg')} style={imgStyle}></Image>
                <Image source={require('./images/moana01.jpg')} style={imgStyle}></Image>
                <Image source={require('./images/moana01.jpg')} style={imgStyle}></Image>
                <Image source={require('./images/moana01.jpg')} style={imgStyle}></Image>
                <Image source={require('./images/moana01.jpg')} style={imgStyle}></Image>
            </ScrollView>
            </ImageBackground>
            </View>
        );
    }

    clickBtn=()=>{
        this.setState({img:require('./images/moana02.jpg')})
    }

    changeImg=()=>{
        let num=this.state.imgnum+1;
        if(num>=6) num=0;
        this.setState({imgnum:num})
    }
}

//이미지 스타일 객체
const imgStyle={
    width:350,
    height:500,    
    margin:16,
    borderRadius:10
}