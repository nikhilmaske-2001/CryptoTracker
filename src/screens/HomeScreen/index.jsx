import React, { useEffect, useState } from "react";
import CoinItem from "../../components/CoinItem";
import { ActivityIndicator, FlatList } from "react-native";
import { getMarketData } from "../../services/requests";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    const fetchedCoins = await getMarketData();
    setCoins(fetchedCoins);
    setLoading(false);
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
    />
  );
};

export default HomeScreen;
