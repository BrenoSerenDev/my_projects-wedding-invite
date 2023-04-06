import {Dimensions, StyleSheet, Platform} from 'react-native';
import {normalize} from '../../widgets/Fonts/Normalize';
const isIos = (Platform.OS === 'ios');

const stylesheet = StyleSheet.create({
  content: {

    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    marginRight:100,
    marginTop:  isIos? normalize(0): normalize(0),
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
    height: Dimensions.get('screen').height - normalize(140),
    borderColor:'#C68420',
    borderWidth:  isIos? normalize(4): normalize(6),
  },

  bottomFlower: {
    position:'absolute',
    zIndex:1,
    bottom: isIos? normalize(-120): normalize(-100),
    right: isIos? normalize(-100): normalize(-100),
    width: normalize(336),
    height: normalize(360),
    transform: [{rotate: '185deg'}]
  },
  
});

export default stylesheet;
