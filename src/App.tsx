/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import store, {persistor} from './redux/store';
import RootStack from './navigation/RootStack';
import {colors} from './utils/commonStyles';

const App: FC = () => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaProvider style={styles.backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.dark}
      />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default App;
