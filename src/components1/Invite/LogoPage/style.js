import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from '../../../widgets/Fonts/Normalize';

const stylesheet = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  logoImg: {
    marginBottom:normalize(10),
    width:normalize(385),
    height:normalize(450),
  },
});

export default stylesheet;