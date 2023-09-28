import { StyleSheet, Text, View } from 'react-native';

export default function StatsCard({firstName, lastName}) {

    return(
        <View>
            <Text>{firstName}{lastName}</Text>
        </View>
    )
}