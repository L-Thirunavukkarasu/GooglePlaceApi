import React, { createContext, useState, useEffect } from 'react';
import { getHistory, saveHistory, samplePlacesArray } from '../utills/storage';

export const PlacesContext = createContext();

export function PlacesProvider({ children }) {
  const [history, setHistory] = useState(samplePlacesArray);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    async function load() {
      const saved = await getHistory();
      if (saved) setHistory(saved);
    }
    load();
  }, []);

  const addToHistory = async place => {
    // avoid duplicates
    const exists = history.find(h => h.place_id === place.place_id);
    const newHistory = exists ? history : [place, ...history];
    setHistory(newHistory);
    await saveHistory(newHistory);
  };

  return (
    <PlacesContext.Provider
      value={{
        history,
        selectedPlace,
        setSelectedPlace,
        addToHistory,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
}
