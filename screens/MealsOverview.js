import { useNavigation, useRoute } from "@react-navigation/native"
import { CATEGORIES, MEALS } from "../data/dummy-data"
import { useLayoutEffect } from "react"
import MealList from "../components/MealsList/MealList"

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

   return <MealList items={displayedMeals} />
}

export default MealsOverviewScreen