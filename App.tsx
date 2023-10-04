import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from '@rneui/themed';
import theme from './src/theme';
import Splash from './src/screens/Splash';
import MainTab from './src/navigator/tabs/MainTab';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <StatusBar backgroundColor="#11123E" barStyle="light-content" />
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Splash"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="MainTab" component={MainTab} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
