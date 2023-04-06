import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Animated} from 'react-native';
import Scripture from './Scripture'
import CoupleName from './CoupleName'
import Thanks from './Thanks'
import Date from './Date'

export default function Title(props){
  console.log(props.ScrollPosition)
  
  return(
      <View style={stylesheet.content}>
        <Scripture/>
        <CoupleName/>
        <Thanks/>
        <Date/>
      </View>
  )
}

const stylesheet = StyleSheet.create({
  content: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
   },
});