import { View, Text, StyleSheet, FlatList } from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

export default function MealOverviewScreen({route}) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0
  });

  function renderMeal(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    };

    return <MealItem {...mealItemProps}/>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
      <Text>Meal Overview Screen - {categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
