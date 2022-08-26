import React from "react";
import { View, Text } from "react-native";
import { useWatchList } from "../../Contexts/WatchListContext";

const WatchListScreen = () => {
  const { value } = useWatchList();
  return (
    <View>
      <Text style={{ color: "white" }}>Hello WatchList</Text>
    </View>
  );
};

export default WatchListScreen;
