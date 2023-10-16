import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import {styles} from '../styles/misDirecciones'


const Misdirecciones = () => {
  return (
    <View style={styles.container}> 

      <View style={styles.header}>
      <Image source={require('./img/izquierda.png')} style={styles.Icono}/>
        <Text style={styles.headerText}>Domicilio</Text>
      </View>

      <View style={styles.addressContainer}>
        
        <Text style={styles.addressText}>
          Calle independencia 1 Departamentos amarillos en colonia Cantores Huejutla de reyes Hidalgo Mexico 43000 
        </Text>
      </View>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Direccion</Text>
      </TouchableOpacity>

    </View>
  );
};