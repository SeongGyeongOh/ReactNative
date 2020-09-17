import React,{Component} from 'react';
import {View, Button} from 'react-native';

export default class MyComponent5 extends Component{

    render(){
        return (
            <View style={ {margin:16} }>
                {/* 속성이 있어야 하는 자리에 전달받은 props들을 모두 적용 */}
                {/* ...으로 시작해야함 [ Spread(펼치다,벌리다) 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 ] */}
                {/* ... 전개 연산자, 매개변수로 다중 argument를 전달받을 때 사용 */}
                {/* 파라미터로 배열을 받을 때와 다르게 0개짜리 배열도 전달 받을 수 있음. : c언에도 유사한 것이 있음. */}
                <Button {...this.props} ></Button>
            </View>
        );
    }
}