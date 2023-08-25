import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from './assets/screens/CategoriesScreen';
import MealsOverviewScreen from './assets/screens/MealsOverviewScreen';
import MealDetailsScreen from './assets/screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();


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
            name='MealsCategories'
            component={CategoriesScreen}
            options={{title: 'All Categories'}}
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
