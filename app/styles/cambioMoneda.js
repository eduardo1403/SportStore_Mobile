import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#F8F9FA',
    padding: 20,
  },
  header: {
    width: 380,
    height: 62,
    backgroundColor: '#F8F9FA',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowRadius: 34,
    shadowOpacity: 0.6,
    marginBottom: 30,
  },
  headerText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    position: 'absolute',
    left: 70,
    top: 20,
  },
  Icono: {
    position: 'absolute',
    width: 60,
    height: 65,
    left: 10,
  },
cont: {
  flexDirection: "row",
  backgroundColor: 'white',
  justifyContent: 'space-between',
  width: 380,
  height: 60,
  top: 0,
  marginTop: 20,
  elevation: 5,
  alignItems: 'center',
},
text: {
  left: 20,
  fontSize: 16,
  color: 'black',
  fontFamily: 'Poppins-Regular',
},

radioButton: {
  marginRight: 10,
},

 
});
  export {styles} 