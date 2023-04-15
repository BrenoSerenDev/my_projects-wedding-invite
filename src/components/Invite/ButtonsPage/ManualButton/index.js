import {View, Text, Image, TouchableOpacity} from 'react-native';
import stylesheet from './style';
import defaultStylesheet from '../style'

export default function Title(props){

  return(
      <View style = {stylesheet.content}>
        <TouchableOpacity onPress={() => props.NavigationData.navigate("Manual")}
        style = {stylesheet.buttonIcon}>
          <Image  
            style={stylesheet.manualButtonIcon} 
            source={require('../../../../../assets/img/icon/manual-Icon.gif')}/>
        </TouchableOpacity>
        <TouchableOpacity
        style = {defaultStylesheet.buttonSubtitleView}>
          <Text style = {stylesheet.buttonSubtitleText} allowFontScaling={false}>
            MANUAL DOS
          </Text>
          <Text style = {stylesheet.buttonSubtitleText} allowFontScaling={false}>
            AVÓS
          </Text>
        </TouchableOpacity>
      </View>
  )
}