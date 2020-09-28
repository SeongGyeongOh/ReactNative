import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

export default TabComponent=(props)=>{

    // 탭 선택 여부에 따른 글씨색상 지정하기
    // 삼항연산자를 사용해보자!
    const color=props.selected ? '#292929' : '#929292';

    // containerStyle의 색상값 지정
    containerStyle.borderColor=color;

    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={containerStyle}>
            <Text style={{
                color: color
            }}>{props.label}</Text>
      </TouchableOpacity>  
    );
}

const containerStyle={
    flex:1,
    borderBottomWidth:1,
    paddingBottom:8,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#929292'
};