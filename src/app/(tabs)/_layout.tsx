import { Theme } from '@/src/theme';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <NativeTabs
        tintColor={Theme.colors.primary}
        backgroundColor={Theme.colors.background}
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
    </SafeAreaProvider>
  )
}