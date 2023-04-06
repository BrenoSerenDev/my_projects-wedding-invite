import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import stylesheet from './style';
import defaultStylesheet from '../style'

function redirect_to_maps(){
  Linking.openURL('google.navigation:q=-22.25573311927762 -49.88569665717377');
  return true;
}

export default function Title(){
  return(
      <View style = {stylesheet.content}>
        <TouchableOpacity 
        onPress = {redirect_to_maps} 
        style = {stylesheet.buttonIcon}>
          <Image  
            style={stylesheet.locateButtonIcon} 
            source={require('../../../../../assets/img/icon/locate-Icon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress = {redirect_to_maps} 
        style = {defaultStylesheet.buttonSubtitleView}>
          <Text style = {stylesheet.buttonSubtitleText}>Localização:</Text>
          <Text style = {stylesheet.buttonSubtitleText}>Chácara Gouveia</Text>
        </TouchableOpacity>
      </View>
  )
}