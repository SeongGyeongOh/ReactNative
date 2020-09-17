import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// 3.실습시에 작성[VScode에서 자동완성될 수 있음]
import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';
import MyComponent5 from './MyComponent5';

export default class MainComponent extends Component{

    render(){

        //6. 실습에서 사용할 render메소드의 지역변수
        let titles= ["first", "second", "thrid"];
        //먼저 titles적용 후에 추가로..색상도...
        let colors= ["indigo", "orange", "green"];

        return (

            //1. 나만의 Compoent를 만들어서 사용하기.. 
            <View style={ style.container }>
                <Text>Hello world</Text>

                {/* MyComponent 사용 */}
                <MyComponent></MyComponent>
                <MyComponent></MyComponent>
            </View>
            // 이를 이용하여 header, body, nav등을 영역별로 나누어 작성할 수 있음.

            //2. 가만보면 글씨가 똑같음. "Hello sam!". 
            // MyComponent를 사용할 때 전달해 줄 수 있는 방법이 있음. props [propery:속성]
            // <View style={ style.container }>
            //     <Text>Hello world</Text>

            //     {/* MyComponent2 사용 */}
            //     {/* 컴포넌트를 사용할 때 속성(property)으로 값을 전달 : 속성명은 임의로 지정 */}
            //     <MyComponent2 name='sam'></MyComponent2>
            //     <MyComponent2 name='robin'></MyComponent2>
            //     <MyComponent2 name='hong'></MyComponent2>
            // </View>

            //3. 커스텀 컴포넌트는 별도의 .js에 만들어서 사용할 수 있음.
            //   MyComponent3.js만들어 보기.. export와 import에 대한 소개.
            // <View style={ style.container }>
            //     <Text>Hello world</Text>

            //     {/* 다른 문서인 MyComponent3.js의 컴포넌트 사용하기 */}
            //     {/* 다른 JS문서의 클래스를 사용하려면 import해야함 [자동완성기능을 쓰면 import문이 자동으로 작성됨]*/}
            //     {/* 당연히 속성을 전달할 수 있음. */}
            //     {/* 주의! Button의 title은 반드시 " "로 전달해야함 [' '으로 지정하면 안됨] -버전업 되면서 에러없음 */}                
            //     <MyComponent3 title="first"></MyComponent3>
            //     <MyComponent3 title="second"></MyComponent3>                
            // </View>

            //3.1 함수를 커스텀컴포넌트에 전달하기
            // <View style={ style.container }>
            //     <Text>Hello world</Text>

            //     {/* onPress속성에 함수객체 전달 */}
            //     <MyComponent3 onPress={ this.clickBtn } title="first"></MyComponent3>
            //     <MyComponent3 onPress={ this.clickBtn } title="second"></MyComponent3>       
            // </View>

            //3.2 혹시 MyComponent3에서 사용하는 속성을 모두 전달하지 않는다면?
            // <View style={ style.container }>
            //     <Text>Hello world</Text>

            //     <MyComponent3 onPress={ this.clickBtn } title="first"></MyComponent3>
            //     {/* onPress속성으로 함수를 전달하지 않으면 단지 클릭했을 때 아무 반응을 안할 뿐임 */}
            //     <MyComponent3 title="second"></MyComponent3>
            //     {/* 하지만 title속성은 필수로 문자열을 전달해야 하므로 title속성이 전달되지 않으면 에러남 */}
            //     <MyComponent3></MyComponent3>
            // </View>

            //4. 이럴때 props를 전달받지 못했을 때의 기본값(default props)가 필요할 수 있음.
            //  MyComponent4.js를 만들어서 defaultProps 만들기
            // <View style={ style.container }>
            //     <Text>Hello world</Text>

            //     {/* onPress속성에 함수객체 전달 */}
            //     <MyComponent4 title="first" color="indigo" onPress={ this.clickBtn }></MyComponent4>
            //     <MyComponent4 title="second" color="blue" onPress={ this.clickBtn }></MyComponent4>
            //     {/* 전달 안하기 */}
            //     <MyComponent4></MyComponent4>

            //     {/* color만 전달 안하기 */}
            //     <MyComponent4 title='third' onPress={ this.clickBtn }></MyComponent4>
            // </View>

            // 5. 속성이 여러개일때 한번에 줄수 있는가? c와 js에 있는 파라미터의 ... argument 기법 사용
            // <View style= { style.container }>
            //     <MyComponent5 title="first" color="green" onPress={ this.clickBtn } ></MyComponent5>
            //     <MyComponent5 title="second" color="orange" ></MyComponent5>
            //     <MyComponent5 title="third" onPress={ this.clickBtn } ></MyComponent5>
            // </View>

            
            //## 추가 1.서로 다른 컴포넌트들끼리 제어하고자 할때는 부모컨테이너를 통해서 서로 제어해아함. : 수업할 수 있다면 소개 ## //
            //## state와 props 의 상호간의 연결에 대한 연습 ########################################################### //

            //## 추가 2. 새로운 Component를 만들때 stateless 컴포넌트도 있음 : 지금 수업하기 보다는 나중에 수업하는 것이 혼동스럽지 않을 듯 함 ########### //



            // 6. title의 문자열 값을 배열데이터로 전달해보기[ render()메소드 안에 지역변수로 만들어 보기 ]
            // <View style= { style.container }>
            //     {/* js의 지역변수이므로 {}안에 this키워드 없이 배열요소 사용 */}
            //     <MyComponent5 title={ titles[0] }></MyComponent5>
            //     <MyComponent5 title={ titles[1] }></MyComponent5>
            //     <MyComponent5 title={ titles[2] }></MyComponent5>

            //     {/* 먼저 위의 title만 실습 한 후에 추가로 colors지역변수 추가 후 적용 */}
            //     <MyComponent5 title={ titles[0] } color= { colors[0] } ></MyComponent5>
            //     <MyComponent5 title={ titles[1] } color= { colors[1] } ></MyComponent5>
            //     <MyComponent5 title={ titles[2] } color= { colors[2] } ></MyComponent5>
            // </View>
            // 이렇게 Custom Component를 만들어서 사용할 때 전달하는 값들(ex. name, title, color etc...)을
            // 대량의 데이터로 관리(배열)하여 리스트뷰처럼 사용할 수 있겠죠?
            
            // Ex07ListView1프로젝트를 만들어서 위 기법을 응용한 기본 리스트 뷰의 형태 만들어 보기!!

        );

        

    }//render method..

    //3.1실습에서 사용하는 멤버함수[메소드]..화살표함수
    clickBtn=()=>{
        alert("click btn"); 
    }

}//MainComponent class..


//1. 실습 진행할 때
//Custom Component만들기 [ android custom view ]
class MyComponent extends Component{
    render(){
        return (
            <View style={ {margin:16} }>
                <Text style={ {marginBottom:8} }>Hello sam!</Text>
                <Button title='click me'></Button>
            </View>
        );
    }
}//MyComponent class...


//2. 실습 진행할 때
//Custom Component만들기 [ android custom view ]
class MyComponent2 extends Component{
    render(){
        return (
            <View style={ {margin:16} }>
                {/* MyComponent2컴포넌트를 사용할 때 설정한 속성(프로퍼티)중 name속성으로 지정한 값 사용하기 */}
                <Text style={ {marginBottom:8} }>Hello {this.props.name} !</Text>
                <Button title='click me'></Button>
            </View>
        );
    }
}//MyComponent class...


//스타일 객체
const style= StyleSheet.create({
    container:{
        flex:1,
    },

});