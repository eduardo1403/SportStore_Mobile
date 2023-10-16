import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 24,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height:35,
    borderWidth: 0, 
    borderColor: '#CCCCCC',
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 15,
    fontFamily: 'Poppins',
  },
  inputLine: {
    height: 2,
    backgroundColor: '#CCCCCC',
  },
  button: {
    backgroundColor: '#DC3545',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins',
  },

  bom: {
    backgroundColor: '#dcdcdc',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
   
  },
    buttonTex: {
    color: '#00000',
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  imagen: {
    width: 80,
    height: 20,
    left: 5,
  },
  containerLogo:{
    alignItems: 'center',
    width:'100%'
  },
  header: {
    height:0.2,
  },
  miPerfil: {
    fontFamily:'Poppins',
    marginLeft: 30,
  },
  Icono:{   
    width: 20,
    height: 20,
   marginLeft: 250,
   marginBottom: 20,
},
content: {
  width: 300,
    height: 50,
    backgroundColor: '#F8F9FA',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 2, height: 9 },
    shadowRadius: 20,
    shadowOpacity: 0.5,
}
});


  export {styles}