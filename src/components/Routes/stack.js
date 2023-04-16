import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Invite from '../Invite'
import Manual from '../Manual'
import Splash from '../Splash'


const StackNavigator = createNativeStackNavigator();

export default function Stack (){

	return (
        <StackNavigator.Navigator style={{backgroundColor:'black'}} initialRouteName = "Splash" screenOptions={{
    headerShown: false,
  }}>
          <StackNavigator.Screen 
                name='Splash' 
                component={Splash}
            />
          <StackNavigator.Screen 
                name='Invite' 
                component={Invite}
            />
          <StackNavigator.Screen 
                name='Manual' 
                component={Manual}
            />
      </StackNavigator.Navigator> 
      )
}
       