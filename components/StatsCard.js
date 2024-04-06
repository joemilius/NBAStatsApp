import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function StatsCard({selectedPlayer, showCard, setShowCard}) {

    function handleHide(){
        setShowCard(!showCard)
    }
    return(
        <View>
            <Text>{selectedPlayer["Name"]}</Text>
            <Pressable onPress={handleHide}>
                <Text>
                    Hide Stats
                </Text>
            </Pressable>
        </View>
    )
}