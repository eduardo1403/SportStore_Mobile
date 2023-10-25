import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    buttonContainer: {
      margin: 20,
    },
    imagen: {
      justifyContent:'center', 
      width: 200,
      height: 67.74,
      left: 20,
    paddingBottom:50,
    paddingTop:50,
    },
    containerLogo:{
      alignItems: 'center',
    },
    input: {
      height: 50,
      margin:20,
      borderColor: 'gray',
      borderBottomWidth: 1,
      fontFamily:'Poppins-Regular',
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom:50,
      fontFamily:'Poppins-Regular',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width:130,
      borderColor: 'black',
      borderBottomWidth: 1,
      paddingBottom:10,
      fontFamily:'Poppins-Regular',
    },
    button2: {
      alignItems: 'center',
      justifyContent: 'center',
      width:130,
      paddingBottom:10,
      borderColor: 'WHITE',
      borderBottomWidth: 0,
      fontFamily:'Poppins-Regular',
    },
    textButton: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
      fontFamily:'Poppins-Regular',
    },
    Icono:{      
      position: 'absolute',
      width: 60,
      height: 60,
      left: 10,
  },
});

export {styles}