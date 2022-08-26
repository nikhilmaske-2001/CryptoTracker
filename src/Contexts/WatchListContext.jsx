import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WatchListContext = createContext();

export const useWatchList = () => useContext(WatchListContext);

const WatchListProvider = ({ children }) => {
  const [watchListCoinIds, setwatchListCoinIds] = useState([]);

  const getWatchListData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@watchlist_coins");
      setwatchListCoinIds(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWatchListData();
  }, []);

  const storeWatchListCoinId = async (coinId) => {
    try {
      const newWatchList = [...watchListCoinIds, coinId];
      const jsonValue = JSON.stringify(newWatchList);
      await AsyncStorage.setItem("@watchlist_coins", jsonValue);
      setwatchListCoinIds(newWatchList);
    } catch (error) {
      console.log(error);
    }
  };

  const removeWatchListCoinId = async (coinId) => {
    const newWatchList = watchListCoinIds.filter(
      (coinIdValue) => coinIdValue !== coinId
    );
    const jsonValue = JSON.stringify(newWatchList);
    await AsyncStorage.setItem("@watchlist_coins", jsonValue);
    setwatchListCoinIds(newWatchList);
  };

  return (
    <WatchListContext.Provider
      value={{ watchListCoinIds, storeWatchListCoinId, removeWatchListCoinId }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListProvider;
