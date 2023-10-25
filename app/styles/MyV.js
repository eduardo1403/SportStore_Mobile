import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
       TittleText:{
         fontSize:18,
         position: 'absolute',
        left: 39,
        top: 50,
        color: '#2B2525',
        fontFamily:'Poppins-SemiBold'
       },
       TextCont:{
        fontSize:16,
        color:'#7B7472',
        position: 'absolute',
        width: '90%',
       left:'5%',
        height: 600,
        textAlign:'justify',
        top: 90,
        fontFamily:'Poppins-Regular'
      },
      TittleText2:{
        fontSize:18,
        position: 'absolute',
       left: 39,
       top: 300,
       color: '#2B2525',
       fontFamily:'Poppins-SemiBold'
      },
      TextCont2:{
       fontSize:16,
       color:'#7B7472',
       position: 'absolute',
       width: '90%',
       left:'5%',
       height: 350,
       textAlign:'justify',
       justifyContent:'center',
       top: 340,
       fontFamily:'Poppins-Regular'
     },

   });

export {styles}