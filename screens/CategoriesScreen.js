import { FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

function renderCategoryItem({ itemData, navigation }) {
    function handleOnPress() {
        navigation && navigation.navigate('MealsOverview', {
            categoryId: itemData.item.id
        })
    }

    return (
        <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color} 
            onPress={handleOnPress}/>
    )
}

function CategoriesScreen({ navigation }) {
    return (
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => renderCategoryItem({ itemData, navigation })}
            numColumns={2}
        />
    )
}

export default CategoriesScreen