import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const BackButton = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.goBack();
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Ionicons name="arrow-back" size={24} color="white" />
            <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0066cc',
        padding: 10,
        borderRadius: 5,
        margin: 10
    },
    text: {
        color: 'white',
        marginLeft: 5,
        fontSize: 16,
    },
});

export default BackButton;
