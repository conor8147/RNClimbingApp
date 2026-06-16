import { Theme } from "@/src/theme";
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export type InfoListItemProps = {
    title: string,
    content: string,
    style?: StyleProp<ViewStyle>
}

export function InfoListItem({
    title,
    content,
    style,
}: InfoListItemProps) {
    const [collapsed, setCollapsed] = useState(false)

    const icon = collapsed ? 'chevron-right' : 'chevron-down'

    return (
        <Pressable
            style={[styles.container, style]}
            onPress={() => setCollapsed(!collapsed)}
        >
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text
                        style={styles.bodyText}
                        numberOfLines={collapsed ? 2 : undefined}
                        ellipsizeMode="tail"
                    >{content}</Text>
                </View>
                <Entypo name={icon}
                    size={16}
                    color={Theme.colors.text}
                    style={styles.expandIcon}
                />
            </View>
            <View style={styles.horizontalDivider}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    contentContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexShrink: 1,
        paddingTop: 8,
        paddingBottom: 12,
    },
    textContainer: {
        flexDirection: 'column',
        flex: 1,
        paddingEnd: 16
    },
    title: {
        ...Theme.typography.headingMedium,
        paddingBottom: 4,
    },
    bodyText: {
        ...Theme.typography.bodySmall
    },
    expandIcon: {
        paddingTop: 6,
    },
    horizontalDivider: {
        height: 1,
        width: '100%',
        backgroundColor: Theme.colors.border,
    }
})