import { Pressable, View, Text, StyleSheet } from 'react-native';

export default function CategoryGridTile({title, colour}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({pressed}) =>
        [styles.button,
        pressed ? styles.buttonPressed : null]}>
        <View style={[styles.innerContainer, {backgroundColor: colour}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 12,
    height: 150,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {height: 1},
    shadowRadius: 4,
    backgroundColor: 'white'
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.8
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});