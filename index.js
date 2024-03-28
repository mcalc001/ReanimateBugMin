/**
 * @format
 */
import 'react-native-reanimated'; // https://github.com/software-mansion/react-native-reanimated/issues/2430

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
