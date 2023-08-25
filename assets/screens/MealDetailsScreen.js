import { Text } from 'react-native';

export default function MealDetailsScreen({route}) {
  const categoryId = route.params.categoryId;

  return (
    <Text>{categoryId}</Text>
  );
}
