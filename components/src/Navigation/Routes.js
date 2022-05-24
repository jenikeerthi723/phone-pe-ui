import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from '../Navigation/MainStack';


const Stack = createNativeStackNavigator();



function Routes() {
  return (
    <NavigationContainer>
     <Stack.Navigator
     screenOptions={{headerShown:false}}>
       {MainStack(Stack)}
     </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;