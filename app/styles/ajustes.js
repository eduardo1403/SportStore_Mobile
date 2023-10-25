import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
       TextInicio:{
         position: 'relative',
         left:70,
         top:20,
         fontSize:16,
         color:'black',
         fontFamily:'Poppins-SemiBold'
       },
       text:{
         left:20,
         top:20,
         fontSize:16,
         color:'black',
         fontFamily:'Poppins-Regular'
       },
       text2:{
        left:90,
        top:20,
        fontSize:16,
        color:'black',
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
     container2:{
           flexDirection:"row",
           backgroundColor: 'white',
           shadowColor: '#000',
           justifyContent:'space-between',
           width: '100%',
           height:60,
           top: 0,
           marginTop:30,
           elevation:5,               
    },
    container3:{
        flexDirection:"row",
        backgroundColor: 'white',
        shadowColor: '#000',
        justifyContent:'space-between',
        width: '100%',
        height:60,
        top: 0,
        elevation:5,             
 },
     buttonContainer: {
        margin: 20,
        top:300,
      },
    text2:{
        position: 'absolute',
        left: 330,
        top: 20,
        fontFamily:'Poppins-Regular'
    },
    text3:{
        position: 'absolute',
        left: 370,
        top: 20,
        fontFamily:'Poppins-Regular'
    }
   });

export {styles}