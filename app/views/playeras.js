import React, { useState, useEffect, useDebugValue } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from '../styles/producto'; // Importa los estilos desde el archivo 
import { useNavigation } from "@react-navigation/native";
import Carritos from './carrito';
import AsyncStorage from '@react-native-async-storage/async-storage'; 



const Playeras = () => {
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

  let Playera1 = {};
  

  const filteredProducts = producto
    .filter(playera => playera._id === '64ff720a4ad1df1cdb0733a2');

  // Verificar si se encontró un producto con el ID especificado
  if (filteredProducts.length > 0) {
    Playera1 = filteredProducts.map(filteredPlayera1 => ({
      title: filteredPlayera1.title,
      description: filteredPlayera1.description,
      precio: filteredPlayera1.precio,
    }))[0];
  }

  let Playera2 = {};

  const filteredProductsdos = producto.filter(playerados => playerados._id === '64ff723a02e55c2e1702a381');

  if(filteredProductsdos.length > 0){
    Playera2 = filteredProductsdos.map(filteredPlayera2 => ({
      title: filteredPlayera2.title,
      description: filteredPlayera2.description,
      precio: filteredPlayera2.precio,
    }))[0];
  }

  let Playera3 = {};

  const filteredProductstres = producto.filter(playeratres => playeratres._id === '64ff72ac0e66797180075452');

  if(filteredProductstres.length > 0){
    Playera3 = filteredProductstres.map(filteredPlayera3 => ({
      title: filteredPlayera3.title,
      description: filteredPlayera3.description,
      precio: filteredPlayera3.precio,
    }))[0];
  }

  let Playera4 = {};

  const filteredProductscuatro = producto.filter(playeracuatro => playeracuatro._id === '64ff72e320c3525d5b021381');

  if(filteredProductscuatro.length > 0){
    Playera4 = filteredProductscuatro.map(filteredPlayera4 => ({
      title: filteredPlayera4.title,
      description: filteredPlayera4.description,
      precio: filteredPlayera4.precio,
    }))[0];
  }

  let Playera5 = {};

  const filteredProductscinco = producto.filter(playeracinco => playeracinco._id === '64ff732752db9493e301ec91');

  if(filteredProductscinco.length > 0){
    Playera5 = filteredProductscinco.map(filteredPlayera5 => ({
      title: filteredPlayera5.title,
      description: filteredPlayera5.description,
      precio: filteredPlayera5.precio,
    }))[0];
  }

  let Playera6 = {};

  const filteredProductseis = producto.filter(playeraseis => playeraseis._id === '64ff73995a72dadcd6057bc1');

  if(filteredProductseis.length > 0){
    Playera6 = filteredProductseis.map(filteredPlayera6 => ({
      title: filteredPlayera6.title,
      description: filteredPlayera6.description,
      precio: filteredPlayera6.precio,
    }))[0];
  }


  const productsData = [
    { id: '1', name: `${Playera1.title || 'cargando..'}`, price: `$${Playera1.precio || 'cargando..'} MXN`, description: `${Playera1.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//1102023389.jpg'
    },
    { id: '2', name: `${Playera2.title || 'cargando..'}`, price: `$${Playera2.precio || 'cargando..'} MXN`, description: `${Playera2.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//1105802818.jpg'
    },
    { id: '3', name: `${Playera3.title || 'cargando..'}`, price: `$${Playera3.precio || 'cargando..'} MXN`, description: `${Playera3.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//5004952571.jpg'
    },
    { id: '4', name: `${Playera4.title || 'cargando..'}`, price: `$${Playera4.precio || 'cargando..'} MXN`, description: `${Playera4.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//00750052706821l.jpg'
    },
    { id: '5', name: `${Playera5.title || 'cargando..'}`, price: `$${Playera5.precio || 'cargando..'} MXN`, description: `${Playera5.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//51gQPVXc9AL._AC_SL1200_.jpg'
    },
    { id: '6', name: `${Playera6.title || 'cargando..'}`, price: `$${Playera6.precio || 'cargando..'} MXN`, description: `${Playera6.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//3019498-0001V1.jpg'
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

export default Playeras;