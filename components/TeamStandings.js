import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import EastStandings from './EastStandings';
import WestStandings from './WestStandings';


export default function TeamStandings(){
    const [standingsToggle, setStandingsToggle] = useState('East')

    function handleEastWestToggle(division){
        setStandingsToggle(division)
    }

    return(
        <View>
            <View>
                <Pressable onPress={() => handleEastWestToggle('East')}>
                    <Text>East Standings</Text>
                </Pressable>
                <Pressable onPress={() => handleEastWestToggle('West')}>
                    <Text>West Standings</Text>
                </Pressable>
            </View>
            {standingsToggle === 'East'? <EastStandings />: <WestStandings />}

        </View>
    )
}