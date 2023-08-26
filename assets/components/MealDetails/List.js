import { Text, View, StyleSheet } from 'react-native';

export default function List({listable}) {
  return (
    listable.map((listItem) => (
      <View key={listItem}>
        <Text style={styles.itemText}>{listItem}</Text>
      </View>
    ))
  );  
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12, 
  },
  itemText: {
    // fontWeight:,
    // fontSize:,
    textAlign: 'center'
  }
})