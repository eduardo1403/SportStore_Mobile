import React, { useState, useEffect } from 'react';
import {Button, View, Image,TextInput, Text, Pressable} from 'react-native';
import {styles} from '../styles/login'
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const registro = () =>  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [name, setName] = useState('');
  const [isValidNombre, setIsValidNombre] = useState(true);
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [lastName, setLastName] = useState('');
  const [isValidApellidos, setIsValidApellidos] = useState(true);
  const [usuarios, setUsuarios] = useState([]);


  const registrarUser = () =>{
    const users = {
      name,
      lastName,
      email,
      password,
    };
    const url = 'https://api-backend-mqv1.onrender.com/api/users';

    axios
      .post(url, users)
      .then(response => {
        // El usuario se agregó correctamente
        alert('El usuario se agregó correctamente')
      })
      .catch(error => {
        // Se produjo un error al agregar el usuario
        alert('Se produjo un error al agregar el usuario')
      });
  };

  useEffect(() => {
    setName('');
    setLastName('');
    setEmail('');
    setPassword('');
  },[]);

  const validateNombre = () => {
    const nombreRegex = /^[A-Za-z]+$/;
    const isValid = nombreRegex.test(name);
    setIsValidNombre(isValid);
  };

  const validateApellidos = () => {
    const apellidosRegex = /^[A-Za-z]+$/;
    const isValid = apellidosRegex.test(lastName);
    setIsValidApellidos(isValid);
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
  };

  const validatePassword = () => {
    setIsValidPassword(password.length >= 6);
  };

  const validateConfirmPassword = () => {
    setPasswordsMatch(password === confirmarContrasena);
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
              <Pressable style={styles.button2} onPress={() => navigation.navigate('Sesion')}>
                <Text style={styles.textButton}>INICIAR SESIÓN</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.textButton}>REGISTRARSE</Text>
              </Pressable>
          </View>
          <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={(text) => setName(text)}
        onBlur={validateNombre}
      />
      {!isValidNombre && <Text style={{ color: 'red' }}>El nombre no debe contener números o caracteres especiales</Text>}
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        onBlur={validateApellidos}
      />
      {!isValidApellidos && <Text style={{ color: 'red' }}>Los apellidos no deben contener números o caracteres especiales</Text>}
          <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
        onBlur={validateEmail}
      />
      {!isValidEmail && <Text style={{ color: 'red' }}>Correo electrónico no válido</Text>}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
        onBlur={validatePassword}
      />
      {!isValidPassword && <Text style={{ color: 'red' }}>Contraseña no válida</Text>}
      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        secureTextEntry={true}
        value={confirmarContrasena}
        onChangeText={(text) => setConfirmarContrasena(text)}
        onBlur={validateConfirmPassword}
      />
      {!passwordsMatch  && <Text style={{ color: 'red' }}>La contraseña no coincide</Text>}

          <View style={styles.buttonContainer}>
              <Button
              title="Registrarme"
              color="#DC3545"
              onPress={registrarUser}
              />
          </View>
      </View>
      
  )
}


export default registro