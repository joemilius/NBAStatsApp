import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';


export default function EastStandings({eastStandings}){

    const displayTeams = eastStandings.map((team) => {
        return (
            <View>
                <Text>{team['Name']}</Text>
                <Text>{team['Wins']}</Text>
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