import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../styles/cambioMoneda'

const Convertidor = () => {
  return (  
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./img/izquierda.png')} style={styles.Icono}/>
        <Text style={styles.headerText}>Editar dirección</Text>
      </View>
      
  <View style={styles.conversionInputs}>
        <View style={styles.inputContainer}>
          <Text style={styles.currencyLabel}>MXN</Text>
          <TextInput
            style={styles.input}
            placeholder="Cantidad en MXN"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.currencyLabel}>USD</Text>
          <TextInput
            style={styles.input}
            placeholder="Cantidad en USD"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.currencyLabel}>EUR</Text>
          <TextInput
            style={styles.input}
            placeholder="Cantidad en EUR"
            keyboardType="numeric"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.convertButton}>
        <Text style={styles.convertButtonText}>Convertir</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Convertidor;