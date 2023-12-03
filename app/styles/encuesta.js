import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    contenedor: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF', // Blanco
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#800000', // Vino
    },
    subtitulo: {
      fontSize: 18,
      marginBottom: 20,
      color: '#800000', // Vino
    },
    opcionesContenedor: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    opcion: {
      padding: 10,
      marginHorizontal: 5,
      borderWidth: 1,
      borderColor: '#800000', // Vino
      borderRadius: 5,
    },
    opcionSeleccionada: {
      backgroundColor: '#800000', // Vino
    },
    botonEnviar: {
      backgroundColor: '#800000', // Vino
      padding: 10,
      borderRadius: 5,
    },
    textoBoton: {
      color: '#FFFFFF', // Blanco
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export {styles}