import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function StatsContainer() {
    const [playerStats, setPlaterStats] = useState([])
    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/players`)
        .then(resp => resp.json())
        .then(data => setPlaterStats(data.data))
    }, [])

    console.log(playerStats)

    const playerDisplay = playerStats.map(player => {
        return <Text>{player.last_name}, {player.first_name}</Text>
    })

    return(
        <View>
            <TextInput />
            {playerDisplay}
        </View>
    )
}