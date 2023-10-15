import React, {Component} from 'react';
import {Button, View, Image,TextInput, Text, Pressable, StyleSheet} from 'react-native';
import {styles} from '../styles/ajustes'


const ajustes = () =>  {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Moneda</Text>
          <Text style={styles.text2}>MXN u</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text}>Aviso de privacidad</Text>
          <Text style={styles.text3}>u</Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.text}>Misión y Visión</Text>
          <Text style={styles.text3}>u</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Button
              title="Iniciar sesión"
              color="black"/> 
        </View>
      </View>
        
    )
  }


export default ajustes