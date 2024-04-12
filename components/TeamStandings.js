import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import EastStandings from './EastStandings';
import WestStandings from './WestStandings';


export default function TeamStandings(){
    const [standingsToggle, setStandingsToggle] = useState('East')
    const [standings, setStandings] = useState([])

    useEffect(() => {
        fetch(`https://api.sportsdata.io/v3/nba/scores/json/Standings/2024?key=50567f38090849899283c5d9ffd1f55a`)
        .then(resp => resp.json())
        .then(data => {
            setStandings(data)
        })
    }, [])

    function handleEastWestToggle(conference){
        setStandingsToggle(conference)
    }

    const eastStandings = standings.filter(team => team["Conference"] === 'Eastern').sort((teamA, teamB) => teamB['Wins'] - teamA['Wins'])
    const westStandings = standings.filter(team => team['Conference'] === 'Western').sort((teamA, teamB) => teamB['Wins'] - teamA['Wins'])
    console.log(eastStandings)
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
            {standingsToggle === 'East'? <EastStandings eastStandings={eastStandings}/>: <WestStandings westStandings={westStandings}/>}

        </View>
    )
}