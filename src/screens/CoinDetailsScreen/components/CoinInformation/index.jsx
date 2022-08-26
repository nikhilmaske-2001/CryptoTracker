import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";

const CoinInformation = (props) => {
  const { description } = props;
  return (
    <View style={{ height: 500, marginTop: 20 }}>
      <ScrollView>
        <Text style={{ color: "white", fontSize: 15 }}>{description}</Text>
      </ScrollView>
    </View>
  );
};

export default CoinInformation;
