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
  marginLeft: 370,
  marginTop: 30,
  },
  content: {
    justifyContent:'center',
    marginLeft:10,
    marginTop:'20%',
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
    flexDirection:"row",
    backgroundColor: 'white',
    justifyContent:'space-between',
    width: '100%',
    height: 60,
    top: 0,
    marginTop:40,
    elevation:5,               
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
  marginTop:250,
  margin: 20,
},
});
  export {styles}