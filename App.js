import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/components/Routes/stack';
import { useFonts } from 'expo-font';

export default function App() {
const [fontsLoaded] = useFonts({
    "Shelley-Andante": require('./assets/fonts/Shelley/ShelleyAndante.ttf'),
    "Arapey-Regular": require('./assets/fonts/Arapey/Arapey-Regular.ttf'),
    "Maitree-Light": require('./assets/fonts/Maitree/Maitree-Light.ttf'),
    "OpenSans-Light": require('./assets/fonts/Open-Sans/OpenSans-Light.ttf'),
    "Daydream": require('./assets/fonts/Daydream/daydream-regular.ttf'),
    "Gracialind-Bold": require('./assets/fonts/GlacialIndiff/GlacialIndifference-Bold.otf'),
    "Gracialind": require('./assets/fonts/GlacialIndiff/GlacialIndifference-Regular.otf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
  );
  }
