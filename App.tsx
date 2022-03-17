import React, { useEffect } from 'react';
import { LogBox, Platform, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import * as Linking from 'expo-linking';
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
const prefix = Linking.createURL('/');

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins" 

import theme from './src/global/styles/theme';
import { StatusBar } from 'expo-status-bar';
import { AppRoutes } from './src/routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes/stack.routes';
import { AppProvider } from './src/Provider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const linking = {
    prefixes: [prefix],
  };
  useEffect(()=>{
    Platform.OS === 'android' ? LogBoxS() : console.log('web')
    return () => {      
      new AbortController().abort()
    } 
  },[])

  function LogBoxS(){
    LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
    LogBox.ignoreLogs(["Setting a timer"]);
  }

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    
    <AppProvider>
      <ThemeProvider theme={theme}>
      <StatusBar style="dark" backgroundColor="#fff" />
      <NavigationContainer>
      <StackRoutes />
      </NavigationContainer>
      </ThemeProvider>
    </AppProvider>
  );
}