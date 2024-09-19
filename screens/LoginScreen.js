import React, { useContext, useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { AuthContext } from './context/AuthContext';
import {useNavigation} from "@react-navigation/native";
import BackButton from "./BackButton";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            await login(email, password);
            console.log('Login bem-sucedido!');
            navigation.navigate('Home');
        } catch (error) {
            console.error('Erro ao tentar fazer login', error);
        }
    };

    return (
        <View style={styles.container}>
            {/*<BackButton />*/}
            <Text>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        borderWidth: 1,
        padding: 8,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#000',
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

export default LoginScreen;
