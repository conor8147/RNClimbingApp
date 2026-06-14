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
  const [isEditing, setEditing] = useState(false)
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
    paddingStart: 10,
    paddingTop: 3,
  },
  textInput: {
    ...Theme.typography.body
  }
})