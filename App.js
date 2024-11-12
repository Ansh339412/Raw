import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import { db } from './config';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword"component={ForgotPasswordScreen}options={{ title: 'Forgot Password' }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
