import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, Alert} from 'react-native';
import TabComponent from '../components/TabComponent';
import InputComponent from '../components/InputComponent';

export default class ResetPassword extends Component{

    state={
        tabs:["이메일", "전화번호"],
        tabIndex:0,
        message:[
            "이메일을 입력하면 임시 비밀번호를 보내드립니다.", 
            "전화번호를 입력하면 임시 비밀번호를 보내드립니다."]
    }
    render(){
        return (
            <View style={styles.root}>
                {/* 콘텐츠 영역 */}
                <View style={styles.contents}>
                    {/* 자물쇠 이미지 넣기 */}
                    <View style={styles.lockimgcontainer}>
                        <Image source={require('../Images/lock.png')} ></Image>
                    </View>
                    {/* 안내 글씨 */}
                    <Text style={styles.title}>로그인에 문제가 있나요?</Text>

                    {/* 탭 선택에 따른 안내메세지 - 만들어논 별도의 커스텀 컴포넌트를 사용하자!! */}
                    <Text style={styles.message}>{this.state.message[this.state.tabIndex]}</Text>

                    {/* 탭 탭탭 */}
                    <View style={styles.tabcontainer}>
                        {
                            this.state.tabs.map((value, index)=>{
                                return(
                                    // 선택한 라벨과 인덱스값이 동일하면 true, 아니면 false가 전달되게 selected 속성 부여
                                    <TabComponent onPress={()=>this.setTabIndex(index)} selected={this.state.tabIndex===index} label={value} key={"Tab"+index}></TabComponent>
                                );
                            })
                        }
                    </View>

                    {/* 인풋 요소-정보입력 */}
                    <InputComponent placeholder={this.state.tabs[this.state.tabIndex]}></InputComponent>

                    {/* 다음버튼 */}
                    <View style={{width:"100%", margin:16}}>
                        <Button title="다음" onPress={()=>Alert.alert('비밀번호를 보냈습니다', '로그인 후 안전한 비밀번호로 변경해 주세요')}></Button>
                    </View>

                </View>

                {/* 푸터 영역 */}
                <View style={styles.footer}>
                    <Text style={styles.goBack} onPress={()=>this.props.navigation.goBack()}>로그인 화면으로 돌아가기</Text>
                </View>
            </View>
        );
    }

    // 탭 선택시 발동하는 메소드
    setTabIndex= index => this.setState({tabIndex:index})
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#FEFFFF'
    },

    text:{
        fontSize:18,
        fontWeight:'bold'
    },
    contents:{
        flex:1,
        width:"100%",
        alignItems:'center',
        padding:32
    },
    lockimgcontainer:{
        borderWidth:2,
        borderColor:'#333333',
        padding:24,
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:18,
        marginVertical:16
    },
    message:{
        textAlign:'center',
        marginBottom:16,
        color:'#292929'
    },
    tabcontainer:{
        flexDirection:'row',
        marginBottom:16
    },  
    footer:{
        borderTopWidth:0.5,
        borderColor:"#929292",
        padding:8,
        width:'100%'
    },
    goBack:{
        color:'#3796FE',
        textAlign:"center"
    }
})