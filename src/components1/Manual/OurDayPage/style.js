import {Dimensions, StyleSheet} from 'react-native';
import {normalize} from '../../../widgets/Fonts/Normalize';
const stylesheet = StyleSheet.create({
  ourDayText: {
    fontFamily:'Daydream',
    color:'#C68420',
    textAlign:'center',
    fontSize:normalize(70),
    marginBottom:normalize(30)
  },
  calendar: {
    width: normalize(320)
  },
  calendarTitle : {
    fontFamily:'Gracialind-Bold',
    color:'#C68420',
    textAlign:'center',
    fontSize: normalize(20),
    marginBottom:normalize(40)
  },
  calendarFirstRow: {
    flexDirection:'row',
    marginBottom:normalize(10)
  },
  calendarFirstRowText: {
    fontFamily:'Gracialind-Bold',
    color:'#C68420',
    textAlign:'center',
    fontSize: normalize(20)
  },
  calendarRow: {
    flexDirection:'row',
    marginTop:normalize(5)
  },
  calendarCol: {
    flex:1,

  },
  calendarText: {
    textAlign: 'center',
    fontFamily:'Gracialind',
    color:'#C68420',
    fontSize: normalize(20)
  },
  heartDay: {
    width:normalize(33),
    height:normalize(32),
    position:'absolute',
    alignSelf:'center',
    top:normalize(-6)
    },
  greatDay: {
    textAlign: 'center',
    fontFamily:'Gracialind-Bold',
    color:'white'
  },
});

export default stylesheet;