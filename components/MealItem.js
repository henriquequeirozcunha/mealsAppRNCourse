import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
    return (
        <View style={styles.wrapper}>
            <Pressable 
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    pressed ? styles.buttonPressed : null
                ]}
                >
                    <View style={styles.innerContainer}>
                        <View>
                            <Image source={{ uri: imageUrl }} style={styles.image} />
                            <Text style={styles.title}>{ title }</Text>
                        </View>

                        <View style={styles.contentWrapper}>
                            <Text style={styles.contentItem}>{duration}m</Text>
                            <Text style={styles.contentItem}>{complexity.toUpperCase()}</Text>
                            <Text style={styles.contentItem}>{affordability.toUpperCase()}</Text>
                        </View>
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
    contentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        columnGap: 6
    },
    contentItem: {
        fontSize: 12
    },
    buttonPressed: {
        opacity: 0.5
    }
})