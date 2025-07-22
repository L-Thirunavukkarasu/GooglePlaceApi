import React, { useContext, FC } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { PlacesContext } from '../context/PlacesContext';
import { samplePlacesArray } from '../utills/storage';
import { Place } from 'types';

const screenWidth = Dimensions.get('window').width;

export const SearchHistory: FC = () => {
  const { history, setSelectedPlace } = useContext(PlacesContext);

  const renderItemView = ({ item }: { item: Place }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => setSelectedPlace(item)}
      >
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address} numberOfLines={3}>
            {item.address}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search History</Text>
      <FlatList
        //here is the place 'history' keyvalue pair comes.due to google places api key invalid - billing account requirement
        data={samplePlacesArray}
        keyExtractor={item => item.place_id}
        renderItem={({ item }) => renderItemView({ item })}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },
  heading: { fontSize: 18, marginBottom: 8 },
  item: {
    marginEnd: 10,
    width: screenWidth * 0.5,
    height: screenWidth * 0.3,
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
  },
  name: { fontWeight: 'bold' },
  address: { color: '#555' },
});
