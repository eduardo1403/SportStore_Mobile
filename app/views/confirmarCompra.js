import React, { useContext, useState, useEffect } from "react";
import { View, Text,Image, Button, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import {styles} from '../styles/confirmarCompra';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons'; 
import Stripe from '@stripe/stripe-react-native';
import { useStripe } from '@stripe/stripe-react-native';
import axios from 'axios';
import { isEmpty, isDefined } from 'react';

const ConfirmarCompra = ({ route }) =>  {
  const navigation = useNavigation();
  const { carrito, totalPrice } = route.params;
  const isFocused = useIsFocused();
  const [usuario, setUsuario] = useState(null);

  const cargarDatosInicioSesion = async () => {
    try {
      const usuarioGuardado = await AsyncStorage.getItem('usuario');
      if (usuarioGuardado) {
        const usuarioParseado = JSON.parse(usuarioGuardado);
        setUsuario(usuarioParseado);
      }
    } catch (error) {
      console.error('Error al cargar los datos de inicio de sesión:', error);
    }
  };

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);

    const API_URL = 'https://api-backend-mqv1.onrender.com/api/';

    useEffect(() => {
      initializePaymentSheet();
      if (isFocused) {
        cargarDatosInicioSesion();
      }
    }, [isFocused, usuario]);
  

    const fetchPaymentSheetParams = async () => {
        const response = await fetch(`${API_URL}/payment-sheet`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ totalPrice }),
        });
        const { paymentIntent, ephemeralKey, customer} = await response.json();
    
        return {
          paymentIntent,
          ephemeralKey,
          customer,
        };
      };

      const initializePaymentSheet = async () => {
        const {
          paymentIntent,
          ephemeralKey,
          customer,
          publishableKey,
        } = await fetchPaymentSheetParams();
    
        const { error } = await initPaymentSheet({
          merchantDisplayName: "Example, Inc.",
          customerId: customer,
          customerEphemeralKeySecret: ephemeralKey,
          paymentIntentClientSecret: paymentIntent,
          // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
          //methods that complete payment after a delay, like SEPA Debit and Sofort.
          allowsDelayedPaymentMethods: true,
          defaultBillingDetails: {
            name: 'Jane Doe',
          }
        });
        if (!error) {
          setLoading(true);
        }
      };

      const openPaymentSheet = async () => {
        const { error } = await presentPaymentSheet();

        if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
        Alert.alert('Success', 'Your order is confirmed!');
        }
      };



  const renderItem = ({ item }) => (
    <View style={estilos.tarjeta}>
      <Image source={{ uri: item.image }} style={estilos.Foto} />
      <Text style={estilos.TitleProd}>{item.name}</Text>
      <Text style={estilos.Precios}>{item.price}</Text>
    </View>
  );


  const handlePress = () => {
    if (usuario) {
      if (usuario._id) {
        // Navigate to Dirección with the 'id'
        navigation.navigate('Dirección', { id: usuario._id });
      } else {
        // Navigate to OtraVista
        navigation.navigate('Sesion');
      }
    } else {
      navigation.navigate('Sesion');
    }
  };
  
    return (
      <View>
        <TouchableOpacity onPress={handlePress}>
        <View style={styles.container}>
          <Text style={styles.text}>Dirección de envio</Text>
          <Text style={styles.text2}>▶</Text>
        </View>
        </TouchableOpacity>

        <View style={styles.ContainerInicio}>
        <View style={styles.container2}>

        <FlatList
        data={carrito}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        />
        
        </View>
        </View>


        <View style={styles.ContainerFin}>
        <View style={styles.container3}>
        <Text style={styles.textFin1}>Total:</Text>
        <Text style={styles.textFin2}>$MXN {totalPrice}</Text>
        <View style={styles.buttonContainer}>
              <Button
              title="Confirmar Compra"
              color="#DC3545"
              disabled={!loading}
              onPress={openPaymentSheet}
              />
          </View>
        </View>
        </View>


      </View>
    )
  }


  const estilos = StyleSheet.create({
    tarjeta: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      margin: 8,
      padding: 16,
      backgroundColor: '#fff',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    TitleProd: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
      marginTop: 4,
      textAlign: 'center',
    },
    Descripcion: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      marginTop: 4,
      textAlign: 'center',
    },
    Precios: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
      color: '#dc3545',
      marginTop: 4,
      textAlign: 'center',
    },
    Foto: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
    },
    BasuraIcon: {
      padding: 5,
      marginTop: 8,
    },
  });

export default ConfirmarCompra;