import {StyleSheet} from 'react-native';
import {normalize} from '../../../../widgets/Fonts/Normalize';

const stylesheet = StyleSheet.create({
  content: {
    flex:2,
    justifyContent: "center",
    alignItems: "center",
  },
  locateButtonIcon: {
    width:normalize(70),
    height:normalize(80),
  },
  buttonIcon: {
    backgroundColor:'#f4ced7',
    paddingHorizontal:normalize(25),
    paddingVertical:normalize(20),
    borderWidth:normalize(6),
    borderColor:'#c68420',
    borderRadius:normalize(10),
  },
  buttonSubtitleText: {
    textAlign:'center',
    fontSize:normalize(25),
    fontFamily:'Arapey-Regular',
  },
});

export default stylesheet;