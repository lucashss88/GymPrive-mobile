import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from './context/AuthContext';

const HomeScreen = ({ navigation }) => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await logout();
            console.log('Logout bem-sucedido!');
            navigation.navigate('Login')
        } catch (error) {
            console.error('Erro ao tentar fazer logout', error);
        }
    };

    return (
      <View style={styles.container}>
        {user ? (
          <>
            <Text style={styles.welcomeText}>Bem-vindo, {user.email}!</Text>

            <Button
              title="Criar Treino"
              onPress={() => navigation.navigate('CreateWorkout')}
            />

            <Button
              title="Listar Treinos"
              onPress={() => navigation.navigate('WorkoutList')}
            />

            <Button
              title="Editar Perfil"
              onPress={() => navigation.navigate('EditProfile')}
            />

            <Button
              title="Logout"
              onPress={handleLogout}
              color="red"
            />
          </>
        ) : (
          <Text style={styles.welcomeText}>Carregando...</Text>
        )}
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    welcomeText: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default HomeScreen;
