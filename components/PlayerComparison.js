import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import PlayerComparisonCard from './PlayerComparisonCard'



    export default function PlayerComparison(){
        const [playerStats, setPlayerStats] = useState([])
        const [player1, setPlayer1] = useState(null)
        const [player2, setPlayer2] = useState(null)
        const [search1, setSearch1] = useState('')
        const [search2, setSearch2] = useState('')

        useEffect(() => {
            fetch(`https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2024?key=50567f38090849899283c5d9ffd1f55a`,{
                headers:{
                    'Ocp-Apim-Subscription-Key': NBA_API_KEY,
                }})
            .then(resp => resp.json())
            .then(data => setPlayerStats(data))
        }, [])

        function handleInputs(text, inputSrc){
            if (inputSrc === "player1"){
                setSearch1(text)
            }else if (inputSrc === "player2"){
                setSearch2(text)
            }
        }

        function handlePlayerChoice(playerObj, playerInput){
            if(playerInput === 'player1' && playerObj !== player2){
                setPlayer1(playerObj)
            }else if (playerInput === 'player2' && playerObj !== player1){
                setPlayer2(playerObj)
            }else{
                
            }
        }

        const player1List = playerStats.filter(player => {
            if(player["Name"].toLowerCase().includes(search1.toLowerCase())) return player
        })

        const player2List = playerStats.filter(player => {
            if(player["Name"].toLowerCase().includes(search2.toLowerCase())) return player
        })

        const player1Render = player1List.slice(0,5).map(player => {
            return(
                <View>
                    <Text>{player["Name"]}</Text>
                    <Pressable onPress={(e) => handlePlayerChoice(player, 'player1')}>
                        <Text>Choose</Text>
                    </Pressable>
                </View>
            )
        })

        const player2Render = player2List.slice(0,5).map(player => {
            return(
                <View>
                    <Text>{player["Name"]}</Text>
                    <Pressable onPress={(e) => handlePlayerChoice(player, 'player2')}>
                        <Text>Choose</Text>
                    </Pressable>
                </View>
            )
        })

        return(
            <View>
                <View>
                    <View>
                        <Text>Player 1</Text>
                        <TextInput onChangeText={(text) => handleInputs(text, "player1")}/>
                        {player1
                        ? 
                        <PlayerComparisonCard player={player1}/>
                        :
                        player1Render}
                    </View>
                    <View>
                        <Text>Player 2</Text>
                        <TextInput onChangeText={(text) => handleInputs(text, "player2")}/>
                        {player2
                        ? 
                        <PlayerComparisonCard player={player2}/>
                        :
                        player2Render}
                    </View>
                </View>
            </View>
        )
    }