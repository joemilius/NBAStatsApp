import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import StatsCard from './StatsCard';

export default function StatsContainer() {
    const [playerStats, setPlaterStats] = useState([])
    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/players`)
        .then(resp => resp.json())
        .then(data => setPlaterStats(data.data))
    }, [])

    

    const playerDisplay = playerStats.map(player => {
        return <StatsCard lastName={player.last_name} firstName = {player.first_name}/>
    })

    return(
        <View>
            <TextInput />
            {playerDisplay}
        </View>
    )
}