import {StyleSheet} from 'react-native';
import {normalize} from '../../../../widgets/Fonts/Normalize';

const stylesheet = StyleSheet.create({
  content: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  locateButtonIcon: {
    width:normalize(70),
    height:normalize(80),
  },
});

export default stylesheet;