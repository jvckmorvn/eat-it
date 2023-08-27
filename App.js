import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import CategoriesScreen from './assets/screens/CategoriesScreen';
import MealsOverviewScreen from './assets/screens/MealsOverviewScreen';
import MealDetailsScreen from './assets/screens/MealDetailsScreen';
import FavouritesScreen from './assets/screens/FavouritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Categories' component={CategoriesScreen}/>
      <Drawer.Screen name='Favourites' component={FavouritesScreen}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#920'
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#9996'
            }
          }}
        >
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name='MealDetails'
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
