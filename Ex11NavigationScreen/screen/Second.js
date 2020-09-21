import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

export default class Second extends Component{
    render(){
        // 전달받은 파라미터 데이터를 구조분해할당으로!
        const {name, age}= this.props.route.params

        return(
            <View style={styles.root}>
                <Text style={styles.text}>Second Screen</Text>
                {/* 특정 스크린이 아닌, 바로 전 스크린으로 이동해 달라 - navigate가 아닌 goBack을 사용 */}
                <Button title="go back" onPress={()=>{this.props.navigation.goBack()}}></Button>
                {/* 최상위 스크린으로 돌아갈 때 - popToTop  */}
                <Button color='indigo' title="go to top screen" onPress={()=>{this.props.navigation.popToTop()}}></Button>

                {/* 네비게이트를 통해 전달된 데이터 객체는 자동으로 이 컴포넌트의 this.props 변수 안의 route의 멤버변수 안에 저장된다! */}
                {/* 전달된 객체 - params라는 이름으로 받아진다 -위의 구조분해할당을 다시 보자~*/}
                <Text style={styles.text} > {name} , {age} </Text>
            </View>
        );
    }

    // render()메소드 전 자동 호출되는 lifeCycle 메소드

}

const styles=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"        
    },

    text:{
        fontSize:20,
        padding:16,
        fontWeight:"bold"
    }
})
