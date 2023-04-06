import React from 'react';
import {View, Text, Image} from 'react-native';
import stylesheet from './style';
import main_stylesheet from '../style';


export default function Main(){
  return(
      <View style={main_stylesheet.content}>
        <View style={main_stylesheet.frame}>
          <View style={stylesheet.instructions}>
          <Text style={stylesheet.TitleText}>Para o Padrinho</Text>
            <Text style={stylesheet.instructionsText}>Para que nosso dia fique ainda mais lindo e você mais elegante, escolhemos padronizar os trajes dos padrinhos.
Portanto, gostaríamos que você usasse <Text style={{fontFamily:'Gracialind-Bold'}}>camisa branca, terno cinza e a gravata no mesmo tom do vestido da madrinha.</Text></Text>
          </View>
          <View style={stylesheet.colorPallete}>
            <Text style={stylesheet.colorsTitleText}>Padrinhos de Cinza</Text>
            <View style ={stylesheet.colorBoxBorder1}>
              <View style={stylesheet.colorBoxBorder2}>
                <View style={stylesheet.colorBoxColor1}>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image
          style = {main_stylesheet.topFlower}
          source = {require('../../../../assets/img/manual/border-flower.png')}
        />
      </View>
  )
}