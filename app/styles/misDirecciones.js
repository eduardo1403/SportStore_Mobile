import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  header: {
    backgroundColor: '#F8F9FA', 
    paddingVertical: 40,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 1,
  },
  headerText: {
    position: 'absolute',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    left: 50,
  },
  addressContainer: {
    backgroundColor: '#F8F9FA',
    padding: 20,
    borderColor: 'rgba(0, 0, 0, 0.8)',
    borderWidth: 1,
  },
  addressText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    color: '#7B7474',
  },
    button: {
    backgroundColor: '#DC3545',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontFamily: 'Poppins',
    color: 'black',
    fontSize: 15,
  },
  Icono:{      
    position: 'absolute',
    width: 40,
    height: 30,
    left: 10,
},
});
  export {styles}