import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { styles } from '../styles/editarPerfil';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

const EditarPerfil = () => {
  const navigation = useNavigation();
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
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
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