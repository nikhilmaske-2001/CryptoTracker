import React from "react";
import { View, Text, FlatList } from "react-native";
import { useWatchList } from "../../Contexts/WatchListContext";
import CoinItem from "../../components/CoinItem";

const WatchListScreen = () => {
  const { watchListCoinIds } = useWatchList();
  return (
    <View>
      <FlatList
        data={watchListCoinIds}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
      />
    </View>
  );
};

export default WatchListScreen;
