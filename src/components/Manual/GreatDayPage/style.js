import {Dimensions, StyleSheet} from 'react-native';
import {normalize} from '../../../widgets/Fonts/Normalize';
const stylesheet = StyleSheet.create({
  instructions: {
    height:normalize(600)
  },
  instructionBoxes:{
    flex:1
  },
  TitleText: {
    fontFamily:'Daydream',
    color:'#C68420',
    textAlign:'center',
    fontSize:normalize(55),
    marginTop: normalize(50),
    marginBottom:normalize(50),
  },
  defaultBox: {
  flex:1,
  marginTop:normalize(20),
  flexDirection:'row',
  width: normalize(340),
  alignItems:'center',
  },
  box1Icon: {
    marginRight: normalize(10),
    width:normalize(45),
    height:normalize(50)
  },
   box2Icon: {
    marginRight: normalize(10),
    width:normalize(45),
    height:normalize(42)
  },
   box3Icon: {
    marginRight: normalize(10),
    width:normalize(45),
    height:normalize(40)
  },
   box4Icon: {
    marginRight: normalize(10),
    width:normalize(45),
    height:normalize(45)
  },
  boxTextDefault :{
    flexShrink: 1,
    fontFamily:'Gracialind-Bold',
    color:'#C68420',
    fontSize:normalize(16),
  },
  
});

export default stylesheet;