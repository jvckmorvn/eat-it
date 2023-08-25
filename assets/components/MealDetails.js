import { View, Text } from 'react-native';

export default function MealDetails() {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailItem}>{duration}"</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}