import React, { createContext, useContext } from "react";

const WatchListContext = createContext();

export const useWatchList = () => useContext(WatchListContext);

const WatchListProvider = ({ children }) => {
  return (
    <WatchListContext.Provider value={{ value: "yay" }}>
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListProvider;
