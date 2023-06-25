import { useNavigation, useRoute } from "@react-navigation/native"
import { FlatList, StyleSheet, View } from "react-native"
import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem"
import { useLayoutEffect } from "react"

function renderMealItem(itemData) {
    return <MealItem {...itemData.item} />
}

function MealsOverviewScreen() {
    const route = useRoute()
    const navigation = useNavigation()
    const { categoryId } = route.params 

    useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(item => item.id === categoryId)?.title

    navigation.setOptions({
        title: categoryTitle
    })
    }, [categoryId])
    

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