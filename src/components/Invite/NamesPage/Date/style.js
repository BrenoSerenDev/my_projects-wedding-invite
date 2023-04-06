import {StyleSheet} from 'react-native';
import {normalize} from '../../../../widgets/Fonts/Normalize';

const stylesheet = StyleSheet.create({
  content: {
    flex:2,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  textContent: {
    flexDirection:'row',
    marginBottom:normalize(100),
  },
  dateView: {
    flex:1,
  },
  date02Text: {
    textAlign:'right', 
    fontSize:normalize(60), 
    marginBottom:normalize(-15),
    fontFamily:'Arapey-Regular'
  },
  dateDezText: {
    textAlign:'right',
    fontSize:normalize(35),
    marginBottom:normalize(-10),
    fontFamily:'Arapey-Regular'
  },
  date2023Text: {
    textAlign:'right', 
    fontSize:normalize(33), 
    fontFamily:'Arapey-Regular'
  },
  hourView: {
    flex:2,
  },
  hourSabadoText: {
    marginTop:normalize(12),
    fontSize:normalize(55), 
    marginBottom:normalize(-19), 
    fontFamily:'Arapey-Regular'
    },
  hourText: {
    fontSize:normalize(46) ,
    fontFamily:'Arapey-Regular'
    },
});

export default stylesheet;