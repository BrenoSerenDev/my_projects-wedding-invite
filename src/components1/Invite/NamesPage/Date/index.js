import React from 'react';
import {View, Text} from 'react-native';
import stylesheet from './style'
export default function Main(){

  return(
      <View style={stylesheet.content}>
        <View style={stylesheet.textContent}>
          <View style={stylesheet.dateView}>
            <Text style={stylesheet.date02Text}>02</Text>
            <Text style={stylesheet.dateDezText}>DEZ</Text>
            <Text style={stylesheet.date2023Text}>2023</Text>
          </View>
        

          <View style={{backgroundColor:'black', padding:1, height:100, margin:10,}}>

          </View>
          <View style={stylesheet.hourView}>
            <Text style={stylesheet.hourSabadoText}>
              SÁBADO
            </Text>
            <Text style={stylesheet.hourText}>
              16h30min
            </Text>
          </View>
        </View>
      </View>
  )
}