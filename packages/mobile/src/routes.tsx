import React, { Suspense, lazy } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SuspenseLoading from './components/SuspenseLoading';

import colors from './styles/colors';

const Home = lazy(() => import('./pages/Home'));
const MarketList = lazy(() => import('./pages/MarketList'));
const CreateList = lazy(() => import('./pages/CreateList'));
const AddMarketList = lazy(() => import('./components/AddMarketList'));

type RootStackParamList = {
  Home: undefined;
  MarketList: { listName: string };
  CreateMarketList: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

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
              // eslint-disable-next-line react/display-name
              headerRight: () => <AddMarketList />
            }}
          />

          <Stack.Screen
            name="MarketList"
            component={MarketList}
            options={({ route }) => ({
              title: route.params.listName,
              headerBackTitleVisible: false
            })}
          />

          <Stack.Screen
            name="CreateMarketList"
            component={CreateList}
            options={{ title: 'Nova Lista', headerBackTitleVisible: false }}
          />
        </Stack.Navigator>
      </Suspense>
    </NavigationContainer>
  );
}
