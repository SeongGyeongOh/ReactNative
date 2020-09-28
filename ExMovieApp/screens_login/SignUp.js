import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InputComponent from '../components/InputComponent';
import TabComponent from '../components/TabComponent';

export default class SignUp extends Component{
    state={
        tabs:['전화번호','이메일'],
        tabIndex: 0, //현재 선택된 탭의 번호를 강제로 부여
    }
    render(){
        return (
            <View style={styles.root}>
                {/* 1. 회원가입 컨텐츠 영역 */}
                <View style={styles.contents}>

                    {/* 1-1 전화번호와 이메일 입력 가능한 탭 */}
                    <View style={styles.tabContainer}>
                        {/* 탭이 여러개일 수도 있음!! */}
                        {/* 탭이 바뀌면서 화면도 바뀌니까.... state 변수를 필요로 함 */}
                        {
                            this.state.tabs.map(( value, index )=>{
                                return (
                                    <TabComponent 
                                        onPress={()=>{this.setTabIndex(index)}} 
                                        label={value} key={"Tab"+index} 
                                        selected={this.state.tabIndex==index}>
                                    </TabComponent>
                                );
                            })
                        }
                    </View>

                    {/* 1-2  */}
                    <InputComponent 
                        placeholder={this.state.tabs[this.state.tabIndex]}>
                    </InputComponent>

                    {
                        // XML 안의 자바스크립트에서 if문은 사용 불가.. 
                        // if문의 역할을 하는 && 연산자
                        // 앞의 조건이 true면 뒤의 값이 출력된다!!!!!(뒤의 객체가 참으로 인지되기 때문에!)
                        // this.state.tabIndex===1 && <Text>aaa</Text>
                        this.state.tabIndex===1 && <InputComponent placeholder="비밀번호" secureTextEntry={true}></InputComponent>
                    }

                    {/* 전화번호일때는 다음버튼 */}
                    {
                        this.state.tabIndex===0 && <View style={{width:"100%", margin:16}}><Button title="다음" onPress={()=>this.setTabIndex(1)}></Button></View>
                    }

                    {/* 이메일일때는 완료버튼 */}
                    {/* 원래는 여기에서 사용자 정보를 서버에 업로드 해야함!!!!! */}
                    {
                        this.state.tabIndex===1 && <View style={{width:"100%", margin:16}}><Button title="완료" onPress={()=>this.props.navigation.goBack()}></Button></View>
                    }

                    {/* 전화번호 탭일때 안내메세지 */}
                    {
                        this.state.tabIndex===0 && <Text style={styles.telMessage}>Movie App의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든 취소할 수 있습니다.</Text>
                    }
                </View>

                {/* 2. Footer 영역 */}
                <View style={styles.footer}>
                    <Text style={styles.footermsg}>이미 계정이 있으신가요?  <Text style={styles.goback} onPress={()=>this.props.navigation.goBack()}>로그인</Text></Text>
                </View>
            </View>
        );
    }

    // Tab번호 변경 메소드
    setTabIndex=(index)=>{
        this.setState({tabIndex:index});
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:"center",
        backgroundColor:'#FEFFFF'
    },

    contents:{
        flex:1,
        // width:'100%',
        alignItems:'center',
        padding:32
    },

    footer:{
         borderTopWidth:0.5,
         borderTopColor:'#929292',
         padding:8
    },
    footermsg:{
        color:'#929292',
        textAlign:'center'
    },
    goback:{
        color:'#3796FE'
    },
    tabContainer:{
        flexDirection:"row",
        marginBottom:16
    },
    telMessage:{
        color:"#929292",
        fontSize:12,
        textAlign:"center"
    }
})