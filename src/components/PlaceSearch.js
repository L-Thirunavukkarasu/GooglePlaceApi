import React, { useContext } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PlacesContext } from '../context/PlacesContext';
import { GOOGLE_PLACES_API_KEY } from '@env';

export default function PlaceSearch() {
  const { setSelectedPlace, addToHistory } = useContext(PlacesContext);

  return (
    <GooglePlacesAutocomplete
      placeholder="Search for a place"
      fetchDetails
      onPress={(data, details = null) => {
        const place = {
          place_id: data.place_id,
          name: data.structured_formatting.main_text,
          address: data.description,
          location: details.geometry.location,
        };
        //console.log(place, data, details);
        setSelectedPlace(place);
        addToHistory(place);
      }}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en',
      }}
      styles={styles.container}
      predefinedPlaces={[]}
      textInputProps={{}}
      minLength={2}
      timeout={1000}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    container: { flex: 0 },
    listView: { backgroundColor: 'white' },
  },
});
