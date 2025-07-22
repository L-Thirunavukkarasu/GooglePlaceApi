import React, { useContext, useRef, useEffect, FC } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { PlacesContext } from '../context/PlacesContext';

const { width, height } = Dimensions.get('window');

export const MapViewComponent: FC = () => {
  const { selectedPlace } = useContext(PlacesContext);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (selectedPlace && mapRef.current) {
      const region: Region = {
        latitude: selectedPlace.location.lat,
        longitude: selectedPlace.location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      mapRef.current.animateToRegion(region);
    }
  }, [selectedPlace]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {selectedPlace && (
          <Marker
            coordinate={{
              latitude: selectedPlace.location.lat,
              longitude: selectedPlace.location.lng,
            }}
            title={selectedPlace.name}
            description={selectedPlace.address}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width, height: height },
});
