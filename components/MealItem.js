import { useNavigation } from "@react-navigation/native"
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import MealDetails from "./MealDetails"

function MealItem({ id: mealId, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation()

    function handleSelectMealItem() {
        navigation.navigate('MealDetail', {
            mealId: mealId
        })
    }

    return (
        <View style={styles.wrapper}>
            <Pressable 
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    pressed ? styles.buttonPressed : null
                ]}
                onPress={handleSelectMealItem}
                >
                    <View style={styles.innerContainer}>
                        <View>
                            <Image source={{ uri: imageUrl }} style={styles.image} />
                            <Text style={styles.title}>{ title }</Text>
                        </View>

                        <MealDetails 
                            duration={duration} 
                            complexity={complexity} 
                            affordability={affordability}
                        />
                    </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    wrapper: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    buttonPressed: {
        opacity: 0.5
    }
})