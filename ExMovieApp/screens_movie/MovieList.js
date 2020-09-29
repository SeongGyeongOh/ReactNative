import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import BigCatalogLsit from '../components_movie/BigCatalogList';
import SubCatalogList from '../components_movie/SubCatalogList';

export default class MovieList extends Component{
    render(){

        // 접근할 서버의 주소들
        //인기 영화 정보 불러오는 url [get방식]
        const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";
        // 최신등록순 영화 정보 불러오는 url 
        const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";
        // 평점순 영화 정보 불러오는 url 
        const ratingtUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";
        // 다운로드순 영화 정보 불러오는 url 
        const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";

        return(
            <ScrollView style={styles.root}>
                {/* 큰 이미지는 가로 스크롤(페이징같은 느낌으로) */}
                <BigCatalogLsit
                    uri={bigUrl}
                    // props 속성으로 onPress를 전달
                    // 이 onPress는 id를 가지고 있음
                    onPress={(id)=>{   
                        // navigate의 첫째 값은 이동할 스크린, 둘째는 전달할 값(putExtra)!!
                        this.props.navigation.navigate('MovieDetail', {id:id});
                    }}></BigCatalogLsit>

                {/* 최신등록순 */}
                <SubCatalogList 
                    onPress={(id)=> this.props.navigation.navigate('MovieDetail', {id})} 
                    title="최신등록순" uri={recentUrl}></SubCatalogList>
                
                {/* 평점순 */}
                <SubCatalogList
                    onPress={(id)=> this.props.navigation.navigate('MovieDetail', {id})}  
                    title="평점순" uri={ratingtUrl}></SubCatalogList>

                {/* 다운로드순 */}
                <SubCatalogList 
                    onPress={(id)=> this.props.navigation.navigate('MovieDetail', {id})} 
                    title="다운로드순" uri={downloadUrl}></SubCatalogList>
            </ScrollView>
        );
    }

    // 제목줄 옵션주기
    // 컴포넌트 마운트 후에 작업해야함!
    componentDidMount(){
        this.props.navigation.setOptions({
            // 헤더 글씨 정가운데
            headerTitleAlign:'center',
            headerRight:()=>{
                // 삼선메뉴로 드로워 열기
                return <TouchableOpacity style={{marginRight:16}} onPress={()=>this.props.navigation.toggleDrawer()}>
                            <Image source={require('../Images/ic_menu.png')}></Image>
                    </TouchableOpacity>},
            // 리턴문 축약형!
            headerLeft:()=>(
                            <TouchableOpacity 
                            style={{marginLeft:16, flexDirection:'row', alignItems:'center'}} 
                            onPress={this.logout}>
                                <Image source={require('../Images/Tabs/ic_profile.png')}></Image>   
                                <Text style={{marginLeft:4}}>로그아웃</Text>
                            </TouchableOpacity>
                            )
                
            
        });
    }

    // 로그아웃 메소드
    logout=async ()=>{
        // AsyncStorage의 저장된 이메일 정보를 삭제하고, 로그인화면으로 전환
        await AsyncStorage.removeItem("email");
        this.props.navigation.replace('Intro');
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#FEFFFF'
    },

})