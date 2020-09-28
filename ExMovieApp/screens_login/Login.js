import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InputComponent from '../components/InputComponent';

export default class Login extends Component{
    render(){
        return (
            <View style={styles.root}>
                {/* 1. 로그인 컨텐츠 화면 */}
                <View style={styles.content}>
                    {/* 1-1 로고 글씨 */}
                    <Text style={styles.logo}>MOVIE APP</Text>

                    {/* 1-2 커스텀 TextInput - 앱에 사용될 동일한 스타일의 컴포넌트 재사용을 위해...*/}
                    <InputComponent placeholder="이메일" secureTextEntry={false}></InputComponent>
                    <InputComponent placeholder="비밀번호" secureTextEntry={true}></InputComponent>

                    {/* 1-3 비밀번호 재설정 버튼 <Text>의 onPress 가능!! */}
                    <Text style={styles.resetPass} onPress={()=>this.props.navigation.navigate('ResetPassword')}>비밀번호 재설정</Text>

                    {/* 1-4 로그인 버튼 */}
                    <View style={{width:"100%", marginBottom:24}}>
                        <Button title="로그인" color="#3796FE"></Button>
                    </View>

                    {/* 1-5 회원가입 안내글 */}
                    <Text style={styles.signUp}>회원이 아니신가요?   <Text style={styles.signUpLink} onPress={()=>this.props.navigation.navigate('SignUp')}>가입하기</Text>
                    </Text>
                </View>


                {/* 2. footer 화면 */}
                <View style={styles.footer}>
                    <Text style={styles.footerCopyright}>Movie App by Gyeong</Text>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        // padding:16,
        // justifyContent:"center",
        // alignItems:'center',
        backgroundColor:'#FEFFFF'
    },

    content:{
        flex:1,
        padding:32,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        fontSize:40,
        fontWeight:'bold',
        color:'#292929',
        marginBottom:32
    },
    resetPass:{
        alignSelf:'flex-end',
        color:'#3796FE',
        fontSize:12,
        marginTop:4,
        marginBottom:16
    },
    signUp:{
        color:'#929292',
        fontSize:12,
        textAlign:"center"
    },
    signUpLink:{
        fontSize:12,
        color:'#3796FE'
    },
    footer:{
        borderTopWidth:0.5,
        borderColor:'#929292',
        padding:8
    },
    footerCopyright:{
        color:'#929292',
        textAlign:"center"
    }
})