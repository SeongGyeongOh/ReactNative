import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BigCatalog from '../components_movie/BigCatalog';

export default class MovieDetail extends Component{
    state={
        data:null
    }

    render(){
        // 내 state 안에 영화 상세정보가 있으면 뷰를 리턴,
        // 아니면 뱅글뱅글 돌아가는 뷰를 리턴, 데이터를 기다리도록...
        return this.state.data ? 
        (   <ScrollView style={{flex:1}}>
                <BigCatalog movie={this.state.data}></BigCatalog>
                <View>
                    <Text styles={styles.title}>영화정보</Text>
                    <View style={styles.infoContainer}>
                        <Text>{this.state.data.runtime}분</Text>
                        <Text>평점 : {this.state.data.rating}</Text>
                        <Text>좋아요 : {this.state.data.like_count}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.title}>줄거리</Text>
                    <Text style={styles.description}>{this.state.data.description_full}</Text>
                </View>
            </ScrollView>
        ) : 
        
        (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator color='navy' size="large"></ActivityIndicator>
            </View>
        );
    }

    loadData=()=>{
        const {id}= this.props.route.params;
        const url="https://yts.lt/api/v2/movie_details.json?movie_id="+id+"&with_image=true&with_cast=true";
        fetch(url)
            .then(response=>response.json())
            .then(json=>this.setState({data:json.data.movie}));
            // .then(response=>response.text())
            // .then(json=>alert(json));
    }

    componentDidMount(){
        this.loadData();
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#FEFFFF'
    },
    title:{
        fontSize:16,
        fontWeight:"bold",
        paddingTop:24,
        paddingRight:16,
        paddingBottom:8,
        paddingLeft:16
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,

    },
    description:{
        paddingHorizontal:16
    }

})