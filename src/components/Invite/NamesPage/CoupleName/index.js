import React from 'react';
import {View, Text} from 'react-native';
import stylesheet from './style'
export default function Main(){

  return(
      <View style={stylesheet.content}>
        <Text style={stylesheet.names} allowFontScaling={false}>Bianca & Breno</Text>
      </View>
  )
}