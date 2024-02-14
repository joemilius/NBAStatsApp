import React, {useState, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import StatsContainer from './StatsContainer';

export default function Routes(){

    return(
        <Router>
            <Scene key='root'>
                <Scene key = 'home' component = {StatsContainer} title = "Home" initial = {true}/>
            </Scene>
        </Router>
    )
}