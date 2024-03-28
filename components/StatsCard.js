import { StyleSheet, Text, View } from 'react-native';

export default function StatsCard({selectedPlayer}) {

    return(
        <View>
            <Text>{selectedPlayer["Name"]}</Text>
        </View>
    )
}