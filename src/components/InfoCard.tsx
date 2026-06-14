import { Theme } from "@/src/theme";
import { ReactNode } from "react";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export type InfoCardProps = {
    title: string,
    subtitle: string,
    onPress?: () => void,
    style?: StyleProp<ViewStyle>,
    rightIcon?: ReactNode,
}

export function InfoCard({
    title,
    subtitle,
    onPress,
    style,
    rightIcon,
}: InfoCardProps) {
    return <Pressable
        onPress={onPress}
        style={[styles.cardStyle, style]}
        android_ripple={{ color: Theme.colors.rippleColor, borderless: false }}

    >
        <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardSubtitle}>{subtitle}</Text>
            </View>
            {rightIcon ? (
                <View style={styles.rightIconSlot}>
                    {rightIcon}
                </View>
            ) : null}
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    cardStyle: {
        padding: 20,
        backgroundColor: Theme.colors.surface,
        borderRadius: Theme.shapes.radius.medium,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        marginRight: 12,
    },
    rightIconSlot: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        ...Theme.typography.headingMedium
    },
    cardSubtitle: {
        ...Theme.typography.caption
    },
});