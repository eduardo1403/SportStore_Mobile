import React, { useState, useEffect } from 'react';
import {Button, View, Image,TextInput, Text, Pressable, TouchableOpacity} from 'react-native';
import {styles} from '../styles/login'
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () =>  {
  const [email, setUsuario] = useState('');
  const [password, setContrasena] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  

  
  const LogingUser = async () => {
    const users = {
      email,
      password
    };
  
    const url = 'https://api-backend-mqv1.onrender.com/api/users/login';
  
    try {
      const response = await axios.post(url, users);
      
      // Si la respuesta del servidor es exitosa y contiene datos del usuario
      if (response.data && response.data._id && response.data.name && response.data.lastName && response.data.email) {
        // Guarda los datos del usuario en AsyncStorage
        await AsyncStorage.setItem('usuario', JSON.stringify(response.data));
        alert('Inicio de sesión exitoso');
        navigation.navigate('Editar Perfil');
      } else {
        alert('Respuesta del servidor incompleta');
      }
    } catch (error) {
      alert('Se produjo un error. Credenciales inválidas');
    }
  };

  

  useEffect(() => {
    setUsuario('');
    setContrasena('');
  },[])

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
  };

  const validatePassword = () => {
    const isValid = password.length >= 6;
    setIsValidPassword(isValid);
  };

  const navigation = useNavigation();
  return (
      <View>
          <View style={styles.containerLogo}>
              <Image source={require('../img/logo.png')} style={styles.imagen}/>
          </View >
          <View style={styles.fixToText}>
          </View>
          <View style={styles.fixToText}>
              <Pressable style={styles.button}>
                <Text style={styles.textButton}>INICIAR SESIÓN</Text>
              </Pressable>
              <Pressable style={styles.button2} onPress={() => navigation.navigate('Registro')}>
                <Text style={styles.textButton}>REGISTRARSE</Text>
              </Pressable>
          </View>
          <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setUsuario(text)}
        onBlur={validateEmail}
      />
      {!isValidEmail && <Text style={{ color: 'red' }}>Correo electrónico no válido</Text>}
          <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={(text) => setContrasena(text)}
        onBlur={validatePassword}
      />
      {!isValidPassword && <Text style={{ color: 'red' }}>Contraseña no válida</Text>}
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}>
          {showPassword ? (
            <MaterialCommunityIcons name="eye-off" size={24} color="black" />
          ) : (
            <FontAwesome name="eye" size={24} color="black" />
          )}
        </TouchableOpacity>
          <TouchableOpacity >
            <View style={styles.buttonContainer}>
                <Button
                title="Iniciar sesión"
                color="#DC3545"
                onPress={LogingUser}
                />
            </View>
          </TouchableOpacity>
      </View>
      
  )
}


export default Login