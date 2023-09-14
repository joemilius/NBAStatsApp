import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StatsContainer() {
    const [playerStats, setPlaterStats] = useState([])
    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/players`)
        .then(resp => resp.json())
        .then(data => setPlaterStats(data.data))
    }, [])

    return(
        <View>
            <Text>This is the Stats Container</Text>
        </View>
    )
}