import React, { useState } from "react";
import { View, Text, Dimensions, TextInput } from "react-native";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailHeader from "./components/CoinDetailedHeader";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;

  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState(current_price.usd.toString());

  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value) || 0;
    setUsdValue((floatValue * current_price.usd).toString());
  };

  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value) || 0;
    setCoinValue((floatValue / current_price.usd).toString());
  };

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoinDetailHeader
        image={small}
        name={name}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currentPrice}>
            $
            {tooltipPos.visible
              ? tooltipPos.value.toFixed(2)
              : current_price.usd.toFixed(2)}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: { percentageColor },
            paddingVertical: 8,
            paddingHorizontal: 3,
            borderRadius: 5,
            flexDirection: "row",
          }}
        >
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            color="white"
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.priceChange}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View>
        <LineChart
          data={{
            datasets: [
              {
                data: prices.map((price) => price[1]),
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={250}
          chartConfig={{
            color: () =>
              current_price.usd > prices[0][1] ? "#16c784" : "#ea3943",
            propsForDots: {
              r: "0",
            },
          }}
          withHorizontalLabels={false}
          withInnerLines={false}
          bezier
          style={{
            marginVertical: 8,
            paddingRight: 0,
            borderRadius: 16,
          }}
          decorator={() => {
            return tooltipPos.visible ? (
              <View>
                <Svg>
                  <Rect
                    x={tooltipPos.x - 15}
                    y={tooltipPos.y + 10}
                    width="40"
                    height="30"
                    fill="black"
                  />
                  <TextSVG
                    x={tooltipPos.x + 5}
                    y={tooltipPos.y + 30}
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {tooltipPos.value.toFixed(2)}
                  </TextSVG>
                </Svg>
              </View>
            ) : null;
          }}
          onDataPointClick={(data) => {
            let isSamePoint =
              tooltipPos.x === data.x && tooltipPos.y === data.y;

            isSamePoint
              ? setTooltipPos((previousState) => {
                  return {
                    ...previousState,
                    value: data.value,
                    visible: !previousState.visible,
                  };
                })
              : setTooltipPos({
                  x: data.x,
                  value: data.value,
                  y: data.y,
                  visible: true,
                });
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
          <Text style={{ color: "white" }}>{symbol.toUpperCase()}</Text>
          <TextInput
            style={styles.input}
            value={coinValue}
            onChangeText={changeCoinValue}
            keyboardType="numeric"
          />
        </View>

        <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
          <Text style={{ color: "white" }}>USD</Text>
          <TextInput
            style={styles.input}
            value={usdValue}
            onChangeText={changeUsdValue}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};

export default CoinDetailedScreen;
