import React from 'react';
import 'react-native-get-random-values';
import { PlacesProvider } from './src/context/PlacesContext';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <PlacesProvider>
      <HomeScreen />
    </PlacesProvider>
  );
}
