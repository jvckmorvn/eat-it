import { View, Text, StyleSheet } from 'react-native';

export default function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
    marginTop: 12,
    textAlign: 'center'
  },
  subtitleContainer: {
    padding: 4,
    margin: 4,
    marginBottom: 12,
    borderBottomWidth: 2
  }
});
