import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'

function IconButton({ icon, color = 'white', onPress }) {
    return (
       <Pressable 
        onPress={() => onPress && onPress()}
        style={({ pressed }) => {
           return pressed && styles.pressed
        }}
        >
            <Ionicons name={icon} size={24} color={color} />
       </Pressable> 
    )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})