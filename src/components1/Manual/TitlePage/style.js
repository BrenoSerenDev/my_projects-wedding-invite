import {Dimensions, StyleSheet, Platform} from 'react-native';
import {normalize} from '../../../widgets/Fonts/Normalize';
const isIos = (Platform.OS === 'ios');

const stylesheet = StyleSheet.create({
  manualTitle: {
    fontFamily:'Daydream',
    color:'#C68420',
    textAlign:'center',
  },
  topText: {
    fontSize:isIos ? normalize(90) :normalize(100),
  },
  middleText: {
    lineHeight:normalize(65),
    fontSize:normalize(60),
  },
  bottomText: {
    lineHeight:normalize(100),
    fontSize: isIos ? normalize(90) :normalize(100),
  },
  
});

export default stylesheet;
