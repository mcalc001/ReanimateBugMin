import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OneBasketReactNativeProvider} from '@onebasket/shared-ui-react-native';
import {TicketingStack} from '@onebasket/ticketing-ui-react-native';
import {oneBasketStorage} from './storage';
export type OneBasketStackParamList = {
  TicketingStack: undefined;
};

const Stack = createNativeStackNavigator<OneBasketStackParamList>();

const OneBasketStack = () => {
  const authConfig = {
    accessToken: 'linkedAccountId',
    linkedAccountId: 'linkedAccountId',
    mock: true,
    xApiKey: 'xApiKey',
  };

  return (
    <OneBasketReactNativeProvider auth={authConfig} storage={oneBasketStorage}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'TicketingStack'} component={TicketingStack} />
      </Stack.Navigator>
    </OneBasketReactNativeProvider>
  );
};

export default OneBasketStack;
