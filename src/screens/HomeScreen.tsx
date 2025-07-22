import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PlaceSearch } from '../components/PlaceSearch';
import { MapViewComponent } from '../components/MapViewComponent';
import { SearchHistory } from '../components/SearchHistory';

export const HomeScreen: FC = () => (
  <SafeAreaView style={styles.container}>
    <PlaceSearch />
    <MapViewComponent />
    <SearchHistory />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
});
