import { StyleSheet, Text, View } from "react-native"

function MealDetails({ duration, complexity, affordability, containerStyle, textStyle }) {
    return (
        <View style={[styles.contentWrapper, containerStyle]}>
            <Text style={[styles.contentItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.contentItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.contentItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    contentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        columnGap: 6
    },
    contentItem: {
        fontSize: 12
    }
})