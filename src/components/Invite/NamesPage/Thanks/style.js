import {StyleSheet} from 'react-native';
import {normalize} from '../../../../widgets/Fonts/Normalize';

const stylesheet = StyleSheet.create({
  content: {
    flex:2,
    width: '100%',
    alignItems: "center"
  },
  topPhraseContent: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  topPhraseText: {
    color:'#c68420',
    fontFamily:'OpenSans-Light',
    fontSize:normalize(18),
    
  },
  parentsNamesView: {
    flex:1,
    flexDirection:'row',
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  wpNamesView: {
      flex: 1,
      textAlign: 'center',
  },
  wpNamesText: {
    fontFamily:'OpenSans-Light',
    textAlign: 'center',
    fontSize: normalize(16),
  },
  hpNamesView: {
    flex:1,
    textAlign: 'center',
  },
  hpNamesText: {
    fontFamily:'OpenSans-Light',
    textAlign: 'center',
    fontSize: normalize(16),
  },
  bottomPhraseView: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomPhraseText: {
    fontFamily:'OpenSans-Light',
    fontSize:normalize(20),
    color:'#c68420',
  },
});

export default stylesheet;