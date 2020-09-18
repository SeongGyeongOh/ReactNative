import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

export default class Main extends Component{

    state={
        datas:['sad', 'happy', 'smiling', 'crying']
    }

    //화면에 보여질 대량의 데이터들
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.texttitle}>Flat List</Text>

                {/* 대량의 데이터를 보여주기 위해 존재하는 대표적인 녀석 -FlatList(마치 안드로이드의 리스트뷰) */}
                {/*2개의 필수 속성을 설정해야 함 */}
                {/* 1. data: FlatList가 보여줄 대량의 데이터들을 지정하는 속성 */}
                {/* 2. renderItem: 아이템 하나의 모양을 만들어서 리턴해주는 함수를 지정(어제 했던 map을 자동으로 해주는 녀석이라고 생각하면 됨*/}
                <FlatList 
                    data={this.state.datas}

                    //안의 함수가 리턴한 것이 화면에 보여짐
                    // renderItem이 지정한 함수의 파라미터로 객체 하나가 전달이 됨- 배열의 길이만큼 돌면서 해당 인덱스에 대한 객체가 날라오는 것!
                    // 전달된 객체 안에는 두 개의 데이터가 있음 -item, index(정해진 이름들임)
                    renderItem={ (obj) =>{
                        // 구조분해할당
                        let {item, index}=obj;
                        return (
                        <Text key={obj.index}>{obj.item}</Text>
                        );
                    }}>
                </FlatList>
            </View>
        );
    }

}

const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:8
    },

    texttitle:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:4,
        paddingBottom:16
    }

});