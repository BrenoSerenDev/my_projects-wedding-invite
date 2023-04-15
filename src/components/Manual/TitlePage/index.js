import React from 'react';
import {View, Text, Image, Platform} from 'react-native';
import stylesheet from './style';
import main_stylesheet from '../style';
import { Device } from 'expo-device';





const isIos = (Platform.OS === 'ios');

export default function Main(){
  
  return(
      <View style={main_stylesheet.content}>
        <View style={main_stylesheet.frame}>
          <Text style={stylesheet.manualTitle} allowFontScaling={false}>
            <Text style={stylesheet.topText} {... isIos ?numberOfLines=1:null}{... isIos ?adjustsFontSizeToFit = true:null}>Manual{'\n'}</Text>
            <Text style={stylesheet.middleText} {... isIos ?numberOfLines=1:null}{... isIos ?adjustsFontSizeToFit = true:null}>dos{'\n'}</Text>
            <Text style={stylesheet.bottomText}  {... isIos ?numberOfLines=1:null}{... isIos ?adjustsFontSizeToFit = true:null}>Avós</Text>
          </Text>
        </View>
          
        <Image
          style = {main_stylesheet.topFlower}
          source = {require('../../../../assets/img/manual/border-flower.png')}
        />
        <Image
          style = {main_stylesheet.bottomFlower}
          source = {require('../../../../assets/img/manual/border-flower.png')}
        />
      </View>
  )
}