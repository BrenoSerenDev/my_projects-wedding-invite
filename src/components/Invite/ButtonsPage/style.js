import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from '../../../widgets/Fonts/Normalize'
const stylesheet = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bottomText: {
    textAlign:'center',
    fontSize:normalize(24),
    color:'#ffb5c6',
    fontWeight:'bold',
  },
});

export default stylesheet;