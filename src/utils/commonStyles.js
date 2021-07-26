import {Dimensions} from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  primary: '#66D29C',
  secondary: '#06BA63',
  black: '#000',
  dark: '#444',
  darker: '#222',
  light: '#DAE1E7',
  lighter: '#F3F3F3',
  white: '#FFF',
};

export const spaces = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 36,
};

export const fonts = {
  sm: 12,
  md: 16,
  lg: 24,
  xl: 36,
  xxl: 48,
};
