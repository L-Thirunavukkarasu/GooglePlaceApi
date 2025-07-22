import React, { FC, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PlacesContext } from '../context/PlacesContext';
import { GOOGLE_PLACES_API_KEY } from '@env';
import { Place } from '../types';

interface Details {
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

export const PlaceSearch: FC = () => {
  const { setSelectedPlace, addToHistory } = useContext(PlacesContext);

  return (
    <GooglePlacesAutocomplete
      placeholder="Search places"
      fetchDetails
      onPress={(data, details: Details | null) => {
        if (!details) return;
        const place: Place = {
          place_id: data.place_id,
          name: data.structured_formatting.main_text,
          address: data.description,
          location: details.geometry.location,
        };
        setSelectedPlace(place);
        addToHistory(place);
      }}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en',
      }}
      styles={{
        container: { flex: 0 },
        textInputContainer: { backgroundColor: '#fff' },
        listView: { backgroundColor: '#fff' },
      }}
      predefinedPlaces={[]}
      textInputProps={{}}
      minLength={2}
      timeout={1000}
    />
  );
};
