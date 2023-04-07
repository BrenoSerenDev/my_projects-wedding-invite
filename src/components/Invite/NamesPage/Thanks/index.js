import React from 'react';
import {View, Text} from 'react-native';
import stylesheet from './style'
export default function Main(){

  return(
      <View style={stylesheet.content}>
        <View style={stylesheet.topPhraseContent}>
          <Text style={stylesheet.topPhraseText} allowFontScaling={false}>COM A BENÇÃO DE DEUS E DE SEUS PAIS</Text>
        </View>

        <View style={stylesheet.parentsNamesView}>
          <View style={stylesheet.wpNamesView}>
            <Text multiline={false} style={stylesheet.wpNamesText} allowFontScaling={false}>João R. da Costa Martins</Text> 
            <Text style={stylesheet.wpNamesText} allowFontScaling={false}>Flávia M. Oliveira Martins</Text>
          </View>
          
          <View style={stylesheet.hpNamesView}>
            <Text style={stylesheet.hpNamesText} allowFontScaling={false}>Leandro Longo da Silva</Text> 
            <Text style={stylesheet.hpNamesText} allowFontScaling={false}>Flávia Seren Da Silva</Text>
          </View>
        </View>
        
        <View style={stylesheet.bottomPhraseView}>
          <Text style={stylesheet.bottomPhraseText} allowFontScaling={false}>CONVIDAM PARA O SEU CASAMENTO</Text>
        </View>
      </View>
  )
}