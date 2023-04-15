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
  },
  
  topFlower: {
    zIndex:1,
    position:'absolute',
    top: isIos? normalize(-110): normalize(-130),
    left: isIos? normalize(-100): normalize(-105),
    marginBottom:normalize(10),
    width: normalize(336),
    height: normalize(360),
    transform: [{rotate: '5deg'}]
  },

  frame: {
    zIndex:-1,
    justifyContent: "center",
    alignItems: "center",
    width:Dimensions.get('screen').width - normalize(40),
    height: Dimensions.get('screen').height - normalize(130),
    borderColor:'#C68420',
    borderWidth:  isIos? normalize(4): normalize(6),
  },

  bottomFlower: {
    position:'absolute',
    zIndex:1,
    bottom: isIos? normalize(-120): normalize(-130),
    right: isIos? normalize(-100): normalize(-100),
    width: normalize(336),
    height: normalize(360),
    transform: [{rotate: '185deg'}]
  },
  
});

export default stylesheet;