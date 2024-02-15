import { StyleSheet, Text, View } from 'react-native';

export default function StatsCard({selectedPlayer}) {

    return(
        <View>
            <Text>{selectedPlayer.lastName}, {selectedPlayer.firstName}</Text>
        </View>
    )
}