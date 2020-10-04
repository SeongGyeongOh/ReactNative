import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Second2 from './Second2';
import Second2_2 from './Second2_2';

// !!!! Context : 앱 전체에서 참조할 수 있는 전역변수를 만들 수 있는 React의 API!!!!
// Context 객체(React클래스의 메소드로 만들 수 있다)
export const MyContext=React.createContext();

// 1) 실습을 위해 Ex20과 똑같은 예제 만들어보기 [Main - First- Secend] - 형태만
export default class Main extends Component{
    state={data: "hello"}

    render(){
        return (
            // // 1. 실습 - 이전 예제와 같은 구조의 모양을 생성
            // <View style={{flex:1, padding:16}}>
            //     <Text>Main의 Data: {this.state.data}</Text>
            // </View>

            // 2)
            // 자식에게 데이터를 전달하지 않고 전달할 값을 제공하는 제공자 컴포넌트(Provider)로 자식들을 감싸기
            // 먼저, 클래스 밖에 Context클래스를 만들자 - 전역변수 위치
            // 데이터를 제공할 모든 자식 - 자손 컴포넌트를 감싸서 가장 root로 Context의 제공자 컴포넌트 Provider 생성
            // <MyContext.Provider>
            //     <View style={{flex:1, padding:16}}>
            //         <Text>Main의 Data:{this.state.data}</Text>
            //         {/* 자식 컴포넌트 - 데이터 전달 없음 */}
            //         <First></First>
            //     </View>
            // </MyContext.Provider>

            // 3)Provider로 감쌌을 때 에러가 나지 않으면 잘 된 것. 이제 Provider에서 자식들에게 제공하고 싶은 데이터를 value 속성으로 지정
            <MyContext.Provider
                // 자식 컴포넌트들에게 제공할 멤버들
                value={
                    {
                        data:this.state.data, //데이터
                        changeData:this.changeData, //메소드
                    }
                }>
                <View style={{flex:1, padding:16}}>
                    <Text>Main의 Data : {this.state.data}</Text>
                    {/* 자식 컴포넌트 - 데이터 전달 없음 */}
                    <First></First>
                </View>

            </MyContext.Provider>
        );
    }
    changeData=(data)=>{
        // ==this.setState({data:data});
        this.setState({data});
    }
}


class First extends Component{
    render(){
        return(
            // <View style={{marginVertical:16, padding:16, backgroundColor:'lightgreen'}}>
            //     <Text>First 컴포넌트 : </Text>
            //     {/* 손자 컴포넌트 - 데이터 전달 없음 */}
            //     <Second></Second>
            // </View>

            // 3) 실습 - Context의 Provider로부터 제공된 value를 사용하고 싶다면(반드시 사용해야 하는 것은 아님!!)
            // 반드시 Context의 Consumer(소비자) 컼포넌트를 만들고 그 Consumer 컴포넌ㅌ으 안에 콜백함수를 만들어 이 Consumer 컴포넌트가 보여줄 컴포넌트를 return 해줘야 한다
            // 이 때 Consumer 컴포넌트 안에 만든 콜백함수의 파라미터로 Provider의 value 값을 받을 수 있음
            // <MyContext.Consumer>
            //     {/* 이 Consumer 컴포넌트가 보여줄 뷰를 return 하는 콜백 화살표함수 작성 - JS 문법 필요 */}
            //     {
            //         (value)=>{ //이 콜백함수의 파라미터로 Provider의 value 값이 전달됨
            //             return(
            //                 <View style={{marginVertical:16, padding:16, backgroundColor:'lightgreen'}}>
            //                     {/* Provider에서 제공한 value 사용해보기 */}
            //                     <Text>First 컴포넌트 : {value.data}</Text>

            //                     {/* 손자 컴포넌트 - 데이터 전달 없음 */}
            //                     <Second></Second>
            //                 </View>
                            
            //             );

            //         }
            //     }
            // </MyContext.Consumer>

            // 5)별도의 .js 손자2 컴포넌트를 만들고 Context 사용해보기(Second2.js)
            <MyContext.Consumer>
                {/* 이 Consumer 컴포넌트가 보여줄 뷰를 return 하는 콜백 화살표 함수 작성 -  JS 문법 필요 */}
                {
                    (value)=>{
                        return(
                            <View style={{marginVertical:16, padding:16, backgroundColor:'grey'}}>
                                {/* Provider에서 제공한 value 사용해 보기 */}
                                <Text>First 컴포넌트 : {value.data}</Text>

                                {/* 손자 컴포넌트 - 데이터 전달 없음 */}
                                <Second></Second>

                                {/* 손자 2 컴포넌트 - 데이터 전달 없음 : import를 잊지 말자!! */}
                                <Second2_2></Second2_2>
                            </View>
                        )
                    }
                }
            </MyContext.Consumer>
        );
    }
}

class Second extends Component{
    render(){
        return( 
            // <View style={{marginVertical:16, padding:16, backgroundColor:'blue'}}>
            //     <Text>Second 컴포넌트 : </Text>
            //     {/* 손자 컴포넌트 - 데이터 전달 없음 */}
            //     <Second></Second>
            // </View>

            // 3)
            <MyContext.Consumer>
                {
                    // {}와 return 키워드 생략가능
                    (value)=>(
                        <View style={{marginVertical:16, padding:16, backgroundColor:'blue'}}>
                            <Text style={{color:'white'}}>Second 컴포넌트 : {value.data}</Text>
                            
                            
                            {/* // 4) 버튼 눌러 데이터 변경 */}
                            <View style={{marginTop:16}}>
                                <Button title="changeData" color="orange" onPress={()=>value.changeData('Nice')}></Button>
                            </View>
                        </View>

                        
                    )
                }
            </MyContext.Consumer>
        );
    }
}