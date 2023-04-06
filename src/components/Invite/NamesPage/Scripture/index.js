import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import stylesheet from './style'
export default function Main(){

  return(
      <View style={stylesheet.content}>
        <Text style={stylesheet.scripture}>
        " Agora, permanecem a fé, a esperança e o amor. Porém o maior destes é o amor. "
        </Text>
        <Text style={stylesheet.scriptureComment}>
        1 Coríntios 13:13
        </Text>
      </View>
  )
}