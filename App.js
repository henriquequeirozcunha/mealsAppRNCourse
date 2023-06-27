import 'react-native-gesture-handler';

import { Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverview';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoriteContextProvider from './store/context/favorite-context';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNagivator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: {
          backgroundColor: '#351401'
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
      }}
    >
      <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          )
        }} />
      <Drawer.Screen 
        name='Favorites' 
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          )
        }}  />
    </Drawer.Navigator>
  )
}
 
export default function App() {
  return (
    <>
      <StatusBar style='light' />

      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
          >
            <Stack.Screen 
              name='Drawer' 
              // component={CategoriesScreen}
              component={DrawerNagivator} 
              options={{
                title: 'All Categories',
                headerShown: false
              }}
            />
            <Stack.Screen 
              name='MealsOverview' 
              component={MealsOverviewScreen} 
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId

              //   return {
              //     title: catId
              //   }
              // }}
            />
            <Stack.Screen 
              name='MealDetail' 
              component={MealDetailScreen} 
              options={{
                // headerRight: () => {
                //   return (
                //     <Button title='Tap me' />
                //   )
                // }
                title: 'About the meal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});
