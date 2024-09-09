import React, { createContext, useState } from 'react';

export const ExercisesContext = createContext();

export const ExercisesProvider = ({ children }) => {
    const [exercises, setExercises] = useState([]);

    const addExercise = (exercise) => {
        setExercises((prevExercises) => [...prevExercises, exercise]);
    };

    const removeExercise = (index) => {
        setExercises((prevExercises) => prevExercises.filter((_, i) => i !== index));
    };

    const removeAllExercises = () => {
        setExercises([]);
    };

    return (
        <ExercisesContext.Provider value={{ exercises, addExercise, removeExercise, removeAllExercises }}>
            {children}
        </ExercisesContext.Provider>
    );
};
