/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ScreenWithModal from './src/modal/ScreenWithModal';
import Baitap02 from './src/baitap/Baitap02'
import BaiTap01 from './src/baitap/BaiTap01'
import Baitap03 from './src/baitap/Baitap03';

AppRegistry.registerComponent(appName, () => Baitap03);
