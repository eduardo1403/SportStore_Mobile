import React, { useState, useEffect, useDebugValue } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from '../styles/producto'; // Importa los estilos desde el archivo 



const Pants = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const obtenerProducto = async() =>{
      const url = 'https://api-backend-mqv1.onrender.com/api/product';
      const resultado = await axios.get(url);
      //console.log(resultado.data);
      setProducto(resultado.data);
  }
  obtenerProducto();
  },[]);

  let Pants1 = {};
  

  const filteredProducts = producto
    .filter(pants => pants._id === '64b9b60c2a161bb6260596f1');

  // Verificar si se encontró un producto con el ID especificado
  if (filteredProducts.length > 0) {
    Pants1 = filteredProducts.map(filteredPants1 => ({
      title: filteredPants1.title,
      description: filteredPants1.description,
      precio: filteredPants1.precio,
    }))[0];
  }

  let Pants2 = {};

  const filteredProductsdos = producto.filter(pantsdos => pantsdos._id === '65531855936a85f5a8095801');

  if(filteredProductsdos.length > 0){
    Pants2 = filteredProductsdos.map(filteredPants2 => ({
      title: filteredPants2.title,
      description: filteredPants2.description,
      precio: filteredPants2.precio,
    }))[0];
  }

  let Pants3 = {};

  const filteredProductstres = producto.filter(pantstres => pantstres._id === '65531878f2fc9713190b8351');

  if(filteredProductstres.length > 0){
    Pants3 = filteredProductstres.map(filteredPants3 => ({
      title: filteredPants3.title,
      description: filteredPants3.description,
      precio: filteredPants3.precio,
    }))[0];
  }

  let Pants4 = {};

  const filteredProductscuatro = producto.filter(pantscuatro => pantscuatro._id === '655318d46613987090078e31');

  if(filteredProductscuatro.length > 0){
    Pants4 = filteredProductscuatro.map(filteredPants4 => ({
      title: filteredPants4.title,
      description: filteredPants4.description,
      precio: filteredPants4.precio,
    }))[0];
  }

  let Pants5 = {};

  const filteredProductscinco = producto.filter(pantscinco => pantscinco._id === '655319979fe789e24307b9a1');

  if(filteredProductscinco.length > 0){
    Pants5 = filteredProductscinco.map(filteredPants5 => ({
      title: filteredPants5.title,
      description: filteredPants5.description,
      precio: filteredPants5.precio,
    }))[0];
  }

  let Pants6 = {};

  const filteredProductseis = producto.filter(pantsseis => pantsseis._id === '65531a252f769568ed0d5321');

  if(filteredProductseis.length > 0){
    Pants6 = filteredProductseis.map(filteredPants6 => ({
      title: filteredPants6.title,
      description: filteredPants6.description,
      precio: filteredPants6.precio,
    }))[0];
  }


  const productsData = [
    { id: '1', name: `${Pants1.title || 'cargando..'}`, price: `$${Pants1.precio || 'cargando..'} MXN`, description: `${Pants1.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//1.jpg'
    },
    { id: '2', name: `${Pants2.title || 'cargando..'}`, price: `$${Pants2.precio || 'cargando..'} MXN`, description: `${Pants2.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//joggers-de-french-terry-club-8vMVJ8.png'
    },
    { id: '3', name: `${Pants3.title || 'cargando..'}`, price: `$${Pants3.precio || 'cargando..'} MXN`, description: `${Pants3.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//pants-de-tejido-fleece-solo-swoosh-JKRBBm.png'
    },
    { id: '4', name: `${Pants4.title || 'cargando..'}`, price: `$${Pants4.precio || 'cargando..'} MXN`, description: `${Pants4.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//therma-fit-mens-camo-tapered-training-pants-RnzrsW.png'
    },
    { id: '5', name: `${Pants5.title || 'cargando..'}`, price: `$${Pants5.precio || 'cargando..'} MXN`, description: `${Pants5.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//Pants_Tiro_Reflectantes_Negro_GS4734_22_model.jpg'
    },
    { id: '6', name: `${Pants6.title || 'cargando..'}`, price: `$${Pants6.precio || 'cargando..'} MXN`, description: `${Pants6.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//Pantalones-de-Fitness-para-hombre-ropa-deportiva-informal-para-correr-pantalones-de-Fitness-con-bloqueo-de.jpg'
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

export default Pants;