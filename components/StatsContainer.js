import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import StatsCard from './StatsCard';
import {NBA_API_KEY} from '@env'

export default function StatsContainer() {
    const [playerStats, setPlayerStats] = useState([])
    const [nameSearch, setNameSearch] = useState('')
    const [showCard, setShowCard] = useState(false)
    const [selectedPlayer, setSelectedPlayer] = useState({
    })

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

    const searchedPlayers = playerStats.filter((player) => {
        if (nameSearch === '') return true
        return player["Name"].toLowerCase().includes(nameSearch.toLowerCase())
    })

    const playerDisplay = searchedPlayers.slice(0,20).map(player => {
        return (
            <View>
                <Pressable onPress={() => handlePlayerPress(player)}>
                <Text>{player["Name"]}</Text>
                </Pressable>
            </View>
        )
    })

    return(
        <View>
            <TextInput onChangeText={handleSearch}/>
            {showCard ? 
            <StatsCard selectedPlayer={selectedPlayer}/>
            :
            playerDisplay}
        </View>
    )
}