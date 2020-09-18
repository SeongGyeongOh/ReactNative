import React, {Component} from 'react';
import {View, SectionList, Text, StyleSheet} from 'react-native';

export default class Main extends Component{

    // SectionList : 그룹이 지어진 리스트뷰
    constructor(){
        super(); //생성자를 만드려면 부모클래스(상속받은)의 생성자를 무조건 명시적으로 적어야함

        // 대량의 데이터를 준비해보자 (그룹을 지어서) - 생성자를 사용해서 만든 멤버변수
        this.state={
            //SectionList에서 섹션 하나 객체에는 title, data 2개의 property가 필요함
            datas:[
                {title: '한식', data:['백반', '찌개', '비빔밥', '불고기']},
                {title: '일식', data:['초밥', '덮밥', '우동']},
                {title: '중식', data:['짜장면', '짬뽕', '마라샹궈', '꿔바로우', '샤오카오']}
            ]
        }
    }
    
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.texttitle}>SectionList</Text>

                <SectionList
                    //데이터
                    sections={this.state.datas}

                    //데이터를 구분짓는 헤더를 불러옴(3번 반복)
                    // 객체 하나가 파라미터로 전달되어옴 - 
                    renderSectionHeader={ ( {section} )=>{
                        return (
                            <View style={styles.sectionstyle}>
                                <Text style={styles.sectionTitle}>{section.title}</Text>
                            </View>
                        );
                    }}

                    //반복적으로 돌며 데이터(아이템)를 읽음(9번 반복)
                    renderItem={({item, index, section})=>{
                        return (
                            <View>
                                {/* 여기서 item은 data:[] 부분의 데이터를 뜻함 */}
                                <Text style={styles.sectionData}>{item}</Text>
                            </View>

                        );
                    }}

                    // 키 추출하기
                    keyExtractor={(item, index)=> index}>
                    
                </SectionList>
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
        textAlign:"center"
    },
    sectionChunk:{
        backgroundColor:'#eeeeee'
    },
    sectionstyle:{
        borderWidth:2,
        borderColor:'brown',
        borderRadius:8,
        padding: 8,
        backgroundColor:'#aaccdd'
    },
    sectionTitle:{
        fontSize:16,
        fontStyle:"italic",
        fontWeight:'bold',
    },
    sectionData:{
        paddingBottom:4
    }
})