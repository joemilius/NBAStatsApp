import React, {useState, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
//import { Router, Scene } from 'react-native-router-flux'
import StatsContainer from './StatsContainer';
import Home from './Home'

export default function Routes(){

    return(
        // <Router>
        //     <Scene key='root'>
        //         <Scene key = 'home' component = {Home} title = "Home" initial = {true}/>
        //     </Scene>
        // </Router>
        <View>
            <Home />
        </View>
    )
}