import React, {Component} from 'react';
import {View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

    // 멤버변수

    render(){
        // XML 컴포넌트를 변수에 대입하는 것이 가능하다!!(컴포넌트도 하나의 객체이기 때문에 가능한 것!)
        const aaa=<Text>Nice</Text>;  //aaa라는 변수 안에 Text라는 객체를 넣은 것(JS 문법과 XML 문법을 섞어서 가능한 형태)

        const bbb=<View style={{margin:8, borderWidth:1, borderColor:'black', borderRadius:10, padding:4}}>
            <Text>Hello, RN</Text>
            <Button title="버튼"></Button>
        </View>

        // 배열 : 배열의 값으로 XML도 충분히 전달 가능!!
        const arr=[bbb, bbb, bbb];

        // 배열의 각 컴포넌트에 key 속성 넣기
        // but, 이 방법은 대량의 데이터를 보여주는 게 아니라, 대량의 현수막을 갖다 보여주는 것!
        const arr2=[
            <View key='1'><Text>aaa</Text></View>,
            <View key='2'><Text>bbb</Text></View>,
            <View key='3'><Text>ccc</Text></View>,
        ]

        // 배열은 컴포넌트를 가질 수 있다 - 배열의 이름을 쓰면 그 값이 출력된다 - 그 컴포넌트를 함수의 리턴값으로 한다 
        // - 함수의 파라미터로 각 덩어리를 구분할 수 있는 값을(반복문으로) 전달한다!
        const datas=['sam', 'robin', 'hood', 'baker', 'parker', 'hey~'];
        // datas.forEach는 리턴이 안되니까.. 리턴이 되는 map으로 실행하자
        // const kkk=datas.map(function(value, index){
        //     return <Text key={index}>{value}</Text>
        // });

        // const datas2=[{name:"sam", age:20}, {name:"sam", age:20}, {name:"sam", age:20}, {name:"sam", age:20}]


        return (
            <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>List Layout Test</Text>
                {/* 어제 Ex06수업과 비슷한 느낌이나, 한가지 단점이 있음.... 값 전달할 방법이 없음 */}
                {/* 해결방법 - 밑의 showItemView 메소드 체크췤 */}
                {aaa}
                {bbb}

                {this.showItemView('sam', 'grey')}
                {this.showItemView('robin', 'pink')}
                {this.showItemView('hood', 'skyblue')}

                {/*  대량의 데이터를 일일이 적는건 불가능.. 배열을 사용해야 함 */}
                {/* JS는 배열의 이름을 쓰면 그 안의 값이 차례로 출력되어 나온다!! - but, 단순한 열거이기 때문에 리턴된 값들을 구분할 수 없다! */}
                {/* 때문에, 배열로 컴포넌트를 열거하려면 각 컴포넌트를 구별하기 위해 key라는 속성이 있어야 한다(일종의 id) */}
                {arr}
                {arr2}

                {/* 지금까지 방법은 컴포넌트를 직접 한땀한땀 만들어서 출력한 것 */}
                {/* 하지만 실제로는 대량의 컴포넌트가 아닌 대량의 데이터를 보여주게 될 것임! */}

                {/* 대량의 데이터- datas를 보여주기 위한 <Text>컴포넌트를 데이터의 개수만큼 자동으로 만들기 */}
                {/* 아예 배열을 변수명에 대입하지 말고, 한번에 코드를 XML 영역에 작성 */}
                {datas.map((value, index)=>{
                    return (
                        // 값 전달을 위한 꼼수를 잘 봐두자!! 익명 화살표 함수 안에 실제 실행 함수를 호출하며 파라미터를 전달함!
                    <TouchableOpacity onPress={()=>{this.clickBtn(index, value);}} style={styles.itemView} key={index}>
                        <Text>{value}</Text>
                    </TouchableOpacity>
                    );
                })}

            </View>
            </ScrollView>
        );
    }

    //실제로 아이템 클릭 시 실행될 함수
    clickBtn=(index, value)=>{
        Alert.alert(index +":"+value);
    }

    // XML 컴포넌트를 리턴시키는 메소드
    showItemView=(name, color)=>{
        return <View style={{margin:8}}>
            <Text>{name}</Text>
            <Button title={'버튼'} color={color}></Button>
        </View>;
    }

}//main

const styles=StyleSheet.create({
    root:{
        padding:8,
        flex:1
    },

    title:{
        fontSize:20,
        fontWeight:"bold",
        alignSelf:"center"
    },

    itemView:{
        padding:16,
        margin:8,
        borderWidth:2,
        borderColor:'black',
        borderRadius:8
    }
});