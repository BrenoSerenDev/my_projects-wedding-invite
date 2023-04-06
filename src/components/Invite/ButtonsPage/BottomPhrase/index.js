import React from 'react';
import {View, Text, Image} from 'react-native';
import stylesheet from './style';
import defaultStylesheet from '../style'

export default function Title(){
  
  return(
      <View style = {stylesheet.content}>
          <Text style = {defaultStylesheet.bottomText}>
            TOQUE PARA INTERAGIR !
          </Text>
        
      </View>
  )
}