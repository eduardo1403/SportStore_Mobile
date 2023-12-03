import React, {Component} from 'react';
import {Button, View, Image,TextInput, Text, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from '../styles/ajustes'
import { useNavigation } from "@react-navigation/native";

const Ajustes = () =>  {
  const navigation = useNavigation();
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Encuesta')}>
            <Text style={styles.text}>Encuesta</Text>
            <Text style={styles.text3}>▶</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity onPress={() => navigation.navigate('Aviso de privacidad')}>
            <Text style={styles.text}>Aviso de privacidad</Text>
            <Text style={styles.text3}>▶</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity onPress={() => navigation.navigate('Mision y vision')}>
            <Text style={styles.text}>Misión y Visión</Text>
            <Text style={styles.text3}>▶</Text>
          </TouchableOpacity>
        </View>
        
          <View style={styles.buttonContainer}>
            <TouchableOpacity >
                <Button
                  title="Iniciar sesión"
                  color="black"
                  onPress={() => navigation.navigate('Sesion')}/> 
              </TouchableOpacity>
          </View>
        
      </View>
        
    )
  }


export default Ajustes