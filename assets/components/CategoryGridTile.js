import { Pressable, View, Text } from 'react-native';

export default function CategoryGridTile({title, colour}) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}