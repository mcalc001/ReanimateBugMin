import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Sentry from '@sentry/react-native';
import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';

import OneBasketStack from './OneBasketStack';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {initTranslations} from '@onebasket/shared-ui-react-native';
import {locales} from './locales';

const ANIMATION_DURATION = 1000;

export const AnimationExample = ({
  height = 24,
  width = '100%',
  opacity,
  children,
  show = true,
}: any) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {duration: ANIMATION_DURATION}),
      -1,
      true,
    );
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      ['white', 'black'],
    ),
  }));

  if (!show && children) {
    return <>{children}</>;
  }

  return (
    <Animated.View
      style={[
        {height, opacity, width, justifyContent: 'center'},
        animatedStyle,
      ]}>
      <Text style={{color: 'white', textAlign: 'center'}}>
        Remove this animation and it works
      </Text>
    </Animated.View>
  );
};

const LandingScreen = () => {
  const navigate = useNavigation<any>();
  /// navigation function to navigate to oneBasket
  const navigateToOneBasket = () => {
    navigate.navigate('Screen2');
  };

  return (
    <View
      style={{
        paddingTop: 20,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <Text>Landing screen With Animation</Text>
      <Pressable
        style={{
          height: 60,
          width: 100,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={navigateToOneBasket}>
        <Text>Navigate to Screen2</Text>
      </Pressable>

      {/* // remove and it works  */}
      <AnimationExample height={100} width={100} />
    </View>
  );
};

export const routingInstrumentation =
  new Sentry.ReactNavigationInstrumentation();

const Stack = createNativeStackNavigator<any>();

const AppNavigator = () => {
  initTranslations(locales);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          component={LandingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen2"
          component={OneBasketStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
