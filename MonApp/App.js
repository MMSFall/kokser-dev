// App.js
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import UsagerForm from './screens/UsagerForm';
import ConducteurForm from './screens/ConducteurForm';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UsagerForm" component={UsagerForm} />
        <Stack.Screen name="ConducteurForm" component={ConducteurForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
