import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button, Image, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { styleCart } from '../styles/carrito';
import { style } from '../styles/inicio';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons'; 

const Carritos = () => {
  const navigation = useNavigation();
  const [carrito, setCarrito] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const isFocused = useIsFocused();


  const cargarData = async () => {
    try {
      const carritoGuardado = await AsyncStorage.getItem('cartItem');
      console.log('carritoGuardado:', carritoGuardado);
  
      if (carritoGuardado) {
        const carritoParseado = JSON.parse(carritoGuardado);
        console.log('carritoParseado:', carritoParseado);
        setCarrito(carritoParseado);
        calculateTotalPrice(carritoParseado);
      }
    } catch (error) {
      alert('Error al cargar los datos del Carrito:', error);
    }
  }

  const calculateTotalPrice = (products) => {
    let total = 0;
    for (const product of products) {
      const price = parseInt(product.price.replace('$', '').replace('MXN', ''));
      total += price;
    }
    setTotalPrice(total);
  };

  useEffect(() => {
    if (isFocused) {
      cargarData();
      
    }
  }, [isFocused]);

  console.log(carrito);

  const handleRemoveFromCart = (product) => {
    const updatedCart = carrito.filter((item) => item.id !== product.id);
    setCarrito(updatedCart);
    calculateTotalPrice(updatedCart);
  };


  


  return (
    
    <View>
      <View style={style.HeaderInicio}></View>
      <Image source={require('../img/logo.png')} style={style.LogoHeader} />
      <Text style={style.textInicio}>Carrito</Text>
     

      <View style={styleCart.ContainerInicio}>
        <View style={styleCart.ContainerProducto}>
        <FlatList
          data={carrito}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={estilos.tarjeta}>
              <Image source={{ uri: item.image }} style={estilos.Foto}/>
              <Text style={estilos.TitleProd}>{item.name}</Text>
              <Text style={estilos.Descripcion}>{item.description}</Text>
              <Text style={estilos.Precios} >{item.price}</Text>
              <TouchableOpacity onPress={() => handleRemoveFromCart(item)} style={estilos.BasuraIcon}>
                <FontAwesome name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          )}
          onEndReached={() => calculateTotalPrice(carrito)}
        />
        </View>
      </View>
      <View style={styleCart.ContainerFin}>
        <View style={styleCart.ContainerCompra}>
        <Text style={styleCart.PrecioTotalCompra}>$MXN {totalPrice}</Text>
          <View style={styleCart.ButtonComprar}>
            <Button
              title="Comprar"
              color="#DC3545"
              onPress={() => navigation.navigate('Confirmar compra',{ carrito, totalPrice })}
            />
          </View>
          
      </View>
      </View>
    </View>
    
  );
};

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
  TitleProd:{
    fontFamily: 'Poppins-SemiBold',

    fontSize: 14,
    marginTop: 4,
    textAlign: 'center'
  },
  Descripcion:{
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center'
  },
  Precios:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#dc3545',
    marginTop: 4,
    textAlign: 'center'
  },
  Foto:{
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  BasuraIcon:{
    padding: 5,
    marginTop: 8,
  }
});

export default Carritos;
