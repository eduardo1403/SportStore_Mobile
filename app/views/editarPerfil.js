import React,{useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { styles } from '../styles/editarPerfil';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


const EditarPerfil = (props) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [usuario, setUsuario] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [name, setName] = useState('');
  const [isValidNombre, setIsValidNombre] = useState(true);
  const [lastName, setLastName] = useState('');
  const [isValidApellidos, setIsValidApellidos] = useState(true);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isValid = emailRegex.test(usuario.email);
    setIsValidEmail(isValid);
  };

  const validateNombre = () => {
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s']+$/;
    const isValid = nombreRegex.test(usuario.name);
    setIsValidNombre(isValid);
  };

  const validateApellidos = () => {
    const apellidosRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s']+$/;
    const isValid = apellidosRegex.test(usuario.lastName);
    setIsValidApellidos(isValid);
  };

  const validatePassword = () => {
    setIsValidPassword(password.length >= 6);
  };




  const cargarDatosInicioSesion = async () => {
    try {
      const usuarioGuardado = await AsyncStorage.getItem('usuario');
      if (usuarioGuardado) {
        const usuarioParseado = JSON.parse(usuarioGuardado);
        setUsuario(usuarioParseado);
      }
    } catch (error) {
      console.error('Error al cargar los datos de inicio de sesión:', error);
    }
  };
  

  useEffect(() => {
    if (isFocused) {
      cargarDatosInicioSesion();
    }
    
  }, [isFocused, usuario]);

  const actualizarDatosUsuario = async () => {
    try {
      const response = await axios.put(`https://api-backend-mqv1.onrender.com/api/users/${usuario._id}`, {
        name: usuario.name,
        email: usuario.email,
        lastName: usuario.lastName,
        password: usuario.password,
        // Agrega otros campos según sea necesario
      });

      if (response.status === 200) {
        alert('Los datos se actualizaron correctamente.');
      } else {
        alert('Error. No se pudo actualizar los datos del usuario.');
      }
    } catch (error) {
      console.error('Error al actualizar los datos del usuario:', error);
      alert('Error. Ocurrió un error al intentar actualizar los datos del usuario.');
    }
  };

  


  return(
    <View style={styles.containerBack}>
      <View style={styles.HeaderInicio}></View>
            <Image source={require('../img/logo.png')} style={styles.LogoHeader}/>
            <Text style={styles.textInicio}>Mi perfil</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Ajustes')}>
              <MaterialCommunityIcons name="cog" color='#000' size={28}  style={styles.Icono}/>
            </TouchableOpacity>

        <View style={styles.forms}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={usuario ? usuario.name : '' }
          onChangeText={(text) => setUsuario({ ...usuario, name: text })}
          onBlur={validateNombre}
      />
      {!isValidNombre && <Text style={{ color: 'red' }}>El nombre no debe contener números o caracteres especiales</Text>}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={usuario ? usuario.email : ''}
          onChangeText={(text) => setUsuario({ ...usuario, email: text })}
          onBlur={validateEmail}
          />
          {!isValidEmail && <Text style={{ color: 'red' }}>Correo electrónico no válido</Text>}
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          value={usuario ? usuario.lastName : ''}
          onChangeText={(text) => setUsuario({ ...usuario, lastName: text })}
          onBlur={validateApellidos}
          />
          {!isValidApellidos && <Text style={{ color: 'red' }}>Los apellidos no deben contener números o caracteres especiales</Text>}
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={!showPassword}
          value={usuario ? usuario.password : ''}
          onChangeText={(text) => setUsuario({ ...usuario, password: text })}
          onBlur={validatePassword}
          />
          </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Dirección',{ id: usuario._id })}>
            <Text style={styles.text}>Domicilio </Text>
            <Text style={styles.text2}>▶</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.ContainerBoton}>
        <TouchableOpacity >
            <View style={styles.buttonContainer}>
                <Button
                title="Guardar información"
                color="#DC3545"
                onPress={actualizarDatosUsuario}
                />
            </View>
          </TouchableOpacity> 
          </View>

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}>
          {showPassword ? (
            <MaterialCommunityIcons name="eye-off" size={24} color="black" />
          ) : (
            <FontAwesome name="eye" size={24} color="black" />
          )}
        </TouchableOpacity>    
    </View>
  );
};
  
export default EditarPerfil;