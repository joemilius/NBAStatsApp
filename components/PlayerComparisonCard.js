import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';

export default function PlayerComparisonCard({player, handlePickNew, section}){
    return(
        <View>
            <Text>{player['Name']}</Text>
            <Pressable onPress={() => handlePickNew(section)}>
                <Text>Pick A New Player</Text>
            </Pressable>
        </View>
    )
}