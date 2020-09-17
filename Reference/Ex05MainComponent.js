import React, {Component} from 'react';
import {View, Image, TouchableHighlight, ScrollView, TouchableOpacity, Text, TouchableNativeFeedback, TouchableWithoutFeedback, ImageBackground} from 'react-native';

export default class MainComponent extends Component{

    //5)번 실습에 사용할 state 멤버변수(터치했을 때 이미지 순차적으로 변경)
    constructor(){
        super();

        this.state={
            imgNum: 0, //보여줄 이미지를 가진 배열의 인덱스번호
            imgArr: [
                require('./images/moana01.jpg'),
                require('./images/moana02.jpg'),
                require('./images/moana03.jpg'),
                require('./images/moana04.jpg'),
                require('./images/moana05.jpg'),
                // 네트워크 이미지를 사용할 수도 있음.
                {uri:'https://cdn.pixabay.com/photo/2019/12/22/17/13/snuggle-4713013_960_720.jpg'},
                {uri:'https://cdn.pixabay.com/photo/2019/12/01/20/34/christmas-4666370_960_720.jpg'},
            ],
        };
    }

    render(){

        return (
            //1. 그림이미지는 require()함수 이용 : 별도의 스타일을 주지 않으면 기본 원본사이즈
            <View style={ {flex:1} }>
                <Image source={ require('./images/moana01.jpg') } ></Image>
            </View>

            //2. 스타일을 통해 이미지의 사이즈 지정
            // <View style={ {flex:1} }>
            //     <Image 
            //         style= { {width:200, height:200} }
            //         source={ require('./images/moana02.jpg') } >
            //     </Image>
            // </View>

            //3. 네트워크 이미지 보여주기 : 네트워크이미지는 객체의 uri 속성을 통해 설정 [Google image검색 : pixabay]
            // 주의!! 네트워크 이미지는 반드시 width, height을 명시적으로 주어야함[둘다모두]. 안주면 화면에 표시되지 않음.
            // <View style={ {flex:1} }>
            //     <Image 
            //         style= { {width:200, height:200} }
            //         source={ {uri: 'https://cdn.pixabay.com/photo/2019/12/22/17/13/snuggle-4713013_960_720.jpg'} } >
            //     </Image>
            // </View>

            // 3-1. 버튼 클릭 할 때 이미지 변경하기 실습해보기!! Ex02ButtonEvent때 소개했음.



            

            //4. 이미지에 클릭이벤트 처리 : Image컴포넌트에 onPress속성을 통해 처리할 수 없음.
            // - android와 다르게 컴포넌트들에 이벤트를 주는 것이 아니라..클릭이벤트에 반응하는 TouchableHighlight컴포넌트로 감싸야 함.[import 필요]
            // - 터치할 때 터치효과 보여짐
            // <View style={ {flex:1} }>
            //     <TouchableHighlight onPress= { this.clickImage} style= { {width:208, padding:4} } >
            //         <Image
            //             style={ {width:200, height:250, resizeMode:'cover'} }
            //             source= { require('./images/moana03.jpg') } >                    
            //         </Image>
            //         {/* 이미지의 가로 사이즈를 화면에 맞추러면 스타일로 width:null, resizeMode:'contain'속성으로 지정해야함 */}
            //         {/* resizeMode속성에 따라 이미지의 Scale이 달라짐 [default : 'cover']*/}
            //     </TouchableHighlight>
            // </View>
            // Button이 아닌 다른 컴포넌트들도 터치 처리를 하고 싶다면 TouchableHighlight 컴포넌트 사용


            //4.2 TouchableHighlight의 효과 말고 TouchableOpacity이용하기
            // <View style={ {flex:1} }>
            //     <TouchableOpacity onPress= { this.clickImage} style= { {width:208, padding:4} } >
            //         <Image
            //             style={ {width:200, height:250, resizeMode:'cover'} }
            //             source= { require('./images/moana04.jpg') } >                    
            //         </Image>
            //     </TouchableOpacity>
            // </View>

            
            //4.3 안드로이드의 버튼을 클릭했을 때의 효과 : TouchableNativeFeedback [only android]
            // <View style={ {flex:1, justifyContent:'center', alignItems:'center'} }>
            //     <TouchableNativeFeedback
            //         onPress={this.clickImage}
            //         background={TouchableNativeFeedback.SelectableBackground()}>
            //         <View style={{width: 310, height: 200, backgroundColor: 'lightblue', borderRadius:8, justifyContent:"center", alignItems:'center'}}>
            //             <Text style={ {color:'white', fontWeight:'bold', marginBottom:16} }>Button</Text>
            //             <Image style={ {width:300, height:150, resizeMode:'cover'} } source= { require('./images/moana05.jpg') }></Image>
            //         </View>                    
            //     </TouchableNativeFeedback>
            // </View> 
            // ** <TouchableWithoutFeedback>컴포넌트도 있음.


            // 5. 터치할 때 이미지 변경하기 실습해보기!! Ex02ButtonEvent때 소개했음.
            //  [ 이미지의 경로를 state객체에 넣어서 보여주어야 함. 그래야 변경했을 때 자동 rendering됨 ]
            // <View style={ {flex:1, justifyContent:'center', alignItems:'center'} }>
            //     <TouchableWithoutFeedback onPress={ this.changeImage }>
            //         <Image style={ {width:350, height:250} } source={ this.state.imgArr[this.state.imgNum] }></Image>
            //     </TouchableWithoutFeedback>                
            // </View>


            //6. 이미지가 많으면 스크롤이 필요함. 스크롤 뷰 알아보기
            // <ScrollView>
            //     <Image source={ require('./images/moana01.jpg') } style={ imgStyle }></Image>
            //     <Image source={ require('./images/moana02.jpg') } style={ imgStyle }></Image>
            //     <Image source={ require('./images/moana03.jpg') } style={ imgStyle }></Image>
            //     <Image source={ require('./images/moana04.jpg') } style={ imgStyle }></Image>
            //     <Image source={ require('./images/moana05.jpg') } style={ imgStyle }></Image>                
            // </ScrollView>


            //7. 배경이미지적용하기 - css에서의 background-image
            //   style에서는 배경이미지가 없음. ImageBackground컴포넌트를 사용해야함.
            // <View>
            //     <ImageBackground source= { require('./images/moana01.jpg') } style={ {width:'100%', height:'100%'} }>
            //         <Text style={ {color:'white', fontSize:32, fontWeight:'bold', margin:16} }>Image</Text>
            //         <Text style={ {color:'yellow', fontSize:24, margin:8} }>This is background image test.</Text>
            //     </ImageBackground>
            // </View>
        );

    }//render method..

    //4)실습예제 할때
    clickImage= ()=>{
        // alert("click image!");
    }

    //5)실습예제 할때
    changeImage= ()=>{
        let num= this.state.imgNum;
        num++;
        if(num>6) num=0;
        this.setState({imgNum: num});
    }

}//MainComponet class..

//6번 실습에 사용하는 스타일
const imgStyle= { height:500, width:350, margin:16, alignSelf:'center', borderRadius:8, }