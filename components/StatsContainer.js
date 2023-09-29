import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import StatsCard from './StatsCard';

export default function StatsContainer() {
    const [playerStats, setPlaterStats] = useState([])
    const [nameSearch, setNameSearch] = useState('')

    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/players`)
        .then(resp => resp.json())
        .then(data => setPlaterStats(data.data))
    }, [])

    function handleSearch(newText){
        setNameSearch(newText)
    }

    const filteredPlayers = playerStats.filter((player) => {
        if (nameSearch === '') return true
        return `${player.first_name} ${player.last_name}`.toLowerCase().includes(nameSearch)
    })

    const playerDisplay = playerStats.map(player => {
        return <StatsCard lastName={player.last_name} firstName = {player.first_name}/>
    })

    return(
        <View>
            <TextInput onChangeText={handleSearch}/>
            {playerDisplay}
        </View>
    )
}