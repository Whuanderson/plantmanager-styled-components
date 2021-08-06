import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
} from '@expo-google-fonts/jost';
import { theme } from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='dark' />
      <Routes />
    </ThemeProvider >
  );
}
