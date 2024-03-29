import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    text:{
      left:20,
      top:'3%',
      fontSize:16,
      color:'black',
      padding: 5
    },
    container:{
        flexDirection:"row",
        backgroundColor: 'white',
        justifyContent:'space-between',
        width: '100%',
        height: 50,
        top: 0,
        marginTop:40,
        elevation:5,               
  },
 text2:{
     position: 'absolute',
     left:'80%',
     top: '35%',
     color:'black',
     fontSize:16,
 },
 container2:{
    backgroundColor: '#F8F9FA',
    padding: 10,
    position: 'absolute',
    width: '100%',
    height:'88%',
    elevation: 2,
    maxHeight: '70%',
    marginTop:'25%'              
  },
  producto:{
     position: 'absolute',
     top:50,
     width: 100,
     height: 100,
 },
 textProd:{
     position:'absolute',
      top:45,
      left:140,
      fontSize:16,
      color:'black',
 },
 textTalla:{
     position:'absolute',
     top:70,
     left:140,
     fontSize:16,
     color:'grey',
 },
 textPrecio:{
     position:'absolute',
     top:95,
     left:140,
     fontSize:16,
     color:'#DC3545',
 },
 textTit:{
     position:'absolute',
     top:40,
     left:20,
     fontSize:16,
     color:'black',
 },
 imgPago:{
     position: 'absolute',
     top:75,
     left:60,
     width: 40,
     height: 40,
 },
 textPago:{
     position:'absolute',
     top:75,
     left:120,
     fontSize:16,
 },
 container3:{
    flexDirection:"row",
    backgroundColor: 'white',
    justifyContent:'space-between',
    width: '100%',
    height:100,
    top: '68%',
    left:0,
    right:0,
    elevation:30,
    position:'absolute'              
  },
  textFin1:{
     position:'absolute',
     top:10,
     left:20,
     fontSize:16,
 },
 textFin2:{
     position:'absolute',
     top:10,
     left:300,
     fontSize:16,
 },
  buttonContainer: {
     marginLeft: '5%',
     marginTop: 40,
     width:'90%',

   },
   ContainerInicio:{
    position:'absolute',
    width:'100%',
    height:'100%'
    },
    ContainerFin:{
        width:'100%',
        height:'100%'
    },

});

export {styles}