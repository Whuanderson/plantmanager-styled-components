import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications'

import { Routes } from './src/routes';
import AppLoading from 'expo-app-loading';

import { theme } from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import { PlantProps } from './src/libs/storage';

import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
} from '@expo-google-fonts/jost';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular,
  });

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data)
      });

    return () => subscription.remove();

    /*       async function notifications() {
            await Notifications.cancelAllScheduledNotificationsAsync();
    
            const data = await Notifications.getAllScheduledNotificationsAsync();
            console.log(data);
          }
          notifications(); */
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='dark' />
      <Routes />
    </ThemeProvider >
  );
}
