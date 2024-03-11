import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
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
        fetch(`https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2024?key=50567f38090849899283c5d9ffd1f55a`,{
            headers:{
                'Ocp-Apim-Subscription-Key': NBA_API_KEY,
            }
        })
        .then(resp => resp.json())
        .then(data => setPlayers(data))
        .catch(error => console.log(error))
    }, [])
    

    function showLists(listType){
        const newObj = {...listObj}
        for (key in newObj){
            if(key === listType){
                if(newObj[key]===false){
                    newObj[key] = true  
                }else{
                    newObj[key] = false
                }  
            }else{
                newObj[key] = false
            }
        }
        setListObj(newObj)
        // setListObj({...listObj, [listType]: !listObj[listType]})
    }

    const topPoints = [...players].sort((a,b) => b["Points"] - a["Points"])

    const topRebounds = [...players].sort((a,b) => b["Rebounds"] - a["Rebounds"])

    const topAssists = [...players].sort((a,b) => b["Assists"] - a["Assists"])

    const topSteals = [...players].sort((a,b) => b["Steals"] - a["Steals"])

    const topBlocks = [...players].sort((a,b) => b["BlockedShots"] - a["BlockedShots"])

    return(
        <View style={{flexDirection:'row'}}>
            <View style={homeStyles.buttonContainer}>
                <View style={homeStyles.topButtonContainer}>
                    <Pressable
                    style={homeStyles.topButtons}
                    onPress={(e)=> showLists("Top Points")}>
                        <Text>Top Points</Text>
                    </Pressable>
                    <Pressable
                    title="Top Rebounds"
                    color={listObj["Top Rebounds"] ? 'red' : 'blue'}
                    buttonStyle={homeStyles.topButtons}
                    onPress={(e)=> showLists("Top Rebounds")}
                    >
                        <Text>Top Rebounds</Text>
                    </Pressable>
                    <Pressable
                    buttonStyle={homeStyles.topButtons}
                    onPress={(e)=> showLists("Top Assists")}
                    >
                        <Text>Top Assists</Text>
                    </Pressable>
                    <Pressable
                    buttonStyle={homeStyles.topButtons}
                    onPress={(e)=> showLists("Top Steals")}
                    >
                        <Text>Top Steals</Text>
                    </Pressable>
                    <Pressable
                    buttonStyle={homeStyles.topButtons}
                    onPress={(e)=> showLists("Top Blocks")}
                    >
                        <Text>Top Blocks</Text>
                    </Pressable>
                </View>
            </View>
            <View style={homeStyles.playerList}>
                <Text>Player List</Text>
                {listObj["Top Points"] ?
                topPoints.slice(0, 10).map(player => {
                    return <Text key={player["PlayerID"]}>{`${player["Name"]}: ${parseInt(player["Points"])} total points`}</Text>
                })
                : null}
                {listObj["Top Rebounds"] ? 
                topRebounds.slice(0, 10).map(player => {
                    return <Text key={player["PlayerID"]}>{`${player["Name"]}: ${parseInt(player["Rebounds"])} total rebounds`}</Text>
                })
                : null}
                {listObj["Top Assists"] ? 
                topAssists.slice(0, 10).map(player => {
                    return <Text key={player["PlayerID"]}>{`${player["Name"]}: ${parseInt(player["Assists"])} total assists`}</Text>
                })
                : null}
                {listObj["Top Steals"] ? 
                topSteals.slice(0, 10).map(player => {
                    return <Text key={player["PlayerID"]}>{`${player["Name"]}: ${parseInt(player["Steals"])} total steals`}</Text>
                })
                : null}
                {listObj["Top Blocks"] ? 
                topBlocks.slice(0, 10).map(player => {
                    return <Text key={player["PlayerID"]}>{`${player["Name"]}: ${parseInt(player["BlockedShots"])} total blocks`}</Text>
                })
                : null}
            </View>
        </View>
    );


}
const homeStyles = StyleSheet.create({
    buttonContainer:{
        flex:1,
        // display:'flex',
        marginTop: 20,
        justifyContent:'flex-start',
        borderColor:'blue',
        borderTopWidth:2,
        borderLeftWidth:2,
        borderBottomWidth:2,
        
    },
    topButtonContainer:{
        // display:'flex',
        flexDirection: 'column',
        justifyContent:'flex-start',
        width:100,
        
    },
    topButtons:{
        textAlign:'center',
        borderColor:'red',
        borderWidth:2
    },
    playerList:{
        marginTop:20,
        width:275,
        borderColor:'blue',
        borderWidth:2

        

    },
    playerListHeader:{
        marginRight:60
    }
})