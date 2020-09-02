/* eslint-disable camelcase */
import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';

import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import {
  Archivo_400Regular,
  Archivo_700Bold
} from '@expo-google-fonts/archivo';

import Routes from './src/routes';

export default function App() {
  const [fonstLoaded] = useFonts({
    Ubuntu_700Bold,
    Archivo_400Regular,
    Archivo_700Bold
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8257E5" />
      <Routes />
    </>
  );
}
