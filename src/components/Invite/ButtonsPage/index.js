import React from 'react';
import {View, Image} from 'react-native';
import stylesheet from './style';
import LocalButton from './localButton';
import ManualButton from './ManualButton';
import BottomPhrase from './BottomPhrase';

export default function Title(props){

  return(
      <View style = {stylesheet.content}>
        <View style = {stylesheet.buttonsContent}>
          <LocalButton/>
          <ManualButton NavigationData = {props.NavigationData}/>
          <BottomPhrase/> 
        </View>
      </View>
  )
}