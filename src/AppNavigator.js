import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from './components/HomeComponent';
import screens from "./constants/screens";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name={screens.homeScreen}
                    component={HomeComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}