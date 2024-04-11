import React, {useState, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Button} from 'react-native';
//import { Router, Scene } from 'react-native-router-flux'
import StatsContainer from './StatsContainer';
import SeasonLeaders from './SeasonLeaders'

export default function Routes({navigation}){

    return(
        <View>
            <Button 
                title="Season Leaders"
                onPress={() => navigation.navigate('SeasonLeaders', {name: 'SeasonLeaders'})}
            />
            <Button 
                title="Player Stats"
                onPress={() => navigation.navigate('Players', {name: 'Players'})}
            />
             <Button 
                title="Team Standings"
                onPress={() => navigation.navigate('TeamStandings', {name: 'Players'})}
            />
        </View>

    )
}