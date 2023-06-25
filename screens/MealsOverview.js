import { useRoute } from "@react-navigation/native"
import { FlatList, StyleSheet, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem"

function renderMealItem(itemData) {
    return <MealItem {...itemData.item} />
}

function MealsOverviewScreen() {
    const route = useRoute()
    const { categoryId } = route.params 

    const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.includes(categoryId))

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item => item.id)}
                renderItem={renderMealItem} />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})