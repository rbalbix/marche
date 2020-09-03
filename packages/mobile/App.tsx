/* eslint-disable camelcase */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';

import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_700Bold
} from '@expo-google-fonts/archivo';

import Routes from './src/routes';

export default function App() {
  const [fonstLoaded] = useFonts({
    ubuntu_700: Ubuntu_700Bold,
    archivo_400: Archivo_400Regular,
    archivo_500: Archivo_500Medium,
    archivo_700: Archivo_700Bold
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <Routes />
    </>
  );
}
