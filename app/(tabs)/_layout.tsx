import { Theme } from '@/constants/Theme';
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs
      tintColor={Theme.colors.primary}
      rippleColor={Theme.colors.rippleColor}
      iconColor={{
        default: Theme.colors.textMuted,
        selected: Theme.colors.primary,
      }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'house', selected: 'house.fill' }}
          md='home'
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="preview">
        <NativeTabs.Trigger.Label>Preview</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'magnifyingglass.circle', selected: 'magnifyingglass.circle.fill' }}
          md='search'
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}