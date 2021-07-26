import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {styles} from './InformationsStyles';

interface Props {}

const Informations: FC = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Informations screen</Text>
    </View>
  );
};

export default Informations;
