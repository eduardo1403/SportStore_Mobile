import React, { useState } from 'react';
import {Button, View, Image,TextInput, Text, Pressable} from 'react-native';
import {styles} from '../styles/login'
import { useNavigation } from "@react-navigation/native";

const registro = () =>  {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [nombre, setNombre] = useState('');
  const [isValidNombre, setIsValidNombre] = useState(true);
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [apellidos, setApellidos] = useState('');
  const [isValidApellidos, setIsValidApellidos] = useState(true);

  const validateNombre = () => {
    const nombreRegex = /^[A-Za-z]+$/;
    const isValid = nombreRegex.test(nombre);
    setIsValidNombre(isValid);
  };

  const validateApellidos = () => {
    const apellidosRegex = /^[A-Za-z]+$/;
    const isValid = apellidosRegex.test(apellidos);
    setIsValidApellidos(isValid);
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isValid = emailRegex.test(usuario);
    setIsValidEmail(isValid);
  };

  const validatePassword = () => {
    setIsValidPassword(contrasena.length >= 6);
  };

  const validateConfirmPassword = () => {
    setPasswordsMatch(contrasena === confirmarContrasena);
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
        value={nombre}
        onChangeText={(text) => setNombre(text)}
        onBlur={validateNombre}
      />
      {!isValidNombre && <Text style={{ color: 'red' }}>El nombre no debe contener números o caracteres especiales</Text>}
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        value={apellidos}
        onChangeText={(text) => setApellidos(text)}
        onBlur={validateApellidos}
      />
      {!isValidApellidos && <Text style={{ color: 'red' }}>Los apellidos no deben contener números o caracteres especiales</Text>}
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
              title="Iniciar sesión"
              color="#DC3545"
              />
          </View>
      </View>
      
  )
}


export default registro