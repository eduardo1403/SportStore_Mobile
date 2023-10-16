import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container2:{
    flexDirection:"row",
    backgroundColor: 'white',
    justifyContent:'space-between',
    width: '100%',
    height: 150,
    top: 0,
    marginTop:20,
    elevation:5,               
},
container3:{
  flexDirection:"row",
       backgroundColor: 'white',
       justifyContent:'space-between',
       width: '100%',
       height:90,
       top: 0,
       marginTop:'123%',
       elevation:30,              
 },
 buttonContainer: {
  marginLeft: 30,
  marginTop: 25,
  width:350,

},
text:{
  left:20,
  top:20,
  fontSize:16,
  width:"80%",
  color:'grey',
  fontFamily:'Poppins-Regular'
},

});
  export {styles}