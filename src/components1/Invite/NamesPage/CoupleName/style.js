import {StyleSheet} from 'react-native';
import {normalize} from '../../../../widgets/Fonts/Normalize';

const stylesheet = StyleSheet.create({
  content: {
    flex:1,
    width: '100%',
    justifyContent: "center",
  },
  names: {
    fontFamily:'Shelley-Andante',
    textAlign: 'center',
    fontSize:normalize(62),
  },
});

export default stylesheet;