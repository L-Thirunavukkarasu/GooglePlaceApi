import React, { useContext, useRef, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Dimensions } from 'react-native';
import { PlacesContext } from '../context/PlacesContext';

const { width, height } = Dimensions.get('window');

export default function MapViewComponent() {
  const { selectedPlace } = useContext(PlacesContext);
  const mapRef = useRef();

  useEffect(() => {
    if (selectedPlace) {
      mapRef.current.animateToRegion({
        latitude: selectedPlace.location.lat,
        longitude: selectedPlace.location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
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
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: width, height: height },
});
