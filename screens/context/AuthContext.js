// context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from "react-native-toast-message";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [nameUser, setNameUser] = useState('');

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    axios.defaults.headers.common['x-auth-token'] = token;
                    const response = await axios.get('https://gymprive-back-production.up.railway.app/auth/me');
                    setUser(response.data.user);
                } else {
                    console.log('Token não encontrado');
                }
            } catch (error) {
                console.log('Erro ao carregar dados do usuário', error);
            } finally {
                setLoading(false);
            }
        };

        loadUserData();
    }, []);


    const register = async (name, email, password, weight, height, age) => {
        try {
            const response = await axios.post('https://gymprive-back-production.up.railway.app/auth/register', {
                name,
                email,
                password,
                weight,
                height,
                age
            });
            const { token, user } = response.data;
            await AsyncStorage.setItem('token', token);
            axios.defaults.headers.common['x-auth-token'] = token;
            setUser(user);
            setNameUser(user.name);
            Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Usuário registrado com sucesso.',
            });
        } catch (error) {
            console.error('Erro ao registrar usuário', error.response ? error.response.data : error);
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Falha ao registrar usuário.',
            });
            throw error;
        }
    };


    const login = async (email, password) => {
        try {
            const response = await axios.post('https://gymprive-back-production.up.railway.app/auth/login', { email, password });
            const { token, user } = response.data;
            await AsyncStorage.setItem('token', token);
            axios.defaults.headers.common['x-auth-token'] = token;
            console.log('Token obtido:', token);
            setUser(user);
            Toast.show({
                type: 'success',
                text1: 'Bem-vindo!',
                text2: 'Login realizado com sucesso.',
            });
        } catch (error) {
            console.error('Erro ao fazer login', error);
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Falha ao fazer login.',
            });
            throw error;
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            axios.defaults.headers.common['x-auth-token'] = null;
            setUser(null);
            Toast.show({
                type: 'success',
                text1: 'Até mais!',
                text2: 'Logout realizado com sucesso.',
            });
        } catch (error) {
            console.error('Erro ao fazer logout', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

