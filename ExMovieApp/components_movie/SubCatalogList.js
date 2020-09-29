import React, {Component} from 'react';
import {Text, Image, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

export default class SubCatalogList extends Component{
    state={
        data:[]
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <FlatList
                    horizontal={true}
                    data={this.state.data}
                    renderItem={({item, index})=>{
                        return(
                            <TouchableOpacity
                                activeOpacity={0.9} 
                                onPress={()=>this.props.onPress(item.id)}
                                style={{paddingHorizontal:4}}>
                                <Image 
                                    style={{width:140, height:200}}
                                    source={{uri:item.large_cover_image}}></Image>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item, index)=>"Sub"+index}>

                </FlatList>
            </View>
        );
    }

    loadData=()=>{
        fetch(this.props.uri)
            .then(response=>response.json())
            .then(json=>this.setState({data:json.data.movies}))
    }

    componentDidMount(){
        if(this.props.uri) this.loadData()
    }
}

const styles=StyleSheet.create({
    container:{
        marginVertical:8
    },
    titleContainer:{
        padding:8
    },
    title:{
        fontSize:16,
        fontWeight:"bold"
    }
})
