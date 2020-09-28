import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Main extends Component{
    state={data:"hello"};
    render(){
        return (
            <View style={{padding:16}}>
                <Text>Main 클래스의 state data: {this.state.data }</Text>
                {/* 1, 자식 컴포넌트에게 데이터 전달 */}
                {/* <First data={this.state.data}></First> */}


                {/* 1.5, 자식 컴포넌트에 데이터와 메소드 전달 */}
                <First data={this.state.data} changeData={this.changeData}></First>
            </View>
        );
    }

    changeData=(data)=>{
        this.setState({data:data});
    }
}

// 1. 첫 번째 자식 Custom 컴포넌트
class First extends Component{
    render(){
        return (
            // 1.1 부모(Main)로부터 property로 전달받은 data 출력
            // <View style={{padding: 16, backgroundColor:'lightgreen'}}>
            //     <Text>Main 클래스의 state Data: {this.props.data}</Text>
            // </View>

            // 1.2)부모로부터 property로 전달받은 data를 또 다시 자식에게 전달
            // <View style={{padding: 16, backgroundColor:'lightgreen'}}>
            //     <Text>Main 클래스로부터 전달받은 props Data: {this.props.data}</Text>
            //     {/* Second에 부모로부터 받은 data와 메소드를 다시 전달 */}
            //     <Second data={this.props.data}></Second>
            // </View>

            // 1.5 실습 - 부모로부터 전달받은 data를 다시 자식에게 전달
            <View style={{padding: 16, backgroundColor:'lightgreen'}}>
                <Text>Main 클래스로부터 전달받은 props Data: {this.props.data}</Text>
                {/* Second에 부모로부터 받은 data와 메소드를 다시 전달 */}
                <Second data={this.props.data} changeData={this.props.changeData}></Second>
            </View>
        );
    }
}

// 1.2) First의 자식(Main의 손자) 컴포넌트
class Second extends Component{
    // 1.4)에서 사용
    state={data: this.props.data}

    render(){
        return (
            // <View style={{padding: 16, backgroundColor:'blue', marginTop:16}}>
            //     <Text style={{color:'white'}}>First로부터 전달받은 데이터 : {this.props.data}</Text>
            // </View>

            // 1.3) Second에서 데이터를 변경하는 이벤트 처리 - props를 직접 변경해보기
            // <View style={{padding: 16, backgroundColor:'blue', marginTop:16}}>
            //     <Text style={{color:'white'}}>First로부터 전달받은 데이터 : {this.props.data}</Text>
            //     {/* 전달받은 데이터를 변경하는 버튼 */}
            //     <Button title="change Data" onPress={this.clickBtn}></Button>
            // </View>

            // 1.4 Second에서 데이터를 변경하는 이벤트 처리 - props를 state로 옮기고 변경해보기
            // <View style={{padding: 16, backgroundColor:'blue', marginTop:16}}>
            //     {/* Text가 보여주는 값을 내 state로 변경 */}
            //     <Text style={{color:'white'}}>First로부터 전달받은 데이터 : {this.state.data}</Text>
            //     {/* 전달받은 데이터를 변경하는 버튼 */}
            //     <Button title="change Data" onPress={this.clickBtn2}></Button>
            // </View>

            // 위 방법(1.4)로 Second의 텍스트 값은 바뀌지만, 다른 컴포넌트 - First, Main의 값은 변화가 없다!
            // 마치.. 글작성 컴포넌트에서 글을 작성했는데 글보기 컴포넌트에서는 변화가 없는것과 같음
            // 그러므로, Second에서 본인값만 변경하는 것이 아니라 부모인 First와 Main의 data를 변경해야함.. but, RN에서 자식컴포넌트가 부모컴포넌트에 데이터를 전달하는 방법이 없음
            // --> 그래서 부모의 데이터를 변경할 수 이쓴 메소드를 부모로부터 전달받아와서 변경하도록 해야만 함!

            // 1.5
            <View style={{padding: 16, backgroundColor:'blue', marginTop:16}}>
                {/* Text가 보여주는 값을 내 state로 변경 */}
                <Text style={{color:'white'}}>First로부터 전달받은 데이터 : {this.state.data}</Text>

                {/* 전달받은 데이터를 변경하는 버튼과 이벤트 처리에 전달받은 changeData 속성의 함수를 직접 화살표함수를 써서 호출 */}
                <View style={{marginTop:8}}>
                    <Button title="change Data" onPress={()=>{this.props.changeData('Second로부터 전달되는 파라미터!!')}}></Button>
                </View>
            </View>

            // 위 방법으로 부모 Main의 state를 변경하면 자식 First의 props에 변화가 생기고, state 변경처럼 자동 갱신되며 연쇄적으로 Second의 props도 변경되어 또 Second도 갱신되는 매커니즘으로 
            // 3개의 컴포넌트가 보여주는 모든 data가 동시에 변경됨....(내 코드에 에러있다 찾아라). 이렇게 자식의 데이터는 부모로 전달하지 못하고 부모의 값이 자식에게 전달되면서 변경되도록 하여 언제나 데이터가 부모로부터 자식으로 변경되도록 한 기법을
            // [단방향 데이터 흐름] 이라고 부른다

            // 데이터의 원본위치가 정확하여 데이터 관리가 용이해보이고 자식으로부터의 데이터 전달이 없으므로 전체 데이터 이동에 대해 상대적으로 수월하게 이해할 수 있어서 장점이 있으나
            // 부모의 state 변수명을 수정하면 ㄱ로 인해 자식-손자-증손자...까지 모두 변경해야 하는 상황이 생김, 게다가 어디에서 값이 변경되어 모든 컴포넌트의 데이터가 변경되었는지 파악하기가 어렵다

            // --> 때문에 페이스북에서 flux 패턴을 고안하게 됨
            // flux 패턴은 모두 사용하는 데이터를 전역변수 저장소(Store라고 부름)에 일괄 보관하여 어느 컴포넌트든 접근해서 사용할 수 있도록 하는 데이터 Architecture 기술임
            // 이를 알아보기 위해 우선 React에 이런 목적을 위해 만든 Context 라는 클래스에 대해 알아보자!!
        );
    }

    // 1.3
    clickBtn=()=>{
        // 에러!! props는 상수여서 값 변경이 불가능함
        // this.props.data="Nice";

        // 그렇다면 어떻게 전달받은 this.props를 변경할까?
        // 1. 전달받은 this.props.data를 이 Second 클래스의 state에 저장하고, Text에서 state값을 보여주도록.... -> 1.4 
    }

    // 1.4 -props를 직젖ㅂ 건드리지 말고, 그것을 보여주는 state값을 변경
    clickBtn2=()=>{
        this.setState({data:"Nice"});
    }

}