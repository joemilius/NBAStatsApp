import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function StatsCard({selectedPlayer, showCard, setShowCard}) {

    function handleHide(){
        setShowCard(!showCard)
    }
    return(
        <View>
            <Text>{selectedPlayer["Name"]}</Text>
            <Text>Points: {selectedPlayer['Points']}</Text>
            <Text>Rebounds: {selectedPlayer['Rebounds']}</Text>
            <Text>Assists: {selectedPlayer['Assists']}</Text>
            <Text>Steals: {selectedPlayer['Steals']}</Text>
            <Text>Blocks: {selectedPlayer['BlockedShots']}</Text>
            <Pressable onPress={handleHide}>
                <Text>
                    Hide Stats
                </Text>
            </Pressable>
        </View>
    )
}