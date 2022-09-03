import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useWatchList } from "../../Contexts/WatchListContext";
import CoinItem from "../../components/CoinItem";
import { getWatchlistCoins } from "../../services/requests";

const WatchListScreen = () => {
  const { watchListCoinIds } = useWatchList();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const transformCoinIds = () => watchListCoinIds.join("%2C");

  const fetchWatchListedCoins = async () => {
    if (loading) {
      return true;
    }
    setLoading(true);
    const watchlistCoinsData =
      (await getWatchlistCoins(transformCoinIds())) || [];
    setCoins([...coins, ...watchlistCoinsData]);
    setLoading(false);
  };

  useEffect(() => {
    fetchWatchListedCoins();
  }, []);

  // useEffect(() => {
  //   refetchWatchListedCoins();
  // });

  return (
    <View>
      <FlatList
        data={coins}
        // renderItem={({ item }) => <CoinItem marketCoin={item} />}
      />
    </View>
  );
};

export default WatchListScreen;
