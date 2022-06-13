import React from 'react';
import Index from './components/videos/Index';
import Show from './components/videos/Show';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Index} options={{title: 'Home'}} />
        <Stack.Screen name="Show" component={Show} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
