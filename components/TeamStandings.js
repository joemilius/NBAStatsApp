import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import EastStandings from './EastStandings';
import WestStandings from './WestStandings';


export default function TeamStandings(){
    const [standingsToggle, setStandingsToggle] = useState('East')

    return(
        <View>
            <Text>East Standings</Text>
            <Text>West Standings</Text>
            {standingsToggle === 'East'? <EastStandings />: <WestStandings />}

        </View>
    )
}