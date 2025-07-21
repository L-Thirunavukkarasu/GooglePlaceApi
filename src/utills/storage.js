import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = 'places_search_history';

export async function getHistory() {
  try {
    const json = await AsyncStorage.getItem(HISTORY_KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Failed to load history', e);
    return [];
  }
}

export async function saveHistory(history) {
  try {
    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (e) {
    console.error('Failed to save history', e);
  }
}

//due to google places api key billing account requirement - manually added static places details
export const samplePlacesArray = [
  {
    place_id: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
    name: 'Sydney Opera House',
    address: 'Sydney Opera House, Bennelong Point, Sydney NSW, Australia',
    location: { lat: -33.8567844, lng: 151.2152967 },
  },
  {
    place_id: 'ChIJD7fiBh9u5kcRYJSMaMOCCwQ',
    name: 'Eiffel Tower',
    address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
    location: { lat: 48.8583701, lng: 2.2944813 },
  },
];
