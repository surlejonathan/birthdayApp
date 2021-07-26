import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../navigation/RootStack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Accueil'>;

interface Props {
  navigation: NavigationProp;
}

const Home: FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Informations')}>
        <Text style={{fontWeight: 'bold'}}>lien Informations</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
