import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from "react-native"
import { Theme } from "../theme"
import { useState } from "react"

export type SearchProps = {
  hintText: string,
  onContentChanged: (content: string) => void,
  style?: StyleProp<ViewStyle>,
}

export function Search({
  hintText,
  onContentChanged,
  style,
}: SearchProps) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.textInput}
        onChangeText={onContentChanged}
        selectTextOnFocus={true}
        returnKeyType="search"
        placeholder={hintText}
        placeholderTextColor={Theme.colors.textMuted}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Theme.shapes.radius.full,
    borderWidth: Theme.shapes.borderWidth,
    borderColor: Theme.colors.borderSubtle,
    paddingStart: 12,
    paddingVertical: 10,
  },
  textInput: {
    ...Theme.typography.bodyMedium
  }
})