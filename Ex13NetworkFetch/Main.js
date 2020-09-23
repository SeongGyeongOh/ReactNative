import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Alert} from 'react-native';

export default class Main extends Component{
    
    constructor(){
        // 상속받은 부모클래스를 꼭!! 명시적으로 표시하자
        super();
        this.state={
            text : "",
            movies:[]
        }
    }
    
    render(){
        return (
            <View style={styles.root}>
                <View style={{width:300}}>
                    <Button color="darkblue" title="fetch data from network" onPress={this.fetchData}></Button>
                    <Text>{this.state.text}</Text>
                </View>
                <View>
                    {/* 스크롤뷰는 기본 flex:1로 적용되어 있다 */}
                    <ScrollView horizontal={false} style={styles.scroll}>
                            {/* 영화정보를 가진 배열데이터 출력 */}
                            {/* 원래는 FlatList를 컴포넌트를 사용하지만..그냥 반복문으로 돌려보자! */}
                            {/* {this.state.movies.map((element, index)=>{
                                return (
                                    <View key={element.id} style={{flexDirection:"row", marginBottom:8, borderWidth:2, borderColor:'brown', borderRadius:4}}>
                                        <Text>{element.id}</Text>
                                        <Text>{element.title}</Text>
                                        <Text>{element.releaseYear}</Text>
                                    </View>
                                );
                            })} */}
                    </ScrollView>
                </View>
            </View>
        );
    }

    fetchData=()=>{
        // 버튼을 누르면 네터워크에 있는 데이터를 읽어옴
        // JS의 네트워크 작업용을 만든 객체 - XMLHttpRequest
        // let xhr=new XMLHttpRequest();
        // xhr.onreadystatechange=()=>{
        //     if(xhr.readyState==4 && xhr.status==200){
        //         this.setState({text:xhr.responseText});
        //     }
        // }
        // xhr.open('GET', 'https://raw.githubusercontent.com/SeongGyeongOh/RNFetchTest/master/fetchtest.txt', true);
        // xhr.send();
        // 위 코드는 보기에 쉽지만 1) 가독성이 떨어지고 2) 콜백지옥에 빠질 위험이 있다!

        // 개선을 위한 라이브러리 - fetch!!
        // fetch()함수 : 마치 jQuery의 ajax... 자동 GET!, open, send가 한방에 끝남!
        // promise 문법 : 이거 다음에 뭐를 하자고 약속..then(), 이 안에 함수를 실행
        // let url='https://raw.githubusercontent.com/SeongGyeongOh/RNFetchTest/master/fetchtest.txt';
        // fetch(url)
        //     .then((response)=>{
        //         kkk()
        //         // resonse 객체가 받은 데이터를 그냥 글씨 문자열로 변환해달라
        //         return response.text(); //- 이 처리도 비동기 방식임 - 응답결과를 리턴해야함
        //     }).then((response)=>{
        //         this.setState({text:response});
        //     }).catch((error)=>{alert(error)}); //에러에 반응하기 위한 catch 문을 바로 뒤에 붙이면 됨!!


        //위의 코드를 간결하게!
        // fetch(url).then(response=>response.text()).then(responseText=>this.setState({text:responseText}))
        // .catch(error=>alert(error));


        // 이제!! Json 파싱을 알아보자아아아 [open api 사용]
        // let url="https://reactnative.dev/movies.json"
        // fetch(url)
        //     .then((res)=>{
        //         return res.json(); //내려받는 것을 json 객체로 변환해달라
        //     }).then((jsonObj)=>{
        //         this.setState({text:jsonObj.title, movies:jsonObj.movies});
        //     }).catch(error=>alert(error));


        // Get Method로 데이터 보내고 응답받기!(request, response)
        // 보낼데이터 - url 뒤에 보낼 데이터를 붙이면 끝!
        let name="sam";
        let msg='hello?';
        let url=`http://kamniang.dothome.co.kr/ReactNative/getMethod.php?name=${name}&msg=${msg}`;
        fetch(url)
        .then(response=>response.text())
        .then(responseText=>this.setState({text:responseText}))
        .catch(error=>alert(error));
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:8
    },

    scroll:{
        marginTop:16,
        backgroundColor:'skyblue',
        padding:8
    },

    text:{
        fontSize:16,
        color:'grey'
    }
});