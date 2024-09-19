import React from 'react';
import AppNavigator from "./navigation/AppNavigation";
import {AuthProvider} from "./screens/context/AuthContext";
import {ExercisesProvider} from "./screens/context/ExercisesContext";
import Toast from 'react-native-toast-message';
export default function App() {
  return (
    <AuthProvider>
      <ExercisesProvider>
        <AppNavigator />
        <Toast />
      </ExercisesProvider>
    </AuthProvider>
  );
}

