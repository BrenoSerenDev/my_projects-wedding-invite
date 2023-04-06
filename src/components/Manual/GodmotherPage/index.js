import React from 'react';
import {View, Text, Image} from 'react-native';
import stylesheet from './style';
import main_stylesheet from '../style';


export default function Main(){
  return(
      <View style={main_stylesheet.content}>
        <View style={main_stylesheet.frame}>
          <View style={stylesheet.instructions}>
          <Text style={stylesheet.TitleText}>Para a Madrinha</Text>
            <Text style={stylesheet.instructionsText}>Queremos que você  se sinta linda, por isso, sugerimos para esse dia tão especial, um <Text style={{fontFamily:'Gracialind-Bold'}}>vestido longo, sem brilho</Text>, com o tecido que desejar, <Text style={{fontFamily:'Gracialind-Bold'}}>dentro da paleta de cores abaixo.</Text></Text>
          </View>
          <View style={stylesheet.colorPallete}>
            <Text style={stylesheet.colorsTitleText}>Madrinhas de Rosa</Text>
            <View style ={stylesheet.colorBoxBorder1}>
              <View style={stylesheet.colorBoxBorder2}>

                <View style={stylesheet.colorBoxColor1}>
                </View>
                <View style={stylesheet.colorBoxColor2}>
                </View>
                <View style={stylesheet.colorBoxColor3}>
                </View>
                <View style={stylesheet.colorBoxColor4}>
                </View>
                <View style={stylesheet.colorBoxColor5}>
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