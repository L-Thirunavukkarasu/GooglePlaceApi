import React, { FC } from 'react';
import 'react-native-get-random-values';
import { PlacesProvider } from './src/context/PlacesContext';
import { HomeScreen } from './src/screens/HomeScreen';

const App: FC = () => (
  <PlacesProvider>
    <HomeScreen />
  </PlacesProvider>
);

export default App;
