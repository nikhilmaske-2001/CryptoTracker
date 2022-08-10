import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import CoinDetailedScreen from './src/screens/CoinDetailsScreen';


import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <CoinDetailedScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  }
});


