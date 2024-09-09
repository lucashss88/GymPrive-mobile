import React from 'react';
import AppNavigator from "./navigation/AppNavigation";
import {AuthProvider} from "./screens/context/AuthContext";
import {ExercisesProvider} from "./screens/context/ExercisesContext";

export default function App() {
  return (
    <AuthProvider>
      <ExercisesProvider>
        <AppNavigator />
      </ExercisesProvider>
    </AuthProvider>
  );
}

