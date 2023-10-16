import React from 'react';
import { View, Text, Image,TextInput,TouchableOpacity } from 'react-native';
import {styles} from '../styles/editDirect'

const EdtDiecction = () => {
  return ( 
    <View style={styles.container}> 
      <View style={styles.header}>
        <Image source={require('./img/izquierda.png')} style={styles.Icono}/>
        <Text style={styles.headerText}>Editar dirección</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
        />
        <Text style={styles.label}>Estado</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu estado"
        />
        <Text style={styles.label}>Municipio</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu municipio"
        />
        {/* Agrega más inputs según tus necesidades */}
        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu teléfono"
        />
        <Text style={styles.label}>Indicaciones adicionales</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tus indicaciones adicionales"
        />
      </View>
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.updateButton}>Actualizar dirección</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EdtDiecction;

