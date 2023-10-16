import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: '#F8F9FA',
    },
    header: {
      width: 360,
      height: 72,
      backgroundColor: '#F8F9FA',
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.6,
    },
    headerText: {
      fontFamily: 'Poppins',
      fontSize: 16,
      lineHeight: 24,
      color: '#000000',
      position: 'absolute',
      left: 70,
      top: 21,
    },
    content: {
      paddingHorizontal: 30,
      marginTop: 24,
    },
    label: {
      fontFamily: 'Poppins',
      fontSize: 16,
      lineHeight: 24,
      color: '#7B7474',
      marginBottom: 8,
    },
    updateButton: {
      fontFamily: 'Poppins',
      fontSize: 14,
      lineHeight: 21,
      textAlign: 'center',
      color: '#FFFFFF',
      position: 'absolute',
      left: '25%',
      top: 7,
    },

  input: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    borderColor: '#CCCCCC', 
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  footerButton: {
    width: 360,
    height: 35,
    backgroundColor: '#DC3545',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icono:{      
      position: 'absolute',
      width: 60,
      height: 65,
      left: 10,
  },
});
  
  export {styles}