import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: '#F8F9FA',
    },
    content: {
      justifyContent:'center',
      marginLeft:20,
    },
  footerButton: {
    width: 360,
    height: 35,
    backgroundColor: '#DC3545',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    width:'80%',
    fontFamily: 'Poppins-Regular',
    height: 30,
    margin:20,
    borderColor: 'gray',
    borderBottomWidth: 1
  },
  buttonContainer: {
    width:'90%',
    marginTop:'5%',
  },
  container3:{
    flexDirection:"row",
    justifyContent:'center',
    width: '100%',
    height:90,
    top: 0,
    marginTop:'30%',              
   },
});
  
  export {styles}