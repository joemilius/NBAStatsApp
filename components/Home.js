import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {NBA_API_KEY} from '@env'




export default function Home(){
    const [players, setPlayers] = useState([])
    const [listObj, setListObj] = useState({
        "Top Points": false,
        "Top Rebounds": false,
        "Top Assists": false,
        "Top Steals": false,
        "Top Blocks": false
    })
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
    console.log(NBA_API_KEY)
    console.log(process.env.NBA_API_KEY)

    function showLists(listType){
        setListObj({...listObj, [listType]: !listObj[listType]})
    }
    console.log(listObj)

    const topPoints = [...players]

    const topRebounds = [...players]

    const topAssists = [...players]

    const topSteals = [...players]

    const topBlocks = [...players]

    return(
        <View>
           
            <Button
            title="Top Points"
            onPress={(e)=> showLists("Top Points")}
            />
            {listObj["Top Points"] ? 
            <Text>Points</Text>: null}
            <Button
            title="Top Rebounds"
            onPress={(e)=> showLists("Top Rebounds")}
            />
            {listObj["Top Rebounds"] ? 
            <Text>Points</Text>: null}
            <Button
            title="Top Assists"
            onPress={(e)=> showLists("Top Assists")}
            />
            {listObj["Top Assists"] ? 
            <Text>Points</Text>: null}
            <Button
            title="Top Steals"
            onPress={(e)=> showLists("Top Steals")}
            />
            {listObj["Top Steals"] ? 
            <Text>Points</Text>: null}
            <Button
            title="Top Blocks"
            onPress={(e)=> showLists("Top Blocks")}
            />
            {listObj["Top Blocks"] ? 
            <Text>Points</Text>: null}
        </View>
    )
}