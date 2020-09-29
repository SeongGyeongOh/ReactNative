import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const BigCatalog=(props)=>{
    return(
        // 전달받은 onPress
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>props.onPress(props.movie.id)}>
            <Image 
                source={{uri:props.movie.large_cover_image}}
                // 인터넷으로 읽어온 이미지는 무조건 스타일 작업-(너비와 높이)을 해야한다!
                // 너비를 화면 꽉 차게 - 기본적으로 있는 Dimensions를 사용하자!
                style={{width:Dimensions.get('window').width, height:300}}></Image>
            
            {/* 이미지에 겹쳐져 있는 영화정보들 - position: absolute */}
            <View style={styles.infoContainer}>
                <Text style={styles.labelYear}>{props.movie.year}년 개봉</Text>
                <View style={styles.labelContainer}>
                    <Text style={styles.labelTitle}>{props.movie.title}</Text>
                    <Text style={styles.labenGenre}>{props.movie.genres.join(', ')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    infoContainer:{
        position:"absolute",
        bottom:0,
        width:'100%',
        alignItems:"flex-start"
    },
    labelYear:{
        backgroundColor:'#E70915',
        padding:8,
        color:'#ffffff',
        fontWeight:"bold"
    },
    labelContainer:{
        backgroundColor:'#141414',
        width:'100%',
        paddingBottom:8,
        opacity:0.8
    },
    labelTitle:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        padding:8,
    },
    labenGenre:{
        color:'white',
        padding:8
    }
});
export default BigCatalog;