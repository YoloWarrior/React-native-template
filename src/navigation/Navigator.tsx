import {Platform} from 'react-native';
import {Screen} from './types/Screens';
import Main from '../screens/Main';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  [Screen.Main]: {};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <RootStack.Navigator initialRouteName={Screen.Main}>
      <RootStack.Group
        screenOptions={{
          headerShown: false,
          animation: Platform.OS === 'android' ? 'none' : 'default',
        }}>
        <RootStack.Screen name={Screen.Main} component={Main} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
