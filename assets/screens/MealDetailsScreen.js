import { Text, View, Image, StyleSheet } from 'react-native';

import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

export default function MealDetailsScreen({route}) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const mealDetailsProps = {
    duration: meal.duration,
    complexity: meal.complexity,
    affordability: meal.affordability
  };

  return (
    <View>
      <Image source={{uri: meal.imageUrl}} style={styles.mealImage}/>
      <Text>{meal.title}</Text>
      <View>
        <MealDetails {...mealDetailsProps}/>
      </View>
      <Text>Ingredients: {meal.ingredients.length}</Text>
      {meal.ingredients.map((ingredient) => {
        <Text key={ingredient}>{ingredient}</Text>
      })}
      <Text>Steps: {meal.steps.length}</Text>
      {meal.steps.map((step) => {
        <Text key={step}>{step}</Text>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mealImage: {
    width: '100%',
    height: 200
  },
});
