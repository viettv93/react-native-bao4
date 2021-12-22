/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ScreenWithModal from './src/modal/ScreenWithModal';

import BaiTap01 from './src/baitap/BaiTap01'

AppRegistry.registerComponent(appName, () => ScreenWithModal);
