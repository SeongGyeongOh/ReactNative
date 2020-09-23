import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Alert, FlatList, TouchableOpacity} from 'react-native';

export default class Test extends Component{

    constructor(){
        super();

        this.state={
            text:"",
            Movies : []

        }
    }

    render(){
        return(
            <View>
                <Button title="Movie" onPress={ this.fetchData }></Button>
                
                    <ScrollView>
                        <Text> {this.state.text} </Text>
                    </ScrollView>
                    <FlatList
                    data= { this.state.Movies }
                    renderItem={ ( {item} )=> 
                        <TouchableOpacity onPress={()=>{ alert(item.name)}}>
                            <View>
                                <Text> {item.movieNm} </Text>
                                <Text> {item.title} </Text>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={ item => item.name}
                    
                    showsHorizontalScrollIndicator={false}>
                    </FlatList>
                
            </View>
        );
    }

    fetchData=()=>{

    fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101')
    .then((response) => response.json())
    .then((responseJson) => {
        alert( responseJson.boxOfficeResult.dailyBoxOfficeList[0].movieNm );
    })
    .catch((error) => {
        console.error(error);
    });
    }
}