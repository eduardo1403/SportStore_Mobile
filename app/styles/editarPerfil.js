import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  containerBack: {
    backgroundColor: '#F8F9FA',
  },
  HeaderInicio: {
        position: "absolute",
        width: 420,
        height: 60,
        left: 0,
        top: 0,
        backgroundColor: "white",
    },
    LogoHeader:{
      position: 'absolute',
      width: 99.59,
      height: 45,
      left: 170,
      top: 16,
  },
  textInicio:{
    position: "absolute",
    fontFamily: 'Poppins-SemiBold',
    left:25,
    top:29,
    fontSize: 20,
    color: '#000'
  },
  Icono:{   
    position: "absolute",
  marginLeft: 350,
  marginTop: 30,
  },
  input: {
    fontSize: 16,
    width:'85%',
    fontFamily: 'Poppins-Regular',
    height: 45,
    margin:20,
    borderColor: 'gray',
    borderBottomWidth: 1
  },
  container:{
    backgroundColor: 'white',
    width: '100%',
    height: '8%',
    marginTop:'100%',
    elevation:5,  
    position:'absolute'             
},
text2:{
  left:370,
  fontSize:10,
  color:'black',
},
text:{
  left:30,
  top:20,
  fontSize:16,
  color:'black',
  fontFamily:'Poppins-Regular'
},
buttonContainer: {
  left:"10%",
  width:'80%',
},
eyeIconContainer:{
  left:310,
  bottom: '50%'
},
forms:{
  width:'100%',
  height:'70%',
  marginTop:'15%',
  position:'absolute'
},
ContainerBoton:{
  width:'100%',
  marginTop:'165%'
},
});
  export {styles}