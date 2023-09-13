import { StyleSheet, Text, View } from 'react-native';

export default function StatsContainer() {
    fetch(`https://www.balldontlie.io/api/v1/players`)
    .then(resp => resp.json())
    .then(data => console.log(data.data))

    return(
        <View>
            <Text>This is the Stats Container</Text>
        </View>
    )
}