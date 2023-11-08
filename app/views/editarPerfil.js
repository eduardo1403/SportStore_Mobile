import React, { useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { styles } from '../styles/editarPerfil';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

const EditarPerfil = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [name, setName] = useState('');
  const [isValidNombre, setIsValidNombre] = useState(true);
  const [lastName, setLastName] = useState('');
  const [isValidApellidos, setIsValidApellidos] = useState(true);

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

  const validatePassword = () => {
    setIsValidPassword(password.length >= 6);
  };

  const validateConfirmPassword = () => {
    setPasswordsMatch(password === confirmarContrasena);
};
  return(
    <View style={styles.containerBack}>
      <View style={styles.HeaderInicio}></View>
            <Image source={require('../img/logo.png')} style={styles.LogoHeader}/>
            <Text style={styles.textInicio}>Mi perfil</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Ajustes')}>
              <MaterialCommunityIcons name="cog" color='#000' size={28}  style={styles.Icono}/>
            </TouchableOpacity>
        <View style={styles.content}>
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
        </View> 
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Dirección')}>
            <Text style={styles.text}>Domicilio </Text>
            <Text style={styles.text2}>▶</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity >
            <View style={styles.buttonContainer}>
                <Button
                title="Iniciar sesión"
                color="#DC3545"
                onPress={() => navigation.navigate('Sesion')}
                />
            </View>
          </TouchableOpacity>     
    </View>
  );
};
  
export default EditarPerfil;