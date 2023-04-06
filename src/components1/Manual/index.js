import React, {useRef} from 'react';
import {StyleSheet, Dimensions, Animated} from 'react-native';
import TitlePage from './TitlePage'
import OurDayPage from './OurDayPage'
import GodmotherPage from './GodmotherPage'
import GroomsmenPage from './GroomsmenPage'
import GreatDayPage from './GreatDayPage'

export default function Main(){
  
  return(
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
  )
}
const stylesheet = StyleSheet.create({
  content: {
    backgroundColor:'#fae6e6',
    width: Dimensions.get('screen').width + 100
  },
});
