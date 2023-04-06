import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from '../../../../widgets/Fonts/Normalize'
const stylesheet = StyleSheet.create({
  content: {
    flex:2,
    justifyContent: "center",
    alignItems: "center",

  },
  buttonIcon: {
    backgroundColor:'#f4ced7',
    paddingHorizontal:normalize(29),
    paddingVertical:normalize(15),
    borderWidth:normalize(6),
    borderColor:'#c68420',
    borderRadius:normalize(10),
  },
  manualButtonIcon: {
    width:normalize(60),
    height:normalize(90),
  },
  manualSubtitleIcon: {
    marginLeft:10,
    width:normalize(17),
    height:normalize(16),
  },
  buttonSubtitleText: {
    textAlign:'center',
    fontSize:normalize(20),
    fontWeight:'bold'
  },
});

export default stylesheet;