import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import StatsCard from './StatsCard';
import {NBA_API_KEY} from '@env'

export default function StatsContainer() {
    const [playerStats, setPlayerStats] = useState([])
    const [nameSearch, setNameSearch] = useState('')
    const [showCard, setShowCard] = useState(false)
    const [selectedPlayer, setSelectedPlayer] = useState({})
    const [playerListIndex, setPlayerListIndex] = useState(0)

    useEffect(() => {
        fetch(`https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2024?key=50567f38090849899283c5d9ffd1f55a`,{
            headers:{
                'Ocp-Apim-Subscription-Key': NBA_API_KEY,
            }})
        .then(resp => resp.json())
        .then(data => setPlayerStats(data))
    }, [])
    console.log(playerStats[0])
    function handleSearch(newText){
        setNameSearch(newText)
    }

    function handlePlayerPress(playerObj){
        setShowCard(!showCard)
        setSelectedPlayer(playerObj)
    }
    function nextPlayers(){
        setPlayerListIndex(playerListIndex + 20)
    }
    const searchedPlayers = playerStats.filter((player) => {
        if (nameSearch === '') return true
        return player["Name"].toLowerCase().includes(nameSearch.toLowerCase())
    })

    const playerDisplay = searchedPlayers.slice(playerListIndex,playerListIndex + 20).map(player => {
        return (
            <View key={player["Name"]}>
                <Pressable onPress={() => handlePlayerPress(player)}>
                <Text>{player["Name"]}</Text>
                </Pressable>
            </View>
        )
    })

    return(
        <View style={playerStyles.playerListContainer}>
            <Text>Search Player</Text>
            <TextInput style={playerStyles.searchStyle} onChangeText={handleSearch}/>
            {showCard ? 
            <StatsCard selectedPlayer={selectedPlayer}/>
            :
            <View style={playerStyles.playerListContainer}>
            {playerDisplay}
            <Text>...</Text>
            <Pressable onPress={nextPlayers}>
                <Text>Press for More Players</Text>
            </Pressable>
            </View>}
        </View>
    )
}

const playerStyles = StyleSheet.create({
    playerListContainer: {
        marginTop: 20,
    },
    searchStyle:{
        borderColor: "blue",
        borderWidth: 2,
        borderRadius: 4,
        width: 200
    }
})