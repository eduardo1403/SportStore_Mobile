import React, { useState, useEffect, useDebugValue } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from '../styles/producto'; // Importa los estilos desde el archivo 
import { useNavigation } from "@react-navigation/native";


const Shorts = () => {
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
  },[]);

  let Short1 = {};
  

  const filteredProducts = producto
    .filter(short => short._id === '64ff733c7f6ebcef760796b2');

  // Verificar si se encontró un producto con el ID especificado
  if (filteredProducts.length > 0) {
    Short1 = filteredProducts.map(filteredShort1 => ({
      title: filteredShort1.title,
      description: filteredShort1.description,
      precio: filteredShort1.precio,
    }))[0];
  }

  let Short2 = {};

  const filteredProductsdos = producto.filter(shortdos => shortdos._id === '64ff78e148e07eaa540ea541');

  if(filteredProductsdos.length > 0){
    Short2 = filteredProductsdos.map(filteredShort2 => ({
      title: filteredShort2.title,
      description: filteredShort2.description,
      precio: filteredShort2.precio,
    }))[0];
  }

  let Short3 = {};

  const filteredProductstres = producto.filter(shorttres => shorttres._id === '64ff79076a368fb0cd0bfaa1');

  if(filteredProductstres.length > 0){
    Short3 = filteredProductstres.map(filteredShort3 => ({
      title: filteredShort3.title,
      description: filteredShort3.description,
      precio: filteredShort3.precio,
    }))[0];
  }

  let Short4 = {};

  const filteredProductscuatro = producto.filter(shortcuatro => shortcuatro._id === '64ff7937212c7d5722025151');

  if(filteredProductscuatro.length > 0){
    Short4 = filteredProductscuatro.map(filteredShort4 => ({
      title: filteredShort4.title,
      description: filteredShort4.description,
      precio: filteredShort4.precio,
    }))[0];
  }

  let Short5 = {};

  const filteredProductscinco = producto.filter(shortcinco => shortcinco._id === '64ff7976b1490d748f075861');

  if(filteredProductscinco.length > 0){
    Short5 = filteredProductscinco.map(filteredShort5 => ({
      title: filteredShort5.title,
      description: filteredShort5.description,
      precio: filteredShort5.precio,
    }))[0];
  }

  let Short6 = {};

  const filteredProductseis = producto.filter(shortseis => shortseis._id === '65531784e259ab9dbb0a55f1');

  if(filteredProductseis.length > 0){
    Short6 = filteredProductseis.map(filteredShort6 => ({
      title: filteredShort6.title,
      description: filteredShort6.description,
      precio: filteredShort6.precio,
    }))[0];
  }


  const productsData = [
    { id: '1', name: `${Short1.title || 'cargando..'}`, price: `$${Short1.precio || 'cargando..'} MXN`, description: `${Short1.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//3019685-0414V1.jpg'
    },
    { id: '2', name: `${Short2.title || 'cargando..'}`, price: `$${Short2.precio || 'cargando..'} MXN`, description: `${Short2.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//shorts-deportivos-para-hombres-9.jpg'
    },
    { id: '3', name: `${Short3.title || 'cargando..'}`, price: `$${Short3.precio || 'cargando..'} MXN`, description: `${Short3.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//shorts-essentials-3-tiras-aeroready.jpg'
    },
    { id: '4', name: `${Short4.title || 'cargando..'}`, price: `$${Short4.precio || 'cargando..'} MXN`, description: `${Short4.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//fa0f6317b298c56632a6c41894f5309d-product.jpg'
    },
    { id: '5', name: `${Short5.title || 'cargando..'}`, price: `$${Short5.precio || 'cargando..'} MXN`, description: `${Short5.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//dri-fit-adv-aps-15cm-unlined-versatile-shorts-N3h8QJ.png'
    },
    { id: '6', name: `${Short6.title || 'cargando..'}`, price: `$${Short6.precio || 'cargando..'} MXN`, description: `${Short6.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//shorts-de-b%C3%A1squetbol-dri-fit-icon-2c8F76.png'
    },
    
    // Agrega más productos aquí
  ];


  const handleProductPress = (product) => {
    setSelectedProduct(product);
    
  };

  const handleAddToCart = (product) => {
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

export default Shorts;