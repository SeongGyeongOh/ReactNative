import React, {Component} from 'react';
import {Alert, Button, FlatList, StyleSheet, Text, View} from 'react-native';

export default class Main3 extends Component{

    // clickBtn()
    // getData='';
    
    constructor(){
        super();
        this.state={
            datas:""
        }

    }


    render(){
        return (
            <View style={styles.root}>
                <Text style={styles.titleText}>React Native FlatList Test</Text>
                <Button title="클릭해봐" color='orange' onPress={this.clickBtn}></Button>
                <Button title="클릭해봐" color='orange' onPress={this.clickBtn2}></Button>
            </View>
        );
    }

    clickBtn=()=>{
        var url='http://kamniang@kamniang.dothome.co.kr/Test/getPremium.php?menu=premium';
        var req=new XMLHttpRequest();
        req.onreadystatechange=()=>{
            if(req.readyState==4&&req.status==200){
                this.getData=req.responseText;
                this.setState({datas:this.getData});
                Alert.alert(this.getData);
            }
        }
        req.open('GET', url, true);
        req.send(); 

    }
    
    clickBtn2=()=>{
        // Alert.alert(this.state.datas.menu);
    }
}



const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:8
    },

    titleText:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    }
})