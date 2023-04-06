import React from 'react';
import {View, Text, Image} from 'react-native';
import stylesheet from './style';
import main_stylesheet from '../style';


export default function Main(){
  return(
      <View style={main_stylesheet.content}>
        <View style={main_stylesheet.frame}>
          <View style={stylesheet.instructions}>
            <Text style={stylesheet.TitleText}>Para o Grande Dia</Text>
             <View style={stylesheet.instructionBoxes}>
            <View style={stylesheet.box1, stylesheet.defaultBox}>
              <Image
                style = {stylesheet.box1Icon}
                source = {require('../../../../assets/img/manual/relogio.png')}
              />
              <Text style={stylesheet.boxTextDefault}>Chegar com meia hora de antecedência ao local da cerimônia. Sem atrasos, ok?</Text>
            </View>
            <View style={stylesheet.box1, stylesheet.defaultBox}>
              <Image
                style = {stylesheet.box2Icon}
                source = {require('../../../../assets/img/manual/atencao.png')}
              />
              <Text style={stylesheet.boxTextDefault}>Não esquecer o convite individual.</Text>
            </View>
            <View style={stylesheet.box1, stylesheet.defaultBox}>
              <Image
                style = {stylesheet.box3Icon}
                source = {require('../../../../assets/img/manual/camera.png')}
              />
              <Text style={stylesheet.boxTextDefault}>Tirar muitas fotos e fazer vários vídeos, assim, vocês nos ajudarão a eternizar esse momento!</Text>
            </View>
            <View style={stylesheet.box1, stylesheet.defaultBox}>
              <Image
                style = {stylesheet.box4Icon}
                source = {require('../../../../assets/img/manual/carinha.png')}
              />
              <Text style={stylesheet.boxTextDefault}>Divirtam-se muito!</Text>
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