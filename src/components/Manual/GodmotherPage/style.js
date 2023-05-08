import {Dimensions, StyleSheet} from 'react-native';
import {normalize} from '../../../widgets/Fonts/Normalize';
const stylesheet = StyleSheet.create({
  instructions: {
    flex:1,
  },
  TitleText: {
    fontFamily:'Daydream',
    color:'#C68420',
    textAlign:'center',
    fontSize:normalize(60),
    marginTop: normalize(100),
  },
  instructionsText: {
    fontFamily:'Gracialind',
    color:'#C68420',
    textAlign:'center',
    fontSize:normalize(18),
    marginTop:normalize(10),
     marginHorizontal:normalize(10),
  },
  colorPallete: {
    flex: 1,
    alignItems:'center',
    marginTop: normalize(100)
  },
  colorsTitleText: {
    fontFamily:'Daydream',
    color:'#C68420',
    textAlign:'center',
    fontSize:normalize(40),
  },
  colorBoxBorder1: {
    width:normalize(90),
    height:normalize(90),
    borderColor:'white',
    borderWidth:normalize(5),
  },
  colorBoxBorder2: {
    flex:1,
    backgroundColor:'white',
    margin:normalize(10),
    
    flexDirection:'row'
  },
  colorBoxColor1: {
    flex:1,
    backgroundColor:'#F6C8CA',
    margin: normalize(10),
  },
});

export default stylesheet;