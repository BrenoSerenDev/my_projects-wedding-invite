import {StyleSheet} from 'react-native';
import {normalize} from '../../../../widgets/Fonts/Normalize';

const stylesheet = StyleSheet.create({
  content: {
    flex:1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  scripture: {
    fontFamily:'Maitree-Light',
    textAlign: 'center',
    fontSize:normalize(21),
    padding:10,
  },
  scriptureComment: {
    fontFamily:'Maitree-Light',
    width:'100%',
    textAlign:'right',
    marginRight:normalize(30),
    marginTop:normalize(-10),
  }
});

export default stylesheet;