import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';



    export default function PlayerComparison(){
        const [playerStats, setPlayerStats] = useEffect([])
        const [player1, setPlayer1] = useEffect({})
        const [player2, setPlayer2] = useEffect({})

        useEffect(() => {
            fetch(`https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2024?key=50567f38090849899283c5d9ffd1f55a`,{
                headers:{
                    'Ocp-Apim-Subscription-Key': NBA_API_KEY,
                }})
            .then(resp => resp.json())
            .then(data => setPlayerStats(data))
        }, [])

        return(
            <View>

            </View>
        )
    }