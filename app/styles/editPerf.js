import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 10,
    marginTop: 25,
  },
  inputContainer: {
    marginTop: 35,
  },
  input: {
    height:35,
    borderWidth: 0, 
    borderColor: '#CCCCCC',
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
    fontFamily: 'Poppins',
  },
  inputLine: {
    height: 2,
    backgroundColor: '#CCCCCC',
    marginBottom: 20,
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
    marginBottom: 30,
    marginTop:20,
    alignItems:"flex-start",
   
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
    left:40,
    marginTop:-25,
  },
  header: {
    marginTop: 30,
  },
  miPerfil: {
    fontFamily:'Poppins',
    marginLeft: 15,
    fontSize:20,
  },
  Icono:{   
    width: 20,
    height: 20,
   marginLeft: "110%",
   marginBottom: 20,
   marginTop:-20,
},
flecha:{   
  width: 20,
  height: 20,
 marginLeft: "92%",
 marginBottom: 0,
 marginTop:-20,
},
content: {
  width: 300,
    height: 70,
    backgroundColor: '#F8F9FA',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 2, height: 9 },
    shadowRadius: 20,
    shadowOpacity: 0.5,
}
});


  export {styles}