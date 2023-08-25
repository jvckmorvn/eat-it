import { View, Text, StyleSheet } from 'react-native';

export default function MealDetails({duration, complexity, affordability}) {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailItem}>{duration}"</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 6,
    fontSize: 12
  },
});
