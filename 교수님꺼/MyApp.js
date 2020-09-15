//리액트 라이브러리 사용/ 그중에서 Component 클래스를 임포트하기
import React, {Component} from 'react';
//리액트 네이티비 라이브러리의 클래스들 import
import {Text, View, Button, Image, StyleSheet} from 'react-native';

//리액트 네이티브에서는 Component를 상속받은 클래스들이 화면에 보여질 수 있음.(마치 java의 swing처럼) - 이 문서 마지막에 있는 export default MyApp; 구문 잊지 말것!!
class MyApp extends Component{    

    //리액트의 Component클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드( onDraw같은 메소드 )    
    //이 메소드안에서 JSX(Javascript XML)언어로 뷰를 설계하고 이를 return해 주면 됨.
    render(){

        //4)예제 실습할때 
        // 변수 선언 [ render()메소드 안에서 인식이 가능한 지역변수 ]
        let name="SAM";
        let btnTitle="click me";// 버튼에 보여질 글씨
        
        //return <Text>Hello world!</Text>; //<-한줄로 작성하여 리턴할때는 ()없어도 됨.
        //여러줄로 코드를 쓸때는 ()사용.
        return (
            //1) Text클래스를 사용하려면 위에 import해야 함.(React Native라이브러리의 클래스)                     
            //<Text>Hello world!</Text>

            //2) ERROR : return ()안에 2개 이상의 Component를 리턴할 수 없음              
            // <Text>Nice world</Text>

            //3) 2개이상 리턴하려면 ViewGrop의 역할을 수행하는 Component가 있어야함.(웹에서는 <div>같은 역할)
            //안드로이드와 다르게 Layout을 사용하지 않고 그냥 View컴포넌트를 사용함
            //View 컴포넌트 클래스 import해야함, 앞으로 사용할 모든 Component들도 사용하려면 import
            // <View>
            //     <Text>Hello world.</Text>
            //     <Text>Nice to meet you.</Text>
            //     <Button title="button"></Button>
            // </View>

            
            //4) JSX언어의 특징은 <>태그문들 중간에 Javascript문법의 변수사용이 가능하다는 것이다.
            //속성(property)값도 JS의 변수로 지정 가능
            // <View>
            //     <Text>Hello {name} 님</Text>
            //     <Text>Nice to meet you.</Text>
            //     <Button title={ btnTitle }></Button>
            // </View>


            //5) 화면에 보이기는 하지만 전혀 스타일이 없어서 안이쁨.
            //스타일 속성(property)를 통해 꾸미기 - 속성 적용방법은 CSS와 다소 다름.
            //속성의 값을 javascript객체로 만들어서 설정해 주어야 함.[ 위에서 버튼 title속성 지정하듯이 ]
            //속성값은 전연변수 위치에 선언하면 편하게 사용 가능
            //1. Text스타일링 //2. View스타일링   //3. 기본글씨 스타일링 
            //##주의!!! 4.Button은 style속성이 없음. 안됨!!! 대신 색상값지정 속성이 이 있음.
            //            기본 버튼모양이 싫다면 TouchableOpacity컴포넌트를 사용하길 권장.         
            // <View style={ rootContainerSytle }>
            //     <Text style={ textStyle }>Hello world.</Text>
            //     <Text style={ plainTextStyle }>Nice to meet you.</Text>

            //     <Button title={ btnTitle }></Button>
            //     <Button title="button" color="#841584"></Button>

            //     {/* 굳이 마진을 주고 싶다면... */}
            //     <View style={ {marginTop:10, width:150}}>
            //         <Button title="button" color="orange"></Button>
            //     </View>                
            // </View>


            //6) StyleSheet클래스를 이용하여 한번에 스타일객체들 작성하고 사용하기 - Hello 샘플예제처럼 //많이 사용됨            
            // <View style={ style.rootContainer }>
            //     <Text style={ style.mainText }>Hello world.</Text>
            //     <Text style={ style.plainText }>Nice to meet you.</Text>

            //     <Button title={ btnTitle }></Button>
            //     <Button title="button" color="#841584"></Button>
                
            //     <View style={ {marginTop:10, width:150}}>
            //         <Button title="button" color="orange"></Button>
            //     </View>                
            // </View>


            //7) 이미지 컴포넌트 사용하기 [Image컴포넌트 클래스 import는 당연히 해야함]
            //이미지의 source속성에 값을 넣는 것도 js언어의 require()함수 사용해야 해서 {}로 값 지정
            // ## 주의. 이미지파일명에 0이 있을 때 한번에 드래그하여 복사하여 폴더에 넣었을때 파일명을 인식하지 못하여 에러가 나는 경우가 있음. rename을 통해 해결..
            <View style={ rootContainerSytle }>
                <Text style={ textStyle }>Hello world.</Text>
                <Text style={ plainTextStyle }>Nice to meet you.</Text>

                <Button title={ btnTitle }></Button>
                <Button title="button" color="#841584"></Button>
                <View style={ {marginTop:10, width:150}}>
                    <Button title="button" color="orange"></Button>
                </View>

                {/* <Image source={require('./images/moana01.jpg')}></Image> */}
                {/* 세로사이즈를 남은 공간 다 차지하도록 flex: 1 지정 */}
                <Image source={require('./images/moana01.jpg')} style={{margin:4, flex:1, width:null, resizeMode:'cover'}}></Image>
                {/* 이미지의 가로 사이즈를 화면에 맞추러면 스타일로 width:null, resizeMode:'contain'속성으로 지정해야함 */}
                {/* resizeMode속성에 따라 이미지의 Scale이 달라짐 [default : 'cover']*/}
            </View>
        )

    }
    
}


