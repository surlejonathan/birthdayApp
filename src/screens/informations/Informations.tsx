import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

const Informations: FC = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Informations screen</Text>
    </View>
  );
};

export default Informations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
