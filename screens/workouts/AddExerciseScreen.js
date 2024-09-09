import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { ExercisesContext } from '../context/ExercisesContext';

const AddExerciseScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [sets, setSets] = useState('');
    const [description, setDescription] = useState('');
    const { addExercise } = useContext(ExercisesContext);

    const handleAddExercise = () => {
        const newExercise = { name, reps, load, sets, description };
        addExercise(newExercise);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar Exercício</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName} />
            <TextInput
                style={styles.input}
                placeholder="Repetições"
                value={reps}
                onChangeText={setReps} />
            <TextInput
                style={styles.input}
                placeholder="Carga"
                value={load}
                onChangeText={setLoad} />
            <TextInput
                style={styles.input}
                placeholder="Sets"
                value={sets}
                onChangeText={setSets} />
            <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={description}
                onChangeText={setDescription} />
            <Button title="Adicionar Exercício" onPress={handleAddExercise} />
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

export default AddExerciseScreen;
