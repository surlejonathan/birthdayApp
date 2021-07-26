import {StyleSheet} from 'react-native';
import {colors, fonts, spaces} from '../../utils/commonStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spaces.lg,
    backgroundColor: colors.primary,
  },

  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headline: {
    flex: 1,
  },

  linkLabel: {
    fontFamily: fonts.bold,
  },

  info: {
    color: colors.white,
    fontFamily: fonts.boldItalic,
  },

  text: {
    fontFamily: fonts.normal,
    fontSize: fonts.xl,
    color: colors.dark,
    marginVertical: spaces.sm,
  },

  tipContainer: {
    marginTop: spaces.lg,
  },

  tipText: {
    fontFamily: fonts.normal,
    fontSize: fonts.md,
    color: colors.dark,
  },

  wish: {
    fontSize: fonts.xxl,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.white,
  },
});
