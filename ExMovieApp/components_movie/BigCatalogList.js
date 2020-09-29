import React, {Component} from 'react';
import { View, StyleSheet, FlatList, Alert, Text } from 'react-native';
import BigCatalog from './BigCatalog';

export default class BigCatalogLsit extends Component{

    // 대량의 데이터를 위한 state 변수
    state={
        data:[],
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    // 뷰페이저같은 속성!
                    pagingEnabled={true}
                    // 플랫리스트 두 개의 필수속성 - data, renderItem
                    data={this.state.data}
                    // 하나의 객체를 전달받음 - 이 안에는 index 와 item(배열의 한 요소)이 있음 
                    renderItem={( obj )=>{
                    return <BigCatalog onPress={this.props.onPress} movie={obj.item}></BigCatalog>
                    }}
                    keyExtractor={(item, index)=>{"Big"+index}}></FlatList>
            </View>
        );
    }

    // 영화정보를 json으로 받아오는 메소드
    loadData=()=>{
        // MovieList.js로부터 전달받은 props - uri를 파싱하자
        fetch(this.props.uri)
            //응답받은 녀석을 제이슨으로 리턴해달라 
            .then((response)=> response.json())
            .then((resJson)=>this.setState({data:resJson.data.movies}))
    }

    // 컴포넌트가 장착이 되면 위의 메소드를 실행시키자!!
    componentDidMount(){
        if(this.props.uri) this.loadData();
        this.loadData();
    }
}

const styles=StyleSheet.create({
    container:{
        height:300,
        marginBottom:8,
    }
});