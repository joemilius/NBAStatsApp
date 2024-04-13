import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';


export default function WestStandings({westStandings}){

    const displayTeams = westStandings.map((team) => {
        return (
            <View style={westStyles.teamRows}>
                <Text>{team['Name']} </Text>
                <Text>{team['Wins']} </Text>
                <Text>{team['Losses']}</Text>
            </View>
        )
    })
    return(
        <View>
            {displayTeams}
        </View>
    )
}

const westStyles = StyleSheet.create({
    teamRows: {
        flexDirection: 'row'
    }
})