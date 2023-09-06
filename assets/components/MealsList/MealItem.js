import { View, Pressable, Text, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MealDetails from '../MealDetails';

export default function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
  const navigation = useNavigation();
  const mealDetailsProps = {
    duration,
    complexity,
    affordability
  };

  function pressHandler() {
    navigation.navigate('MealDetails', {
      mealId: id
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({pressed}) => pressed ? styles.buttonPressed : null} 
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails {...mealDetailsProps}/>
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
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  buttonPressed: {
    opacity: 0.8
  }
});
