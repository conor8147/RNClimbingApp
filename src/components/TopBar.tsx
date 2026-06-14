import { Theme } from "@/src/theme";
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

export type TopBarProps = {
  title: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export default function ({
  title,
  leadingIcon,
  trailingIcon,
}: TopBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topBarContent}>
        <View style={styles.iconSlot}>{leadingIcon}</View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.iconSlot}>{trailingIcon}</View>
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
    width: 40,
    minWidth: 40,
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