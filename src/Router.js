import React from 'react';
import HomePage from './pages/Home';
import MealsPage from './pages/Meals';
import DetailsPage from './pages/Details';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HomePage}
      >
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Categories', headerTintColor: '#FA9D24' }} />
        <Stack.Screen name="Meals" component={MealsPage} options={{ title: 'Meals', headerTintColor: '#FA9D24' }} />
        <Stack.Screen name="Details" component={DetailsPage} options={{headerTintColor: '#FA9D24'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}