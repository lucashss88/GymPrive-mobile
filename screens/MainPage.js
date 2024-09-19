import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MainPage = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao GymFit</Text>
          <Image
              source={require('../assets/fitforge3.png')}
              style={styles.image}
          />
        <View style={styles.containerMain}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}
          >
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

        </View>
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
        marginBottom: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    containerMain: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
    },
    button: {
        backgroundColor: '#000',
        fontSize: 10,
        padding: 20,
        borderRadius: 4,
        marginVertical: 5,
        marginRight: 5,
        marginLeft: 5
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default MainPage;
