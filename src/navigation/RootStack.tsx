import React, {FC} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Informations from '../screens/informations/Informations';
import {colors, fonts} from '../utils/commonStyles';

export type RootStackParamList = {
  Accueil: undefined;
  Informations: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FC = () => {
  return (
    <Stack.Navigator
      mode="modal"
      headerMode="float"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Accueil"
        component={Home}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTitleStyle: {color: colors.lighter, fontFamily: fonts.bold},
        }}
      />
      <Stack.Screen
        name="Informations"
        component={Informations}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTitleStyle: {color: colors.lighter, fontFamily: fonts.bold},
          headerTintColor: colors.lighter,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
