import {Dimensions, StyleSheet, Platform, StatusBar} from 'react-native';
import {normalize} from '../../widgets/Fonts/Normalize';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const isIos = (Platform.OS === 'ios');

const statusBarHeight = getStatusBarHeight();

const stylesheet = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get('screen').width,
    height: Dimensions.get('window').height+statusBarHeight,
    marginRight:normalize(100),
    backgroundColor:'#fae6e6',
  },
  
  splash: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('window').height,
  },
  
});

export default stylesheet;