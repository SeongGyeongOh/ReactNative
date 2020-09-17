import React, {Component} from 'react';
import {View} from 'react-native';

class MainComponent extends Component{
 
    render(){
        return (
            // 여러개의 뷰컴포넌트를 넣으려면 일단 가장 큰 뷰가 있어아햠. why? return은 1개의 컴포넌트만 리턴할 수 있으므로.

            //1) 안에 3개의 자식뷰 배치하기
            <View>
                <View style={ {width:50, height:50, backgroundColor:'red'} }></View>
                <View style={ {width:100, height:100, backgroundColor:'green'} }></View>
                <View style={ {width:'70%', height:150, backgroundColor:'blue', left:50} }></View>                
                {/* 뷰의 사이즈는 width,height에 숫자나 %를 사용하거나, flex를 이용할 수 있음. */}
                {/* widht,height에 지정하는 사이즈 값으로는 숫자와 %를 사용할 수 있음. */}
                {/* 숫자는 단위가 dip임.[px를 명시적으로 쓰지 못함], %쓸때는 문자열' '로 지정해야함 */}
                {/* 별로로 부모뷰에 스타일을 주지 않으면 기본적인 자식뷰들은 position이 relative레이아웃 배치로 보이지만 flex임*/}
                {/* 기본 배치방향이 수직(column)임 */}                    
            </View>

            // 위처럼 width, height을 이용하여 자식뷰들의 사이즈를 설정하는 것은 해상도에 대응하기 어려운 단점이 있음.
            // RN에서는 flex 레이아웃을 권장함.
            // 2) flex 스타일을 이용하여 화면을 3분할 하여 배치해보기 높이가 1:2:4가 되도록..
            // <View style={ {height:350}  }>
            //     {/* android의 layout_weight과 흡사한 기능 : 현재 수직배치이므로 높이값을 설정한 것임 */}
            //     <View style={ {flex:1, backgroundColor:'red'} }></View>
            //     <View style={ {flex:2, backgroundColor:'green'} }></View>
            //     <View style={ {flex:4, backgroundColor:'blue'} }></View>
            //     {/* 부모뷰의 높이가 지정되어 있지 않으면 자식뷰의 flex는 높이를 계산히지 못하여 화면에 출력되지 못함 */}
            //     {/* 즉, 자식뷰의 너비나 높이를 flex를 이용하려면 부모뷰의 너비나 높이가 반드시 있아야함 */}
            //     {/* 우선 부모뷰에 height값으로 350을 지정해보기[기본 단위는 dp임] */}
            //     {/* 부모뷰 높이 350을 1:2:4의 비율로 차지하게됨. */}
            //     {/* 자식뷰들의 너비는 별도의 width지정이 없다면 stretch되어 match_parent가 됨. */}
            //     {/* 그럼 화면 높이 전체를 사용하려면 부모뷰의 높이값은? device마다 다름. */}
            //     {/* 그래서 부모뷰의 높이값도 화면전체를 차지하도록 하려면 수치값 대신에 flex사용 권장 */}
            // </View>

            // 3) 부모뷰에 flex를 이용하여 전체화면 높이 설정하기 [ android의 weight="1"과 같음. 비교대상이 없으므로 혼자 공간을 다 차지함- 숫자값은 1이든 10이든 상관없음]
            // <View style={ {flex:1}  }>
            //     <View style={ {flex:1, backgroundColor:'red'} }></View>
            //     <View style={ {flex:2, backgroundColor:'green'} }></View>
            //     <View style={ {flex:4, backgroundColor:'blue'} }></View>
            //     {/* 안드로이드의 root뷰의 높이를 match-parent하는 것과 같게 됨. */}
            // </View>
            

            // 4) 자식뷰들의 배치 방향(direction)이 기본적으로 수직(column)인데.. 그럼 수평(row)배치 해보기
            // <View style={ {flex:1, flexDirection:'row'}  }>
            //     <View style={ {flex:1, backgroundColor:'red'} }></View>
            //     <View style={ {flex:2, backgroundColor:'green'} }></View>
            //     <View style={ {flex:4, backgroundColor:'blue'} }></View>
            //     {/* flex의 방향이 row여서 자식뷰들의 flex:1 ,2, 4는 높이가 아니라 너비설정이 되며 */}
            //     {/* 반대로 높이는 무조건 stretch되어 match_parent가 됨. */}
            // </View>

            // 5) 자식뷰들의 높이와 너비를 개별 지정하여 배치 정렬해보기
            //    css의 flex  justify-content와 align-items와 같은 방식
            // space-evenly: 모든 여백이 같은 크기, space-around: 각 요소를 둘러싼 여백의 크기기 같게, space-between: 각 요소들 사이의 여백이 같게.
            // <View style={ {flex:1, flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'} }>
            //     <View style={ {width:50, height:50, backgroundColor:'red'} }></View>
            //     <View style={ {width:50, height:50, backgroundColor:'green'} }></View>
            //     <View style={ {width:50, height:50, backgroundColor:'blue'} }></View>
            // </View>

            // 5.1) direction을 'row'로 해보기
            // <View style={ {flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center'} }>
            //     <View style={ {width:50, height:50, backgroundColor:'red'} }></View>
            //     <View style={ {width:50, height:50, backgroundColor:'green'} }></View>
            //     <View style={ {width:50, height:50, backgroundColor:'blue'} }></View>
            // </View>


            // 6) 자식뷰들의 너비나 높이를 하나의 뷰만 주고 다음 뷰들에만 flex를 통해 비율로 크기 지정하기
            // <View style={ {flex:1, flexDirection:'column'} }>
            //     <View style={{height: 50, backgroundColor: 'red'}} />

            //     {/* 남은 공간에 대해서 1:2로 높이값 지정됨 */}
            //     <View style={{flex:1, backgroundColor: 'green'}} />
            //     <View style={{flex:2, backgroundColor: 'blue'}} />
            // </View>

            // 7) 중첩구조의 배치.. 수직/수평의 중첩... 안드로이드의 LinearLayout안에 LinearLayout구조..
            // <View style={ {flex:1, flexDirection:'column'} }>
            //     {/* 크게 수직으로 2분할 [ 1 : 2 비율 ] */}

            //     {/* 7.1)상단 1의 영역 */}
            //     <View style={ {flex:1, flexDirection:'row'} }>
            //         {/* 좌우 2:1의 비율로 */}
            //         <View style={ {flex:2, backgroundColor:'red'} }></View>

            //         <View style={ {flex:1, flexDirection:'column'} }>
            //             <View style={ {flex:1, backgroundColor:'yellow'} } ></View>
            //             <View style={ {flex:1, backgroundColor:'green'} } ></View>
            //         </View>                    
            //     </View>

            //     {/* 7.2)하단 2의 영역 */}
            //     <View style={ {flex:2, flexDirection:'row'} }>
            //         {/* 좌우 1:2의 비율로 */}
            //         <View style={ {flex:1, backgroundColor:'blue'} }></View>

            //         <View style={ {flex:2, flexDirection:'column'} }>
            //             <View style={ {flex:1, backgroundColor:'gray'} } ></View>
            //             <View style={ {flex:1, backgroundColor:'brown'} } ></View>
            //         </View> 
            //     </View>
            // </View>
            
            
            // 8) RelativeLayout처럼 뷰들이 겹치게 배치하려면 position:absolute를 이용 : 위 7)예제에 바로 적용
            // <View style={ {flex:1, flexDirection:'column'} }>
            //     {/* 크게 수직으로 2분할 [ 1 : 2 비율 ] */}

            //     {/* 7.1)상단 1의 영역 */}
            //     <View style={ {flex:1, flexDirection:'row'} }>
            //         {/* 좌우 2:1의 비율로 */}
            //         <View style={ {flex:2, backgroundColor:'red'} }>

            //             {/* 절대 위치 지정으로 뷰 겹치기 : 절대위치설정을 하지 않으면 겹치지 않음. */}
            //             <View style={ {width:50, height:50, backgroundColor:'white', left:10, top:10, position:'absolute'} }></View>
            //             <View style={ {width:50, height:50, backgroundColor:'gray', left:20, top:20, position:'absolute'} }></View>
                        
            //         </View>

            //         <View style={ {flex:1, flexDirection:'column'} }>
            //             <View style={ {flex:1, backgroundColor:'yellow'} } ></View>
            //             <View style={ {flex:1, backgroundColor:'green'} } ></View>
            //         </View>                    
            //     </View>

            //     {/* 7.2)하단 2의 영역 */}
            //     <View style={ {flex:2, flexDirection:'row'} }>
            //         {/* 좌우 1:2의 비율로 */}
            //         <View style={ {flex:1, backgroundColor:'blue'} }></View>

            //         <View style={ {flex:2, flexDirection:'column'} }>
            //             <View style={ {flex:1, backgroundColor:'gray'} } ></View>
            //             <View style={ {flex:1, backgroundColor:'brown'} } >

            //                 {/* 절대 위치 지정으로 뷰 겹치기 : 절대위치설정을 하지 않으면 겹치지 않음. */}
            //                 <View style={ {width:50, height:50, backgroundColor:'white', right:10, bottom:10, position:'absolute'} }></View>
            //                 <View style={ {width:50, height:50, backgroundColor:'gray', right:20, bottom:20, position:'absolute'} }></View>
            //             </View>
            //         </View> 
            //     </View>


            //     {/* 절대 위치 지정으로 뷰 겹치기 : 절대위치설정을 하지 않으면 겹치지 않음. */}
            //     <View style={ {width:100, height:100, backgroundColor:'orange', borderRadius:50,  bottom:100, left:90, position:'absolute'} }></View>

                
            // </View>

        );
    }

}

// index.js에서 import를 할 수 있으려면 이 문서에서 export해줘야 함.
export default MainComponent;