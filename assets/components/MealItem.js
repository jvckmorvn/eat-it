import { View, Pressable, Text, Image, StyleSheet, Platform } from 'react-native';

export default function MealItem({title, imageUrl, duration, complexity, affordability}) {
  return (
    <View style={styles.mealItem}>
      <Pressable>
        <View>
          <Image source={{uri: imageUrl}} style={styles.image}/>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailItem}>{duration}"</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS == 'android' ? 'hidden' : 'visible',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {height: 1},
    shadowRadius: 4,
    backgroundColor: 'white'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 6,
    fontSize: 12
  }
});
