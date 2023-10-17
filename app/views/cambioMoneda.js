import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import {styles} from '../styles/cambioMoneda'


const Convertidor = () => {

  return (  
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./img/izquierda.png')} style={styles.Icono}/>
        <Text style={styles.headerText}>Editar dirección</Text>
      </View>
      
      <View style={styles.cont}>
        <Text style={styles.text}>MXN</Text>
          <View style={styles.radioButton}>
              <RadioButton.Android
                value="MXN"
                status="checked"
              />
          </View>
      </View>

      <View style={styles.cont}>
        <Text style={styles.text}>USD</Text>
          <View style={styles.radioButton}>
              <RadioButton.Android
                value="USD"
                status="checked"
              />
          </View>
      </View>


      <View style={styles.cont}>
        <Text style={styles.text}>EUR</Text>
          <View style={styles.radioButton}>
              <RadioButton.Android
                value="EUR"
                status="checked"
              />
          </View>
      </View>

    </View>

    
  );
};


export default Convertidor;