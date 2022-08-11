import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CoinDetailedScreen from './src/screens/CoinDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';


export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#121212"
        }
      }}
    >
      <View style={styles.container}>
        <Navigation />
        {/* <HomeScreen /> */}
        {/* <CoinDetailedScreen /> */}
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  }
});


