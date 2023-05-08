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
    width:normalize(160),
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
    backgroundColor:'#6f1c36',
    marginVertical: normalize(10),
    marginLeft: normalize(10),
    marginRight: normalize(5)
  },

  colorBoxColor2: {
    flex:1,
    backgroundColor:'#610220',
    marginVertical: normalize(10),
    marginLeft: normalize(5),
    marginRight: normalize(10)
  },
});

export default stylesheet;