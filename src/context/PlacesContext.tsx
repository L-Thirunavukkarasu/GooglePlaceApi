import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from 'react';
import { getHistory, saveHistory } from '../utills/storage';
import { Place } from '../types';

interface PlacesContextData {
  history: Place[];
  selectedPlace: Place | null;
  setSelectedPlace: (place: Place | null) => void;
  addToHistory: (place: Place) => void;
}

export const PlacesContext = createContext<PlacesContextData>({
  history: [],
  selectedPlace: null,
  setSelectedPlace: () => {},
  addToHistory: () => {},
});

interface Props {
  children: ReactNode;
}

export const PlacesProvider: FC<Props> = ({ children }) => {
  const [history, setHistory] = useState<Place[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  useEffect(() => {
    (async () => {
      const saved = await getHistory();
      setHistory(saved);
    })();
  }, []);

  const addToHistory = async (place: Place) => {
    if (!history.find(h => h.place_id === place.place_id)) {
      const newHistory = [place, ...history];
      setHistory(newHistory);
      await saveHistory(newHistory);
    }
  };

  return (
    <PlacesContext.Provider
      value={{ history, selectedPlace, setSelectedPlace, addToHistory }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
