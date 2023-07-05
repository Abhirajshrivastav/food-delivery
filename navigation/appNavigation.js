import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Restaurant/HomeScreen';
import WelcomeScreen from '../Screens/Restaurant/WelcomeScreen';
import RecipeDetailScreen from '../Screens/Restaurant/RecipeDetailScreen';
import LoginScreen from '../Screens/Restaurant/LoginScreen';
import SignUpScreen from '../Screens/Restaurant/SignUpScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
         <Stack.Screen name="RecipeDetailScreen" options={{headerShown: false}} component={RecipeDetailScreen} />
         <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}