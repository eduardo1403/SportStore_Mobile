import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
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