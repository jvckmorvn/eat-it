import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({onPress, icon, colour}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed ? styles.pressed : null}>
      <Ionicons name={icon} size={24} color={colour}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8
  }
});
