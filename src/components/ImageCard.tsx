import { StyleProp, StyleSheet, View, ViewStyle, Image, Text, Pressable, ImageSourcePropType } from "react-native"
import { Theme } from "../theme";

type ImageCardProps = {
  imgSrc: ImageSourcePropType,
  title: string,
  subtitle: string,
  onPress: () => void,
  onIconPress: () => void,
  style?: StyleProp<ViewStyle>,
  icon: React.ReactNode,
}

export default function ImageCard({
  imgSrc,
  title,
  subtitle,
  onPress,
  onIconPress,
  style,
  icon,
}: ImageCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, style]}
    >
      <Image
        style={styles.image}
        source={imgSrc}
        resizeMode="cover"
      />

      <View style={styles.bottomRow}>
        <View style={styles.textColumn}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subtitleText}>{subtitle}</Text>
        </View>
        <Pressable
          style={{ marginEnd: 12 }}
          onPress={onIconPress}
        >
          {icon}
        </Pressable>
      </View>
    </Pressable>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    paddingBottom: 14,
    backgroundColor: Theme.colors.surface,
    borderColor: Theme.colors.borderSubtle,
    borderWidth: 0.5,
    borderRadius: Theme.shapes.radius.medium,
    gap: 8,
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: 110,
    resizeMode: 'cover',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 6,
    justifyContent: 'space-between',
    marginTop: 2,
  },
  textColumn: {
    flexDirection: 'column'
  },
  titleText: {
    ...Theme.typography.bodyMedium
  },
  subtitleText: {
    ...Theme.typography.captionSmall
  },
  icon: {
    height: 16,
    width: 16,
  },
});