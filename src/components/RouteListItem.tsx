import { Route as RouteDetails } from "@/src/entity/route";
import { Theme } from "@/src/theme";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";


export type RouteListItemProps = {
  route: RouteDetails;
  style?: StyleProp<ViewStyle>;
}

export function RouteListItem({
  route,
  style,
}: RouteListItemProps) {
  const [collapsed, setCollapsed] = useState(true)
  const boltCount = route.boltCount ?? 0;

  const icon = collapsed ? 'chevron-right' : 'chevron-down'

  return (
    <Pressable
      style={[styles.container, style]}
      onPress={() => setCollapsed(!collapsed)}
    >
      <View style={styles.contentContainer}>
        <View style={styles.detailsContainer}>
          <View style={styles.headerContainer}>
            <Badge label={route.topoNumber} />
            <Text style={styles.headerText}>{route.name}  ·  {route.grade}</Text>
          </View>
          <View style={styles.tagsContainer}>
            <Stars count={route.stars} />
            <Chip text={capitalize(route.type)} />
            <Chip text={route.length + 'm'} />
            {boltCount > 0 && (
              <Chip text={route.boltCount + ' bolts'} />
            )}
          </View>
          {!collapsed &&
            <Text style={styles.bodyText}>{route.description}</Text>
          }
        </View>

        <Entypo name={icon}
          size={16}
          color={Theme.colors.text}
          style={styles.expandIcon}
        />
      </View>
      <View style={styles.horizontalDivider} />
    </Pressable>
  );
}

const Stars = ({
  count
}: { count: 0 | 1 | 2 | 3 }) => {
  const starsArray = Array.from({ length: count });
  return (
    <View style={styles.starContainer}>
      {starsArray.map((_, index) => (
        <Entypo
          key={index}
          name={'star'}
          size={16}
          color={Theme.colors.text}
        />
      ))}
    </View>
  )
}

const Badge = ({
  label
}: { label: number }) => {
  return (
    <View style={styles.badgeContainer}>
      <Text style={Theme.typography.bodySmall}>{label}</Text>
    </View>
  )
}

const Chip = ({
  text,
  style
}: {
  text: string,
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[styles.chipStyle, style]}>
      <Text style={styles.chipContentStyle}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  contentContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 8,
    width: '100%',
    paddingBottom: 12,
  },
  detailsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerText: {
    ...Theme.typography.headingSmall,
    paddingStart: 12
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...Theme.typography.headingMedium,
    paddingBottom: 4,
  },
  bodyText: {
    ...Theme.typography.bodySmall,
    paddingTop: 10
  },
  expandIcon: {
    paddingTop: 6,
  },
  horizontalDivider: {
    height: 1,
    width: '100%',
    backgroundColor: Theme.colors.border,
  },
  badgeContainer: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -1,
    borderRadius: Theme.shapes.radius.xSmall,
    borderColor: Theme.colors.border,
    borderWidth: 1,
  },
  starContainer: {
    flexDirection: 'row',
  },
  chipStyle: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: Theme.colors.greyContainer,
    borderRadius: Theme.shapes.radius.full,
    marginStart: 8,
  },
  chipContentStyle: {
    ...Theme.typography.bodySmall,
  }
})

const capitalize = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1); //
};