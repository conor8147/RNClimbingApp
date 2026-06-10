
export const Colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#F2F2F7',
  surface: '#FFFFFF',
  text: '#1C1C1E',
  textMuted: '#8E8E93',
  rippleColor: "#007AFF22",
  border: '#C7C7CC',
}

export const Theme = {
  colors: {
    ...Colors
  },
  typography: {
    headingLarge: {
      fontSize: 32,
      fontWeight: '700' as const,
      letterSpacing: 0.3,
    },
    body: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 22,
    },
    caption: {
      fontSize: 12,
      fontWeight: '500' as const,
      color: Colors.textMuted,
    },
    shapes: {
      radius: {
        small: 8,
        medium: 16,
        large: 24,
        full: 999,
      },
      borderWidth: 1,
    },
  },
}