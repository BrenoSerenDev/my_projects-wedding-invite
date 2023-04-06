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
    marginTop: normalize(100),
    marginBottom:normalize(50)
  },
  defaultBox: {
  flex:1,
  marginTop:normalize(20),
  flexDirection:'row',
  width: normalize(320),
  alignItems:'center'
  },
  box1Icon: {
    marginRight: normalize(10),
    width:normalize(50),
    height:normalize(55)
  },
   box2Icon: {
    marginRight: normalize(10),
    width:normalize(50),
    height:normalize(47)
  },
   box3Icon: {
    marginRight: normalize(10),
    width:normalize(50),
    height:normalize(45)
  },
   box4Icon: {
    marginRight: normalize(10),
    width:normalize(50),
    height:normalize(50)
  },
  boxTextDefault :{
    flexShrink: 1,
    fontFamily:'Gracialind-Bold',
    color:'#C68420',
    fontSize:normalize(15)
  },
  
});

export default stylesheet;