import React, { useState, useEffect, useDebugValue } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from '../styles/producto'; // Importa los estilos desde el archivo 
import { useNavigation } from "@react-navigation/native";
import Carritos from './carrito';
import AsyncStorage from '@react-native-async-storage/async-storage'; 


const Conjuntos = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [producto, setProducto] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    const obtenerProducto = async() =>{
      const url = 'https://api-backend-mqv1.onrender.com/api/product';
      const resultado = await axios.get(url);
      //console.log(resultado.data);
      setProducto(resultado.data);
  }
  obtenerProducto();

  const saveCartItems = async () => {
    try {
      await AsyncStorage.setItem('cartItem', JSON.stringify(cartItems));
      navigation.navigate('Carrito');
    } catch (error) {
      alert('Se produjo un error al guardar en el carrito');
    }
  };

  if (cartItems.length > 0) {
    saveCartItems();
  }
  },[cartItems]);

  

  let Conjunto1 = {};
  
  const filteredProducts = producto.filter(conjunto => conjunto._id === '64ff6a8dfba28236a2085761');

  // Verificar si se encontró un producto con el ID especificado
  if (filteredProducts.length > 0) {
    Conjunto1 = filteredProducts.map(filteredConjunto1 => ({
      title: filteredConjunto1.title,
      description: filteredConjunto1.description,
      precio: filteredConjunto1.precio,
    }))[0];
  }

  let Conjunto2 = {};

  const filteredProductsdos = producto.filter(conjuntodos => conjuntodos._id === '64ff6fb8830125812608d873');

  if(filteredProductsdos.length > 0){
    Conjunto2 = filteredProductsdos.map(filteredConjunto2 => ({
      title: filteredConjunto2.title,
      description: filteredConjunto2.description,
      precio: filteredConjunto2.precio,
    }))[0];
  }

  let Conjunto3 = {};

  const filteredProductstres = producto.filter(conjuntotres => conjuntotres._id === '64ff72b773125c8457038721');

  if(filteredProductstres.length > 0){
    Conjunto3 = filteredProductstres.map(filteredConjunto3 => ({
      title: filteredConjunto3.title,
      description: filteredConjunto3.description,
      precio: filteredConjunto3.precio,
    }))[0];
  }

  let Conjunto4 = {};

  const filteredProductscuatro = producto.filter(conjuntocuatro => conjuntocuatro._id === '65530b0d3b6490cf080df231');

  if(filteredProductscuatro.length > 0){
    Conjunto4 = filteredProductscuatro.map(filteredConjunto4=> ({
      title: filteredConjunto4.title,
      description: filteredConjunto4.description,
      precio: filteredConjunto4.precio,
    }))[0];
  }

  let Conjunto5 = {};

  const filteredProductscinco = producto.filter(conjuntocinco => conjuntocinco._id === '655314b2ca1b9fe5ef0d6b21');

  if(filteredProductscinco.length > 0){
    Conjunto5 = filteredProductscinco.map(filteredConjunto5 => ({
      title: filteredConjunto5.title,
      description: filteredConjunto5.description,
      precio: filteredConjunto5.precio,
    }))[0];
  }

  let Conjunto6 = {};

  const filteredProductseis = producto.filter(conjuntoseis => conjuntoseis._id === '6553162fa5e3c689bd0ac661');

  if(filteredProductseis.length > 0){
    Conjunto6 = filteredProductseis.map(filteredConjunto6 => ({
      title: filteredConjunto6.title,
      description: filteredConjunto6.description,
      precio: filteredConjunto6.precio,
    }))[0];
  }


  const productsData = [
    { id: '1', name: `${Conjunto1.title || 'cargando..'}`, price: `$${Conjunto1.precio || 'cargando..'} MXN`, description: `${Conjunto1.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//congunto%20gris.jpg'
    },
    { id: '2', name: `${Conjunto2.title || 'cargando..'}`, price: `$${Conjunto2.precio || 'cargando..'} MXN`, description: `${Conjunto2.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//top%20bino%20y%20leggins%20bino.jpg'
    },
    { id: '3', name: `${Conjunto3.title || 'cargando..'}`, price: `$${Conjunto3.precio || 'cargando..'} MXN`, description: `${Conjunto3.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//top%20negro%20y%20leggins%20estanmpados.png'
    },
    { id: '4', name: `${Conjunto4.title || 'cargando..'}`, price: `$${Conjunto4.precio || 'cargando..'} MXN`, description: `${Conjunto4.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//62db31ed1518c-539886-500x500.jpg'
    },
    { id: '5', name: `${Conjunto5.title || 'cargando..'}`, price: `$${Conjunto5.precio || 'cargando..'} MXN`, description: `${Conjunto5.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//S995ac7ba55c94a33ab24b12e846e2340w.jpg_640x640q90.jpg'
    },
    { id: '6', name: `${Conjunto6.title || 'cargando..'}`, price: `$${Conjunto6.precio || 'cargando..'} MXN`, description: `${Conjunto6.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//877620098f02a2ad8af2fe065151f742.jpg'
    },
    
    // Agrega más productos aquí
  ];


   const handleProductPress = (product) => {
    setSelectedProduct(product);
    
  };

  const handleAddToCart = async (product) => {
    setCartItems([...cartItems, product]);
  };
  
  

  const handleRemoveFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };
  
  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)} style={styles.productContainer}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      {cartItems.find((cartItem) => cartItem.id === item.id) ? (
        <TouchableOpacity onPress={() => handleRemoveFromCart(item)} style={styles.removeFromCartButton}>
          <FontAwesome name="trash" size={20} color="red" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => handleAddToCart(item)} style={styles.addToCartButton}>
          <FontAwesome name="shopping-cart" size={20} color="#00000" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <View style={styles.cartContainer}>
        <FontAwesome name="shopping-cart" size={20} color="#00000" />
        
      </View>

      <FlatList
        data={productsData}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2} 
      />
      {selectedProduct && (
        <View style={styles.productDetails}>
          <Image source={{uri:selectedProduct.image}} style={styles.productImage} />
          <Text style={styles.productName}>Nombre: {selectedProduct.name}</Text>
          <Text style={styles.productPrice}>Precio: {selectedProduct.price}</Text>
          <Text style={styles.productDescription}>Descripción: {selectedProduct.description}</Text>
        </View>
      )}
    </View>
  );
};

export default Conjuntos;