import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StatsContainer from './components/StatsContainer';
import Routes from './components/Routes.js'
import SeasonLeaders from './components/SeasonLeaders.js'
import TeamStandings from './components/TeamStandings.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Routes}
        />
        <Stack.Screen
          name="Season Leaders"
          component={SeasonLeaders}
        />
        <Stack.Screen 
          name="Players"
          component={StatsContainer}
        />
        <Stack.Screen 
          name="Team Standings"
          component={TeamStandings}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
