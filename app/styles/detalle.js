import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    img: {
        width: '100%',
        height: '100%',
      },
      Container_img:{
        width:'100%',
        height:550,
        overflow:'hidden',
    
      },
      Container_text:{
        width:'90%',
        margin:'4%'
      },
      textTit:{
        bottom:'5%',
        fontSize: 16,
        fontFamily:'Poppins-SemiBold',
      },
      text: {
        fontSize: 16,
        fontFamily:'Poppins-Regular',
      },
      Container_select:{
        width:'30%',
        margin:'4%'
    
      },
      buttonContainer: {
        width:'80%',
        marginTop:25,
      },
      container3:{
        flexDirection:"row",
        backgroundColor: 'white',
        justifyContent:'center',
        width: '100%',
        height:90,
        top: 0,
        marginTop:95,
        elevation:30,              
       },
    
      
    });

export {styles}