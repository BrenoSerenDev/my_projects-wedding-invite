import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Invite from '../Invite'
import Manual from '../Manual'

const StackNavigator = createNativeStackNavigator();

export default function Stack (){

	return (
        <StackNavigator.Navigator initialRouteName = "Invite" screenOptions={{
    headerShown: false
  }}>
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
       