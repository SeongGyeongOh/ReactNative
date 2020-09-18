import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';

export default class Main2 extends Component{

    state={
        datas:[{name:'성경', img:require('./images/flag_australia.png')},
        {name:'성경', img:require('./images/flag_australia.png')},
        {name:'성경', img:require('./images/flag_australia.png')},
        {name:'성경', img:require('./images/flag_australia.png')}]
    }

    //화면에 보여질 대량의 데이터들
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.texttitle}>Flat List</Text>

                <FlatList 
                    data={this.state.datas}

                    renderItem={ ({item}) =>{
                        // 구조분해할당
                        return (
                        <View>
                            <Text>{item.name}</Text>
                            <Image source={item.img}></Image>
                        </View>
                        );
                    }}
                    
                    // 키값을 식별하기 위한 별도의 메소드 추가
                    // renderItem과 동일하게 알아서 반복문을
                    // 그 요소가 파라미터로 전달받아짐!
                    // 실제 얻어온 데이터에서 중복되지 않은걸 끌어다가 쓰면 됨!
                    keyExtractor={(item)=>{return item.name;}}
                    
                    // 스크롤바 안보이게 하는 속성
                    showsVerticalScrollIndicator={false}

                    // 스크롤이 횡으로 되게하는 속성임
                    // horizontal={true}
                    >

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