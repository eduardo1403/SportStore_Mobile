import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../styles/cambioMoneda'
import CheckBox from 'react-native-check-box';


const Convertidor = () => {

  return (  
    
    <View style={styles.container}>
      
      <View style={styles.cont}>
        <Text style={styles.text}>MXN</Text>
          <View style={styles.radioButton}>
          </View>
      </View>

      <View style={styles.cont}>
        <Text style={styles.text}>USD</Text>
          <View style={styles.radioButton}>
              
          </View>
      </View>


      <View style={styles.cont}>
        <Text style={styles.text}>EUR</Text>
          <View style={styles.radioButton}>
              
          </View>
      </View>

    </View>

    
  );
};


export default Convertidor;