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
                onPress={() => navigation.navigate('Season Leaders', {name: 'SeasonLeaders'})}
            />
            <Button 
                title="Player Stats"
                onPress={() => navigation.navigate('Players', {name: 'Players'})}
            />
             <Button 
                title="Team Standings"
                onPress={() => navigation.navigate('Team Standings', {name: 'Players'})}
            />
            <Button 
                title="Player Comparison"
                onPress={() => navigation.navigate('Player Comparison', {name: 'Players'})}
            />
        </View>

    )
}