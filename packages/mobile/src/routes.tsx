import React, { Suspense, lazy } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SuspenseLoading from './components/SuspenseLoading';

import colors from './styles/colors';

const Home = lazy(() => import('./pages/Home'));
const AddMarketList = lazy(() => import('./components/AddMarketList'));

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Suspense fallback={<SuspenseLoading />}>
        <Stack.Navigator
          screenOptions={{
            title: 'Marché',
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: colors.titleText,
            headerTitleStyle: {
              fontFamily: 'ubuntu_700',
              fontWeight: 'bold',
              fontSize: 24
            },
            headerTitleAlign: 'center'
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Marché',
              headerRight: () => <AddMarketList />
            }}
          />
        </Stack.Navigator>
      </Suspense>
    </NavigationContainer>
  );
}
