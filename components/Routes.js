import React, {useState, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Button} from 'react-native';
//import { Router, Scene } from 'react-native-router-flux'
import StatsContainer from './StatsContainer';
import Home from './Home'

export default function Routes({navigation}){

    return(
        <View>
            <Button 
                title="Season Leaders"
                onPress={() => navigation.navigate('Home', {name: 'Home'})}
            />
            <Button 
                title="Player Stats"
                onPress={() => navigation.navigate('Players', {name: 'Players'})}
            />
        </View>

    )
}