import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from "./pantallas/Home";
import {pantalla2Screen} from "./pantallas/SegundaPantalla";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Frutas" component={HomeScreen} />
        <Tab.Screen name="Añadir frutas" component={pantalla2Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}