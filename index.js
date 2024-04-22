// index.js
import 'react-native-gesture-handler';  // Ensure this comes before any other imports if you're using it.
import { enableScreens } from 'react-native-screens';
enableScreens();

import 'react-native-reanimated';  // This import should be high up as well.

import { AppRegistry,LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// LogBox.ignoreLogs(['ViewPropTypes will be removed']);
AppRegistry.registerComponent(appName, () => App);