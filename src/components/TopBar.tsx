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
        {leadingIcon}
        <Text style={styles.titleText}>{title}</Text>
        {trailingIcon}
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
        paddingHorizontal: 22,
    alignItems: 'center',

  },
  titleText: {
    ...Theme.typography.headingLarge,
    alignContent: 'center',
    textAlign: 'center',
    flexShrink: 1,
    width: '100%',
    paddingBottom: 4,
  },
  leadingIcon: {
    width: 16,
    height: 16
  },
  trailingIcon: {
    width: 16,
    height: 16
  },
  horizontalDivider: {
    height: 1,
    width: '100%',
    backgroundColor: Theme.colors.borderSubtle,
  },
})