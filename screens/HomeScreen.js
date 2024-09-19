import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
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

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('CreateWorkout')}
            >
              <Text style={styles.buttonText}>Criar Treino</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('WorkoutList')}
            >
              <Text style={styles.buttonText}>Listar Treinos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('EditProfile')}
            >
              <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>

              <TouchableOpacity
                  style={styles.buttonLogout}
                  onPress={(handleLogout)}
              >
                  <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
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
    buttonLogout: {
       backgroundColor: '#ff0000',
       padding: 10,
       borderRadius: 4,
       marginVertical: 5,
    }
});

export default HomeScreen;
