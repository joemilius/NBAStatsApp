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
    
    return(
        <View style={{flex:1}}>
            <View stlye={standingsStyles.buttonsContainer}>
            <Pressable style={standingsToggle === 'East' ? standingsStyles.selectedConferecnceButton: standingsStyles.conferecnceButton} onPress={() => handleEastWestToggle('East')}>
                <Text style={standingsStyles.buttonsText}>East Standings</Text>
            </Pressable>
            <Pressable style={standingsToggle === 'West' ? standingsStyles.selectedConferecnceButton: standingsStyles.conferecnceButton} onPress={() => handleEastWestToggle('West')}>
                <Text style={standingsStyles.buttonsText}>West Standings</Text>
            </Pressable>
        </View>
            <View>
            {standingsToggle === 'East'? <EastStandings eastStandings={eastStandings}/>: <WestStandings westStandings={westStandings}/>}
            </View>
        </View>
    )
}

const standingsStyles = StyleSheet.create({
    buttonsContainer:{
        flexDirection: 'row'
    },
    selectedConferecnceButton: {
        backgroundColor: 'red',
        borderRadius: 8,
        width: 175,
    },
    conferecnceButton: {
        backgroundColor: 'blue',
        borderRadius: 8,
        width: 175
    },
    buttonsText:{
        textAlign: 'center',
        color: 'white'
    }
})