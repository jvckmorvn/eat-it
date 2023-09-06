import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';

import { FavouritesContext } from '../store/context/favourites-context';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';

export default function FavouritesScreen() {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const favouriteMeals = MEALS.filter(meal => favouriteMealsCtx.ids.includes(meal.id))

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet</Text>
      </View>
    )
  }

  return (
    <MealsList items={favouriteMeals}/>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 160
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'brown'
  }
});
