import { FlatList, StyleSheet, View } from "react-native"
import MealItem from "./MealItem"

function renderMealItem(itemData) {
    return <MealItem {...itemData.item} />
}

function MealList({ items }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item => item.id)}
                renderItem={renderMealItem} />
        </View>
    )
}

export default MealList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})