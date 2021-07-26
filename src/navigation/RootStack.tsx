import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Informations from '../screens/informations/Informations';

export type RootStackParamList = {
  Accueil: undefined;
  Informations: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={Home} />
      <Stack.Screen name="Informations" component={Informations} />
    </Stack.Navigator>
  );
};

export default RootStack;
