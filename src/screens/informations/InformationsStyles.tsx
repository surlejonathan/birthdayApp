import {StyleSheet} from 'react-native';
import {colors, fonts, spaces} from '../../utils/commonStyles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spaces.md,
    paddingVertical: spaces.xl,
    backgroundColor: colors.primary,
    flex: 1,
  },

  form: {
    backgroundColor: colors.white,
    paddingHorizontal: spaces.sm,
    paddingTop: spaces.md,
    borderRadius: 8,
  },

  input: {
    fontFamily: fonts.bold,
    color: colors.dark,
  },
});
