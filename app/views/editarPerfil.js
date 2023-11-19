import React,{useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { styles } from '../styles/editarPerfil';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const EditarPerfil = (props) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [usuario, setUsuario] = useState(null);


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
    
  }, [isFocused]);

  

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
          value={usuario ? usuario.name : ''}
          onChangeText={(text) => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={usuario ? usuario.email : ''}
          onChangeText={(text) => {/* Actualiza el estado del email */}}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          value={usuario ? usuario.lastName : ''}
          onChangeText={(text) => {/* Actualiza el estado de los apellidos */}}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={usuario ? usuario.password : ''}
          onChangeText={(text) => {/* Actualiza el estado de los apellidos */}}
        />
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
                title="Guardar información"
                color="#DC3545"
                />
            </View>
          </TouchableOpacity>     
    </View>
  );
};
  
export default EditarPerfil;