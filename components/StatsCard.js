import { StyleSheet, Text, View } from 'react-native';

export default function StatsCard({firstName, lastName}) {

    return(
        <View>
            <Text>{lastName}, {firstName}</Text>
        </View>
    )
}