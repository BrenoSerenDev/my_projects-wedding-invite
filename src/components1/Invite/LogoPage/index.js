import React, {useState} from 'react';
import {View, Image, Animated} from 'react-native';
import stylesheet from './style';

export default function Title(props){
const [viewOpacity, setViewOpacity] = useState( new Animated.Value(0))
Animated.timing(
  viewOpacity,
  {
    toValue:1,
    duration:2000,
    useNativeDriver: true,
  }
).start();

  
  console.log(props.ScrollPosition)
  return(
      <View style={stylesheet.content}>
      <Animated.View style={stylesheet.logoImgView,{opacity:viewOpacity}}>
        <Image  
        style={stylesheet.logoImg} 
        source={require('../../../../assets/img/icon/brasao.png')}/>
      </Animated.View>
    </View>
  )
}
