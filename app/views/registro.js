import React, {Component} from 'react';
import {Button, View, Image,TextInput, Text, Pressable, StyleSheet} from 'react-native';
import {styles} from '../styles/login'


const formulario = () =>  {
  return (
      <View>
          <View style={styles.containerLogo}>
            <Image source={require('../img/logo.png')} style={styles.imagen}/>
          </View >
          <View style={styles.fixToText}>
          </View>
          <View style={styles.fixToText}>
              <Pressable style={styles.button2}>
                <Text style={styles.textButton}>INICIAR SESIÓN</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.textButton}>REGISTRARSE</Text>
              </Pressable>
          </View>
          <TextInput style={styles.input}
          placeholder="Correo electrónico"
          />
          <View style={styles.buttonContainer}>
              <Button
              title="Iniciar sesión"
              color="#DC3545"
              />
          </View>
      </View>
      
  )
}


export default formulario