import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OneBasketReactNativeProvider,
  initTranslations,
  locales,
} from '@onebasket/shared-ui-react-native';
import {TicketingStack} from '@onebasket/ticketing-ui-react-native';
import {oneBasketStorage} from './storage';
export type OneBasketStackParamList = {
  TicketingStack: undefined;
};

const Stack = createNativeStackNavigator<OneBasketStackParamList>();

const OneBasketStack = () => {
  // TODO: linkedAccountId only currently test abel on DEV
  const authConfig = {
    accessToken: 'fusionAuthToken?.access_token',
    linkedAccountId: 'fusionUserProfile?.ticketsDotComAccountI',
    mock: true,
    xApiKey: 'Config.ONEBASKET_API_KEY',
  };

  // const oneBasketConfig = {
  //   ...config,
  //   MenuScreen: {
  //     OnFamilyLinkPressed: navigateToFriendsAndFamily,
  //   },
  //   TicketingList: {
  //     LinkAccountsLink: navigateToManageProfile,
  //     UserLogInLink: mutateLogin,
  //   },
  //   TicketsTermsAndConditionsScreen: {
  //     GetTermsAndConditionsToRender: termsAndConditionsRender,
  //   },
  // };

  // const analyticsConfig = {
  //   eventNames: OBEventNames,
  //   logEvent: addOneBasketAnalyticsEvent,
  //   paramNames: OBParamNames,
  // };
  initTranslations(locales);

  return (
    <OneBasketReactNativeProvider auth={authConfig} storage={oneBasketStorage}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'TicketingStack'} component={TicketingStack} />
      </Stack.Navigator>
    </OneBasketReactNativeProvider>
  );
};

export default OneBasketStack;
