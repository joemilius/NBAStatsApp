import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';


export default function Home(){
    const [players, setPlayers] = useState([])
    //stats endpoint gives individual stats for a game not total for season 
    //decide if season is what to figure out or do top in last 7 days
    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/stats`)
        .then(resp => resp.json())
        .then(data => setPlaterStats(data.data))
    }, [])

    const topPoints = [...players].sort((p1, p2) => p1.pts - p2.pts)

    const topRebounds = [...players].sort()

    const topAssists = [...players].sort()

    const topSteals = [...players].sort()

    const topBlocks = [...players].sort()

    return(
        <View>
            <Pressable>Top Points</Pressable>
            <Pressable>Top Rebounds</Pressable>
            <Pressable>Top Assists</Pressable>
            <Pressable>Top Steals</Pressable>
            <Pressable>Top Blocks</Pressable>
        </View>
    )
}