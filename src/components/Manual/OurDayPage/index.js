import React from 'react';
import {View, Text, Image} from 'react-native';
import stylesheet from './style';
import main_stylesheet from '../style';


export default function Main(){
  return(
      <View style={main_stylesheet.content}>
        <View style={main_stylesheet.frame}>
          <View>
            <Text allowFontScaling={false}  style={stylesheet.ourDayText}>Nosso Dia</Text>
            <View style = {stylesheet.calendar}>
                <Text allowFontScaling={false}  style={stylesheet.calendarTitle}>DEZEMBRO/2023</Text>
                <View style = {stylesheet.calendarFirstRow}>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarFirstRowText}>D</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarFirstRowText}>S</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarFirstRowText}>T</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarFirstRowText}>Q</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarFirstRowText}>Q</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarFirstRowText}>S</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarFirstRowText}>S</Text>
                  </View>
                </View>

                <View style = {stylesheet.calendarRow}>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}> </Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}> </Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}> </Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}> </Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}> </Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>1</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Image
                      style = {stylesheet.heartDay}
                      source = {require('../../../../assets/img/manual/date-heart.png')}
                    />
                    <Text allowFontScaling={false}  style={stylesheet.greatDay}>2</Text>
                  </View>
                </View>

                <View style = {stylesheet.calendarRow}>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>3</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>4</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>5</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>6</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>7</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>8</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>9</Text>
                  </View>
                </View>

                <View style = {stylesheet.calendarRow}>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>10</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>11</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>12</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>13</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>14</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>15</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>16</Text>
                  </View>
                </View>

                <View style = {stylesheet.calendarRow}>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>17</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>18</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>19</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>20</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>21</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>22</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>23</Text>
                  </View>
                </View>

                <View style = {stylesheet.calendarRow}>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>24</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>25</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>26</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>27</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>28</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>29</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>30</Text>
                  </View>
                </View>

                <View style = {stylesheet.calendarRow}>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}>31</Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}> </Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}> </Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}> </Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}> </Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}> </Text>
                  </View>
                  <View style={stylesheet.calendarCol}>
                    <Text allowFontScaling={false}  style={stylesheet.calendarText}> </Text>
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