import { Theme } from "@/src/theme";
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";

export type InfoCardProps = {
    title: string,
    subtitle: string,
    onPress?: () => void,
    style?: StyleProp<ViewStyle>,
}

export function InfoCard({
    title,
    subtitle,
    onPress,
    style,
}: InfoCardProps) {
    return <Pressable
        onPress={onPress}
        style={[styles.cardStyle, style]}
        android_ripple={{ color: Theme.colors.rippleColor, borderless: false }}

    >
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
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
    cardTitle: {
        ...Theme.typography.headingMedium
    },
    cardSubtitle: {
        ...Theme.typography.caption
    },
});