import React, {Component} from 'react';
import {Text, Button, TextInput, View, StyleSheet} from 'react-native';

class MainComponent extends Component{

    //  Text Component가 보여줄 글씨를 가진 변수
    state={
        msg:"hello"
    }

    // 버튼 클릭 이벤트를 위해 화면 갱신에 영향이 없는 변수 생성
    data="";

    render(){
        return (
        <View style={styles.rootstyle}>
            <TextInput multiline={true} numberOfLines={10} style={styles.textInput} onChangeText={this.btnchange} onSubmitEditing={this.submitText}></TextInput>
            <View style={ {marginTop: 10, marginBottom:10} }>
                <Button onPress={this.clickBtn} title="click"></Button>
            </View>
            <Text style={styles.text}>{this.state.msg}</Text>
        </View>);
    }//render    


    //onTextChange - TextInput의 글씨가 변경될 때 마다 발동하는 메소드
    // 자동으로 파라미터 하나가 전달되어 있다-TextInput에 적힌 변경된 값
    // !!! 함수를 화살표 함수로 쓰는 것 꼭 기억해라!!!!
    //(만약 화살표함수로 연결이 안되있다면, 함수를 쓴 코드에 .bind(this)를 추가해서 해결할 수는 있다...하지만 하지 말 것!)
    changeText=(value)=>{
        // Alert.alert(value);
        // this.state.data=value; //state값을 대입 연산자로 하면 자동 갱신 안됨...state값 변경은 setState() 함수를 사용할 것!
        this.setState({msg:value});
    }

    //onSubmitEditing - 작성을 완료하고 제출하면 발동하는 메소드
    //여기에 전달되는 파라미터가 아까는 value였다면 이번에는 값이 아니다!!! 
    // 파라미터로 전달되는 것 : 완료 이벤트 객체
    submitText=(submitEvent)=>{
        // Alert.alert(submitEvent.nativeEvent.text);
        let value=submitEvent.nativeEvent.text;
        this.setState({msg:value});
    }

    //화살표 함수 축약형!! 눈에 익혀둘 것
    btnchange= value=> this.data=value;
    clickBtn=()=> this.setState({msg:this.data}); //더 줄여쓴거 <button>을 읽어봐라!!

}

const styles= StyleSheet.create({
    rootstyle:{
        backgroundColor:'#eeeeee',
        padding:16,
        flex:1
    },

    //TextInput은 기본적으로 아무 스타일이 없음, 고로 반드시 스타일 작업을 해줘야함!
    // TextInput은 기본적으로 한 줄 입력!
    textInput:{
        borderWidth:2,
        borderColor:'blue',
        backgroundColor:'white',
        borderRadius:4,
        paddingLeft:16,
        paddingRight:16,
        marginBottom:8        
    },
    text:{
        paddingLeft:8,
        paddingRight:8,
        fontWeight:'bold',
        fontSize:20
    }

});

export default MainComponent;
