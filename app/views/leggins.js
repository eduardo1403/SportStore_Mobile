import React, { useState, useEffect, useDebugValue } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from '../styles/producto'; // Importa los estilos desde el archivo 



const Leggins = () => {
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

  let Leggin1 = {};
  

  const filteredProducts = producto
    .filter(leggin => leggin._id === '64ff6ed3f2e881a93d0984f1');

  // Verificar si se encontró un producto con el ID especificado
  if (filteredProducts.length > 0) {
    Leggin1 = filteredProducts.map(filteredLeggin1 => ({
      title: filteredLeggin1.title,
      description: filteredLeggin1.description,
      precio: filteredLeggin1.precio,
    }))[0];
  }

  let Leggin2 = {};

  const filteredProductsdos = producto.filter(leggindos => leggindos._id === '64ff6f3497b7856ce501b891');

  if(filteredProductsdos.length > 0){
    Leggin2 = filteredProductsdos.map(filteredLeggin2 => ({
      title: filteredLeggin2.title,
      description: filteredLeggin2.description,
      precio: filteredLeggin2.precio,
    }))[0];
  }

  let Leggin3 = {};

  const filteredProductstres = producto.filter(leggintres => leggintres._id === '64ff6f90e036cf845c0137f1');

  if(filteredProductstres.length > 0){
    Leggin3 = filteredProductstres.map(filteredLeggin3 => ({
      title: filteredLeggin3.title,
      description: filteredLeggin3.description,
      precio: filteredLeggin3.precio,
    }))[0];
  }

  let Leggin4 = {};

  const filteredProductscuatro = producto.filter(leggincuatro => leggincuatro._id === '6552ffb50119d8fe7e0e8a31');

  if(filteredProductscuatro.length > 0){
    Leggin4 = filteredProductscuatro.map(filteredLeggin4 => ({
      title: filteredLeggin4.title,
      description: filteredLeggin4.description,
      precio: filteredLeggin4.precio,
    }))[0];
  }

  let Leggin5 = {};

  const filteredProductscinco = producto.filter(leggincinco => leggincinco._id === '655300363d6ee8b97a0208e1');

  if(filteredProductscinco.length > 0){
    Leggin5 = filteredProductscinco.map(filteredLeggin5 => ({
      title: filteredLeggin5.title,
      description: filteredLeggin5.description,
      precio: filteredLeggin5.precio,
    }))[0];
  }

  let Leggin6 = {};

  const filteredProductseis = producto.filter(legginseis => legginseis._id === '655300df8a79f3c2510c7e91');

  if(filteredProductseis.length > 0){
    Leggin6 = filteredProductseis.map(filteredLeggin6 => ({
      title: filteredLeggin6.title,
      description: filteredLeggin6.description,
      precio: filteredLeggin6.precio,
    }))[0];
  }


  const productsData = [
    { id: '1', name: `${Leggin1.title || 'cargando..'}`, price: `$${Leggin1.precio || 'cargando..'} MXN`, description: `${Leggin1.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//leggins%20stampados%20negro%20y%20blanco.jpg'
    },
    { id: '2', name: `${Leggin2.title || 'cargando..'}`, price: `$${Leggin2.precio || 'cargando..'} MXN`, description: `${Leggin2.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//leggins%20estampado.jpeg'
    },
    { id: '3', name: `${Leggin3.title || 'cargando..'}`, price: `$${Leggin3.precio || 'cargando..'} MXN`, description: `${Leggin3.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//leggins%20stampado%20de%20colores.jpeg'
    },
    { id: '4', name: `${Leggin4.title || 'cargando..'}`, price: `$${Leggin4.precio || 'cargando..'} MXN`, description: `${Leggin4.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//0794892a29ed6bc7f7a2b13a32e7cb18.jpg'
    },
    { id: '5', name: `${Leggin5.title || 'cargando..'}`, price: `$${Leggin5.precio || 'cargando..'} MXN`, description: `${Leggin5.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//leggings-estampados-de-tiro-medio-de-7-8-one-heritage-ckB44C.png'
    },
    { id: '6', name: `${Leggin6.title || 'cargando..'}`, price: `$${Leggin6.precio || 'cargando..'} MXN`, description: `${Leggin6.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//7ea4aa8686b7279c907e22516b9a65a9.jpg'
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

export default Leggins;