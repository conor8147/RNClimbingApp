
export const Colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#EFEFEF',
  surface: '#FFFFFF',
  text: '#000000',
  textMuted: '#656161',
  rippleColor: "#007AFF22",
  borderSubtle: '#C3C3C3',
  border: '#8C8C8C',
  greyContainer: '#CBCBCB',
}

export const Theme = {
  colors: {
    ...Colors
  },
  typography: {
    headingLarge: {
      fontSize: 20,
      fontWeight: '400' as const,
      letterSpacing: 0.3,
    },
    headingMedium: {
      fontSize: 18,
      fontWeight: '500' as const,
      letterSpacing: 0.3,
  },
    body: {
      fontSize: 13,
      fontWeight: '400' as const,
      lineHeight: 15,
    },
    caption: {
      fontSize: 14,
      fontWeight: '400' as const,
      color: Colors.textMuted,
    },
  },
  shapes: {
    radius: {
      xSmall: 6,
      small: 8,
      medium: 16,
      large: 24,
      full: 999,
    },
    borderWidth: 1,
  },
}