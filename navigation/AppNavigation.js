import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from "../screens/RegisterScreen";
import MainPage from "../screens/MainPage";
import CreateWorkoutScreen from "../screens/workouts/CreateWorkoutScreen";
import AddExerciseScreen from "../screens/workouts/AddExerciseScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="CreateWorkout" component={CreateWorkoutScreen} />
            <Stack.Screen name="AddExercise" component={AddExerciseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
