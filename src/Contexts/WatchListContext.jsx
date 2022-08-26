import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WatchListContext = createContext();

export const useWatchList = () => useContext(WatchListContext);

const WatchListProvider = ({ children }) => {
  const [watchListCoinIds, setwatchListCoinIds] = useState([]);

  const getWatchListData = () => {
    try {
        const jsonValue = await AsyncStorage.getItem("@watchlist_coins");
        setwatchListCoinIds(jsonValue != null ? JSON.parse(jsonValue): []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWatchListData();
  }, []);
  return (
    <WatchListContext.Provider value={{ watchListCoinIds }}>
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListProvider;
