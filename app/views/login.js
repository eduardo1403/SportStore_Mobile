import React, { useState, Component } from 'react';
import {Button, View, Image,TextInput, Text, Pressable, TouchableOpacity} from 'react-native';
import {styles} from '../styles/login'
import { useNavigation } from "@react-navigation/native";

const formulario = () =>  {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isValid = emailRegex.test(usuario);
    setIsValidEmail(isValid);
  };

  const validatePassword = () => {
    const isValid = contrasena.length >= 6;
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
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
        onBlur={validateEmail}
      />
      {!isValidEmail && <Text style={{ color: 'red' }}>Correo electrónico no válido</Text>}
          <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={contrasena}
        onChangeText={(text) => setContrasena(text)}
        onBlur={validatePassword}
      />
      {!isValidPassword && <Text style={{ color: 'red' }}>Contraseña no válida</Text>}
          <TouchableOpacity >
            <View style={styles.buttonContainer}>
                <Button
                title="Iniciar sesión"
                color="#DC3545"
                />
            </View>
          </TouchableOpacity>
      </View>
      
  )
}


export default formulario