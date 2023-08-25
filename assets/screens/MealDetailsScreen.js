import { Text, View, Image, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';

export default function MealDetailsScreen({route}) {
  const mealId = route.params.mealId;

  const meal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{uri: meal.imageUrl}} style={styles.mealImage}/>
      <Text>{meal.title}</Text>
      <View>

      </View>
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mealImage: {
    width: '100%',
    height: 200
  },
});
