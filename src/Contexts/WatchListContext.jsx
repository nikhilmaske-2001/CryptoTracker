import React, { createContext, useContext, useState } from "react";

const WatchListContext = createContext();

export const useWatchList = () => useContext(WatchListContext);

const WatchListProvider = ({ children }) => {
  const [watchListCoinIds, setwatchListCoinIds] = useState([]);
  return (
    <WatchListContext.Provider value={{ watchListCoinIds }}>
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListProvider;
