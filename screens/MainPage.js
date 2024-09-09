// MainPage.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainPage = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao GymFit</Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Registrar"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default MainPage;
