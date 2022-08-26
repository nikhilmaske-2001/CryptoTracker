import React from "react";
import { View, Image, Text } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const CoinDetailHeader = (props) => {
  const { image, symbol, marketCapRank } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name="chevron-back-sharp"
        size={30}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tickerContainer}>
        <Image
          source={{ uri: image }}
          style={{ width: 30, height: 30 }}
        ></Image>
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>

      <FontAwesome name="star-o" size={24} color="white" />
    </View>
  );
};

export default CoinDetailHeader;
