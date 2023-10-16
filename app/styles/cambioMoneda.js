import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: '#F8F9FA',
      padding: 10,
    },
    header: {
      width: 300,
      height: 62,
      backgroundColor: '#F8F9FA',
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowRadius: 34,
      shadowOpacity: 0.6,
      marginBottom: 30,
    },
    headerText: {
      fontFamily: 'Poppins',
      fontSize: 16,
      lineHeight: 24,
      color: '#000000',
      position: 'absolute',
      left: 70,
      top: 20,
    },
    
conversionInputs: {
      marginBottom: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
     currencyLabel: {
      fontFamily: 'Poppins',
      fontSize: 15,
      marginRight: 10,
    },
    convertButton: {
      backgroundColor: '#DC3545',
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 16,
    },
    convertButtonText: {
      fontFamily: 'Poppins',
      color: 'white',
      fontSize: 18,
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
  Icono:{      
      position: 'absolute',
      width: 60,
      height: 65, 
      left: 10,
  },
});
  export {styles} 