// context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

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
        } catch (error) {
            console.error('Erro ao registrar usuário', error.response ? error.response.data : error);
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
        } catch (error) {
            console.error('Erro ao fazer login', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            axios.defaults.headers.common['x-auth-token'] = null;
            setUser(null);
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

