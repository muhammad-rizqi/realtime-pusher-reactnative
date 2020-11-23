import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/Login';
import Register from '../screen/Register';
import Home from '../screen/Home';
import ChatScreen from '../screen/ChatScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerStyle: {
              backgroundColor: '#16161a',
              elevation: 0,
            },
            headerTintColor: '#bbbdba',
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
