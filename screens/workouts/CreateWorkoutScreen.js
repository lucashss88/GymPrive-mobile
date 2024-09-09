import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ExercisesContext } from '../context/ExercisesContext';
import axios from "axios";

const CreateWorkoutScreen = ({ navigation }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [week, setWeek] = useState('');
    const { exercises, removeExercise, removeAllExercises } = useContext(ExercisesContext);

    const handleCreateWorkout = async () => {
        try {
            const token = localStorage.getItem('token');

            const newWorkout = {
                startDate,
                endDate,
                week,
                exercises,
            };

            const response = await axios.post('http://gymprive-back.railway.internal/workouts', newWorkout, {
                headers: { 'x-auth-token': token, 'Content-Type': 'application/json' },
            });
            console.log('Treino criado com sucesso:', response.data);

            setStartDate('');
            setEndDate('');
            setWeek('');
            removeAllExercises();

            navigation.navigate('Home');
        } catch (error) {
            console.error('Erro ao criar treino:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar Treino</Text>
            <TextInput
                style={styles.input}
                placeholder="Data de Início"
                value={startDate}
                onChangeText={setStartDate}
            />
            <TextInput
                style={styles.input}
                placeholder="Data Final"
                value={endDate}
                onChangeText={setEndDate}
            />
            <TextInput
                style={styles.input}
                placeholder="Semana"
                value={week}
                onChangeText={setWeek}
            />

            <FlatList
                data={exercises}
                renderItem={({ item, index }) => (
                    <View>
                        <Text>{item.name} - {item.reps} reps</Text>
                        <Button title="Remover" onPress={() => removeExercise(index)} />
                    </View>
                )}
                keyExtractor={(_, index) => index.toString()}
            />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddExercise')}>
                <Text style={styles.buttonText}>Adicionar Exercício</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCreateWorkout}>
                <Text style={styles.buttonText}>Criar Treino</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    button: {
        backgroundColor: '#0066cc',
        padding: 10,
        borderRadius: 4,
        marginVertical: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default CreateWorkoutScreen;
