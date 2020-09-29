import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InputComponent from '../components/InputComponent';
import AsyncStorage from '@react-native-community/async-storage'

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
                        {/* 로그인 버튼을 누르면 - 정보를 저장하고 다음페이지로 전환할 메소드 */}
                        <Button title="로그인" color="#3796FE" onPress={this.login}></Button>
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

    // 로그인 버튼 누를 때 실행하는 메소드
    // async - await로 동기를 맞추자 - 아니면 실제로는 로그인 정보가 서버에 날라가기도 전에 화면이 변경될 가능성이 있다!!!!
    login= async ()=>{
        // AsyncStorage에 로그인 정보 영구저장 - 나중에 로그인 할 때 인트로에서 바로 메인으로 넘어가도록...
        // 원래는 텍스트인풋의 글자를 가져와야 하지만.. 지금은 연습중이니까 아무 글자나 넣자!
        await AsyncStorage.setItem("email", "android@gyeong");

        // 로그인 후 메인화면인 MovieList를 가진 drawerNavigator로 이동 ㄱㄱ
        // navigate 대신 replace를 사용해서 한 번 로그인한 후 다시 로그인 화면으로 돌아가지 않도록...
        this.props.navigation.replace('MainDrawerNav');
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