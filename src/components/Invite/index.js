import {StyleSheet, Dimensions,View} from 'react-native';
import Animated from 'react-native-reanimated';

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