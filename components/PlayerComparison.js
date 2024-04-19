import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';



    export default function PlayerComparison(){
        const [playerStats, setPlayerStats] = useState([])
        const [player1, setPlayer1] = useState({})
        const [player2, setPlayer2] = useState({})
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

        const player1List = playerStats.filter(player => {
            if(player["Name"].toLowerCase().includes(search1.toLowerCase())) return player
        })

        


        return(
            <View>
                <View>
                    <Text>Player 1</Text>
                    <TextInput onChangeText={(text) => handleInputs(text, "player1")}/>
                </View>
                <View>
                    <Text>Player 2</Text>
                    <TextInput onChangeText={(text) => handleInputs(text, "player2")}/>
                </View>

            </View>
        )
    }