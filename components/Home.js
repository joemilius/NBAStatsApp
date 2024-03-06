import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {NBA_API_KEY} from '@env'




export default function Home(){
    const [players, setPlayers] = useState([])
    //stats endpoint gives individual stats for a game not total for season 
    //decide if season is what to figure out or do top in last 7 days
    useEffect(() => {
        fetch(`https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2023?key=50567f38090849899283c5d9ffd1f55a`,{
            headers:{
                'Ocp-Apim-Subscription-Key': NBA_API_KEY,
            }
        })
        .then(resp => resp.json())
        .then(data => setPlayers(data))
        .catch(error => console.log(error))
    }, [])
    console.log(process.env.NBA_API_KEY)

    const topPoints = [...players]

    const topRebounds = [...players]

    const topAssists = [...players]

    const topSteals = [...players]

    const topBlocks = [...players]

    return(
        <View>
           
            <Button
            title="Top Points"
            />
            <Button
            title="Top Rebounds"
            />
            <Button
            title="Top Assists"
            />
            <Button
            title="Top Steals"
            />
            <Button
            title="Top Blocks"
            />
        </View>
    )
}