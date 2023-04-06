import React, {useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, Dimensions, PanResponder,View} from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import LogoPage from './LogoPage'
import NamesPage from './NamesPage'
import ButtonsPage from './ButtonsPage'


export default function Main({navigation}){

  return(
        <Animated.ScrollView 
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        style={stylesheet.content}
        >
            <LogoPage/>
            <NamesPage/>
            <ButtonsPage NavigationData = {navigation}/>
        </Animated.ScrollView>
  )
}

const stylesheet = StyleSheet.create({
    content: {
    flex:1,
    backgroundColor: '#fae6e6',
  },
});