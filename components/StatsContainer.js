import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import StatsCard from './StatsCard';

export default function StatsContainer() {
    const [playerStats, setPlaterStats] = useState([])
    const [nameSearch, setNameSearch] = useState('')
    const [showCard, setShowCard] = useState(false)

    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/players`)
        .then(resp => resp.json())
        .then(data => setPlaterStats(data.data))
    }, [])

    function handleSearch(newText){
        setNameSearch(newText)
    }

    const seearchedPlayers = playerStats.filter((player) => {
        if (nameSearch === '') return true
        return `${player.first_name} ${player.last_name}`.toLowerCase().includes(nameSearch.toLowerCase())
    })

    const playerDisplay = seearchedPlayers.map(player => {
        return (
            <View>
                <Text>{lastName}, {firstName}</Text>
            </View>
        )
    })

    return(
        <View>
            <TextInput onChangeText={handleSearch}/>
            {showCard ? 
            <StatsCard />
            :
            playerDisplay}
        </View>
    )
}