//MyApp클래스 밖에 변수를 선언하면 전역변수[물론, 이 MyApp.js문서 안에서만]
//5) 스타일 객체들
//1. 텍스트의 스타일작업(css와 비슷하지만 약간 다름)- 스타일값을 가진 객체 선언
const textStyle={
    color: '#FF0000',
    fontSize: 20,//기본단위는 dp
    fontWeight: 'bold',
    margin: 16,
};

//2. 전체 View의 스타일작업
const rootContainerSytle={    
    backgroundColor: '#AAFFCC',
    //View의 세로 사이즈가 기본적으로 wrap_content임
    //height: 200, //화면사이즈가 제각각 이므로 전체화면이 되게 하려면 상대적인 크기지정이 필요..
    // 전체 화면 만하게...하기위해..
    //세로(기본이 세로) 전체에 대한 사이즈 비율 1 , 안드로이드의 layout_weight속성과 유사함      
    flex: 1,
    padding:16,
    //alignItems: 'center',// View안에 있는 컴포넌트들의 위치정렬/ 컴포넌트들의 사이즈가 wrap으로 바뀜--- flex의 기본 방향이 세로이므로 가로배치(교차축)에 대한 정렬

};

//3. 중간 글씨 스타일
const plainTextStyle={
    margin:8,
    color:'#333333',
}

//4. 버튼의 스타일링은 안됨!!!!!!! Button컴포넌트가 style속성을 가지고 있지 않음.
const btnStyle={
    margin:80,
    color:'#FF0000',
}



//6) 스타일이 여러개일때 위 처럼 각가 const변수를 만들면 코드의 가독성이 떨어지므로..
//한번에 스타일객체들을 만드는 방법을 많이 사용함. [ StyleSheet클래스 import 해야함 ]
const style= StyleSheet.create({
    rootContainer: {
        backgroundColor: '#AAFFCC',
        flex: 1,
        padding:16,
    },
    mainText:{        
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16,
    },
    plainText:{
        margin:8,
        color:'#333333',
    },
});



//MyApp클래스를 다른 문서에서 사용하려면 export해주어야 함.[index.js에서 처음 실행되는 Component로 등록하고자 함]
export default MyApp;