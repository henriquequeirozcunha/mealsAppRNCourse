import { useContext } from "react"
import MealList from "../components/MealsList/MealList"
import { FavoriteContext } from "../store/context/favorite-context"
import { MEALS } from "../data/dummy-data"
import { StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"

function FavoriteScreen() {
    // const favoriteMealsCtx = useContext(FavoriteContext)
    const { ids: favoriteMealIds } = useSelector(state => state.favoriteMeals)

    // const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))
    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id))

    if (!favoriteMeals.length) {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>You have no favorite meals yet</Text>
            </View>
        )
    }

    return (
        <MealList items={favoriteMeals} />
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})