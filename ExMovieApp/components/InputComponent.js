import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';


// 스타일링된 TextInput을 리턴하는 함수를 만들자!(state는 필요가 없을 듯 하니..간단하게 함수로)
export default InputComponent=(props)=>{
    return (
        <View style={styles.container}>
            <TextInput 
                selectionColor='#dddddd'
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input} 
                placeholder={props.placeholder} 
                placeholderTextColor="#888888"
                secureTextEntry={props.secureTextEntry}
                // 원래 진짜 앱을 만들면 꼭 필요한 속성... onChangeText
                // 글씨가 변경될 때마다 실행될 메소드를 지정 - props로 전달받기
                onChangeText={props.onChangeText}
                ></TextInput>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        width:"100%",
        height:40,
        paddingHorizontal:8,
        borderWidth:1,
        borderColor:'#D3D3D3',
        borderRadius:4,
        backgroundColor:'#FAFAFA',
        marginVertical:8
    },
    input:{
        // 부모 뷰와의 사이즈 맞추기
        flex:1,
        color:'#292929',
        fontSize:14
    }
});

