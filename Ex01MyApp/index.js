/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyApp from './MyApp';

// 처음 실행되는 Component를 설정
// 첫번째 파라미터-앱 이름(같은 폴더에 있는 app.json문서 안에 써있음)
// 두 번재 파라미터-처음으로 실행할 컴포넌트를 리턴하는 콜백함수
// AppRegistry.registerComponent(appName, () => App);

// 내가 만든 MyApp 컴포넌트를 시작으로 지정하자
AppRegistry.registerComponent(appName, ()=> MyApp);