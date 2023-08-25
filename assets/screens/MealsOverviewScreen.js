import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useLayoutEffect } from 'react';

import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

export default function MealsOverviewScreen({route, navigation}) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0
  });

  useLayoutEffect(() => {
    const title = CATEGORIES.find((category) => category.id === categoryId).title;

    navigation.setOptions({
      title: title
    });
  }, [categoryId, navigation]);

  function renderMeal(itemData) {
    const item = itemData.item;

    function pressHandler() {
      navigation.navigate('MealDetails', {
        categoryId: item.id
      });
    }

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      onPress: pressHandler
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
