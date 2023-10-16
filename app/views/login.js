import React, {Component} from 'react';
import {Button, View, Image,TextInput, Text, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from '../styles/login'
import { useNavigation } from "@react-navigation/native";

const formulario = () =>  {
  const navigation = useNavigation();
  return (
      <View>
          <View style={styles.containerLogo}>
              <Image source={require('../img/logo.png')} style={styles.imagen}/>
          </View >
          <View style={styles.fixToText}>
          </View>
          <View style={styles.fixToText}>
              <Pressable style={styles.button}>
                <Text style={styles.textButton}>INICIAR SESIÓN</Text>
              </Pressable>
              <Pressable style={styles.button2} onPress={() => navigation.navigate('Registro')}>
                <Text style={styles.textButton}>REGISTRARSE</Text>
              </Pressable>
          </View>
          <TextInput style={styles.input}
          placeholder="Usuario"
          />
          <TextInput style={styles.input}
          placeholder="Contraseña"
          />
          <TouchableOpacity >
            <View style={styles.buttonContainer}>
                <Button
                title="Iniciar sesión"
                color="#DC3545"
                />
            </View>
          </TouchableOpacity>
      </View>
      
  )
}


export default formulario