import React, { useEffect } from 'react';
import {Image, Dimensions, Animated, StatusBar} from 'react-native';
import stylesheet from './style';
import { useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Main(){
    const navigation = useNavigation();

  useEffect(() => {
    const delay = setTimeout(() => {
      navigation.replace('Invite');
    }, 2500); // 3000ms = 3 segundos

    return () => clearTimeout(delay);
  }, [navigation]);
  return(
        <Animated.View style={[stylesheet.content]}>
            <StatusBar barStyle='dark-content' translucent={true} backgroundColor={'transparent'}/>
            <Image  
            style={stylesheet.splash}
            source={require('../../../assets/img/splash/splash.gif')}/>
        </Animated.View>
  )
}