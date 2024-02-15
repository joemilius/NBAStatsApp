import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import StatsCard from './StatsCard';

export default function StatsContainer() {
    const [playerStats, setPlaterStats] = useState([])
    const [nameSearch, setNameSearch] = useState('')
    const [showCard, setShowCard] = useState(false)
    const [selectedPlayer, setSelectedPlayer] = useState({
    })

    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/players`)
        .then(resp => resp.json())
        .then(data => setPlaterStats(data.data))
    }, [])

    function handleSearch(newText){
        setNameSearch(newText)
    }

    function handlePlayerPress(playerObj){
        setShowCard(!showCard)
        setSelectedPlayer(playerObj)
    }

    const searchedPlayers = playerStats.filter((player) => {
        if (nameSearch === '') return true
        return `${player.first_name} ${player.last_name}`.toLowerCase().includes(nameSearch.toLowerCase())
    })

    const playerDisplay = searchedPlayers.map(player => {
        return (
            <View>
                <Pressable onPress={() => handlePlayerPress(player)}>
                <Text>{player.lastName}, {player.firstName}</Text>
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