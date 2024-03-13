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
        <View style={{flexDirection:'column'}}>
            <View style={homeStyles.topButtonContainer}>
                <Pressable
                style={listObj["Top Points"] ? homeStyles.pressedTopButtons : homeStyles.topButtons}
                onPress={(e)=> showLists("Top Points")}>
                    <Text style={homeStyles.buttonText}>Top Points</Text>
                </Pressable>
                <Pressable
                style={listObj["Top Rebounds"] ? homeStyles.pressedTopButtons : homeStyles.topButtons}
                onPress={(e)=> showLists("Top Rebounds")}
                >
                    <Text style={homeStyles.buttonText}>Top Rebounds</Text>
                </Pressable>
                <Pressable
                style={listObj["Top Assists"] ? homeStyles.pressedTopButtons : homeStyles.topButtons}
                onPress={(e)=> showLists("Top Assists")}
                >
                    <Text style={homeStyles.buttonText}>Top Assists</Text>
                </Pressable>
                <Pressable
                style={listObj["Top Steals"] ? homeStyles.pressedTopButtons : homeStyles.topButtons}
                onPress={(e)=> showLists("Top Steals")}
                >
                    <Text style={homeStyles.buttonText}>Top Steals</Text>
                </Pressable>
                <Pressable
                style={listObj["Top Blocks"] ? homeStyles.pressedTopButtons : homeStyles.topButtons}
                onPress={(e)=> showLists("Top Blocks")}
                >
                    <Text style={homeStyles.buttonText}>Top Blocks</Text>
                </Pressable>
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
    topButtonContainer:{
        // display:'flex',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent:'center',
        
        
    },
    topButtons:{
        textAlign:'center',
        backgroundColor: 'blue',
        borderRadius: 4,
        marginLeft:2,
        
    },
    pressedTopButtons:{
        textAlign:'center',
        backgroundColor: 'red',
        borderRadius: 4,
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        
    },
    playerList:{
        marginTop:20,
        // width:275,
        borderColor:'blue',
        borderWidth:2,
        borderRadius: 8,
    },
    playerListHeader:{
        marginRight:60,
        textAlign:'center'
    }
})