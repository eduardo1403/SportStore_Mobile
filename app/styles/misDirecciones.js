import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container2:{
    flex: 1,
        backgroundColor: '#F8F9FA',
        position: 'absolute',
        padding: 10,
        width: '100%',
        top: 0,
        elevation: 2,
        maxHeight: '100%'              
},
container3:{
  flexDirection:"row",
       backgroundColor: 'white',
       justifyContent:'space-between',
       width: '100%',
       height:90,
       top: 0,
       marginTop:'160%',
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
Sindirecciones:{
  fontFamily:'Poppins-Regular',
  fontSize: 16,
  left:50

},
tarjeta: {
  
  width: '100%',
  borderRadius: 10,
  marginVertical: 10,
  backgroundColor: '#ffffff',
},
cardHeader: {
  backgroundColor: '#202020',
  height: 50,
  flexDirection:'row',
  justifyContent:'space-around'
},
cardTitle: {
  color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
},
cardBody: {
  backgroundColor: '#ffffff',
  height: 100,
},
cardSubtitle: {
  color: '#202020',
    fontSize: 14,
},
iconLocation:{
  left:300,
  bottom:80
}

});
  export {styles}