import React from 'react';
import { View, Text, Image,TextInput,TouchableOpacity,Button } from 'react-native';
import {styles} from '../styles/editDirect'

const EdtDiecction = () => {
  return ( 
    <View style={styles.container}> 
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
        />
        <TextInput
          style={styles.input}
          placeholder="Estado"
        />
        <TextInput
          style={styles.input}
          placeholder="Municipio"
        />
        <TextInput
          style={styles.input}
          placeholder="Colonia"
        />
        <TextInput
          style={styles.input}
          placeholder="Calle"
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
        />
        <TextInput
          style={styles.input}
          placeholder="Indicaciones adicionales"
        />
        </View>
        <View style={styles.container3}>
        <View style={styles.buttonContainer}>
              <Button
              title="Actualizar dirección"
              color="#DC3545"
              />
        </View>  
        </View>
    </View>
  );
};

export default EdtDiecction;

