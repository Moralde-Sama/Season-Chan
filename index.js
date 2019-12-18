/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Login from './Login';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Login);
