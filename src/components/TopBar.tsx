import { Theme } from "@/src/theme";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export type TopBarProps = {
  title: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  onLeadingPress?: () => void;
  onTrailingPress?: () => void;
}

export default function ({
  title,
  leadingIcon,
  trailingIcon,
  onLeadingPress,
  onTrailingPress,
}: TopBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topBarContent}>
        <Pressable
          style={styles.iconSlot}
          onPress={onLeadingPress}
          accessibilityRole={onLeadingPress ? "button" : undefined}
        >
          {leadingIcon}
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <Pressable
          style={styles.iconSlot}
          onPress={onTrailingPress}
          accessibilityRole={onTrailingPress ? "button" : undefined}
        >
          {trailingIcon}
        </Pressable>
      </View>
      <View style={styles.horizontalDivider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  topBarContent: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  iconSlot: {
    width: 36,
    minWidth: 36,
    minHeight: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    ...Theme.typography.headingLarge,
    textAlign: 'center',
    paddingBottom: 4,
  },
  horizontalDivider: {
    height: 1,
    width: '100%',
    backgroundColor: Theme.colors.borderSubtle,
  },
})