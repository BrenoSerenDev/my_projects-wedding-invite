import React from 'react';
import {View, Text, Image} from 'react-native';
import stylesheet from './style';
import main_stylesheet from '../style';


export default function Main(){
  return(
      <View style={main_stylesheet.content}>
        <View style={main_stylesheet.frame}>
          <View style={stylesheet.instructions}>
          <Text allowFontScaling={false}  style={stylesheet.TitleText}>Para o Pai</Text>
            <Text allowFontScaling={false}  style={stylesheet.instructionsText}>Para que nosso dia fique ainda mais lindo e você mais elegante, escolhemos padronizar os trajes dos pais.
Portanto, gostaríamos que você usasse <Text allowFontScaling={false}  style={{fontFamily:'Gracialind-Bold'}}>camisa branca, terno cinza e a gravata no mesmo tom do vestido da mãe.</Text></Text>
          </View>
          <View style={stylesheet.colorPallete}>
            <Text allowFontScaling={false}  style={stylesheet.colorsTitleText}>Pais de Cinza</Text>
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