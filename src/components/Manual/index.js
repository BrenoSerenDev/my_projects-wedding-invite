import React, {useRef} from 'react';
import {StyleSheet, View, Dimensions, Animated, StatusBar} from 'react-native';
import TitlePage from './TitlePage'
import OurDayPage from './OurDayPage'
import GodmotherPage from './GodmotherPage'
import GroomsmenPage from './GroomsmenPage'
import GreatDayPage from './GreatDayPage'
import normalize from '../../widgets/Fonts/Normalize';

export default function Main(){
  
  return(
    <View>
        <StatusBar barStyle='dark-content' translucent={true} backgroundColor={'transparent'}/>
        <Animated.ScrollView 
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews={true}
          horizontal={true}
          style={stylesheet.content}>
          <TitlePage />
          <OurDayPage />
          <GodmotherPage />
          <GroomsmenPage />
          <GreatDayPage />
        </Animated.ScrollView>
      </View>
  )
}
const stylesheet = StyleSheet.create({
  content: {
    backgroundColor:'#fae6e6',
    width: Dimensions.get('screen').width + normalize(100)   
  },
});