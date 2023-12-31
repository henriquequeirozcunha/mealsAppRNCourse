import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import { MaterialIcons } from '@expo/vector-icons'; 
import { useContext, useLayoutEffect, useState } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorite";
// import { FavoriteContext } from "../store/context/favorite-context";

function MealDetailScreen() {
    const [isFavorite, setIsFavorite] = useState(false)
    const route = useRoute()
    const nagivation = useNavigation()
    const mealId = route.params?.mealId
    // const favoriteMealsCtx = useContext(FavoriteContext)
    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

    const dispatch = useDispatch()
    const { ids: favoriteMealIds } = useSelector(state => state.favoriteMeals)

    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    const mealIsFavorite = favoriteMealIds.includes(mealId)

    useLayoutEffect(() => {
        nagivation.setOptions({
            headerRight: () => {
                return (
                    <IconButton 
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        onPress={handleChangeFavoriteStatus} 
                    />
                )
            }
        })
    }, [nagivation, handleChangeFavoriteStatus])

    function handleFavButton() {
        setIsFavorite(prev => !prev)
    }

    function handleChangeFavoriteStatus() {
        if (mealIsFavorite) {
            // favoriteMealsCtx.removeFavorite(mealId)
            dispatch(removeFavorite({ id: mealId }))
        } else {
            // favoriteMealsCtx.addFavorite(mealId)
            dispatch(addFavorite({ id: mealId }))
        }
    }

    return (
        <ScrollView style={styles.wrapper}>
            <View style={styles.favButton}>
                <Pressable onPress={handleFavButton}>
                    {isFavorite ? (
                        <MaterialIcons name="favorite" size={36} color='#e2b497' />
                    ) : (
                        <MaterialIcons name="favorite-outline" size={36} color='#e2b497' />
                    )}
                </Pressable>
            </View>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />

            <View style={styles.listContainer}>
                <SubTitle>Ingredients</SubTitle>
                <List data={selectedMeal.ingredients} />

                <SubTitle>Steps</SubTitle>
                <List data={selectedMeal.steps} />
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 12,
        position: 'relative'
    },
    favButton: {
        position: 'absolute',
        right: 15,
        top: 10,
        zIndex: 10,
        opacity: 0.8
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        width: '80%',
        alignSelf: 'center'
    }
})