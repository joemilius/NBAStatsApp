import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StatsContainer from './components/StatsContainer';
import Routes from './components/Routes.js'
import Home from './components/Home.js'

export default function App() {
  return (
    <View style={styles.container}>
       <Home styles={styles}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
