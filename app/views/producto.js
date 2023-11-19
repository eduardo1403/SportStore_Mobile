import React, { useState, useEffect, useDebugValue } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from '../styles/producto'; // Importa los estilos desde el archivo 



const Productos = () => {
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

  let Top1 = {};
  

  const filteredProducts = producto
    .filter(top => top._id === '64ff6cd33095b4248e0870b2');

  // Verificar si se encontró un producto con el ID especificado
  if (filteredProducts.length > 0) {
    Top1 = filteredProducts.map(filteredTop1 => ({
      title: filteredTop1.title,
      description: filteredTop1.description,
      precio: filteredTop1.precio,
    }))[0];
  }

  let Top2 = {};

  const filteredProductsdos = producto.filter(topdos => topdos._id === '64ff6de04c5e1f5c5b01fd51');

  if(filteredProductsdos.length > 0){
    Top2 = filteredProductsdos.map(filteredTop2 => ({
      title: filteredTop2.title,
      description: filteredTop2.description,
      precio: filteredTop2.precio,
    }))[0];
  }

  let Top3 = {};

  const filteredProductstres = producto.filter(toptres => toptres._id === '64ff6e794191cfcf870903a1');

  if(filteredProductstres.length > 0){
    Top3 = filteredProductstres.map(filteredTop3 => ({
      title: filteredTop3.title,
      description: filteredTop3.description,
      precio: filteredTop3.precio,
    }))[0];
  }

  let Top4 = {};

  const filteredProductscuatro = producto.filter(topcuatro => topcuatro._id === '655303f70811f880970ddcd1');

  if(filteredProductscuatro.length > 0){
    Top4 = filteredProductscuatro.map(filteredTop4 => ({
      title: filteredTop4.title,
      description: filteredTop4.description,
      precio: filteredTop4.precio,
    }))[0];
  }

  let Top5 = {};

  const filteredProductscinco = producto.filter(topcinco => topcinco._id === '65530531797d83cad70f5fe2');

  if(filteredProductscinco.length > 0){
    Top5 = filteredProductscinco.map(filteredTop5 => ({
      title: filteredTop5.title,
      description: filteredTop5.description,
      precio: filteredTop5.precio,
    }))[0];
  }

  let Top6 = {};

  const filteredProductseis = producto.filter(topseis => topseis._id === '65530621bd5d9719d908cd52');

  if(filteredProductseis.length > 0){
    Top6 = filteredProductseis.map(filteredTop6 => ({
      title: filteredTop6.title,
      description: filteredTop6.description,
      precio: filteredTop6.precio,
    }))[0];
  }


  const productsData = [
    { id: '1', name: `${Top1.title || 'cargando..'}`, price: `$${Top1.precio || 'cargando..'} MXN`, description: `${Top1.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//top%20color%20morado.jpeg'
    },
    { id: '2', name: `${Top2.title || 'cargando..'}`, price: `$${Top2.precio || 'cargando..'} MXN`, description: `${Top2.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//top%20rojo.jpg'
    },
    { id: '3', name: `${Top3.title || 'cargando..'}`, price: `$${Top3.precio || 'cargando..'} MXN`, description: `${Top3.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//top%20rosa%20adidas.jpg'
    },
    { id: '4', name: `${Top4.title || 'cargando..'}`, price: `$${Top4.precio || 'cargando..'} MXN`, description: `${Top4.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//0ab3a5bf37b19857cb4f38e148d6e689.jpg'
    },
    { id: '5', name: `${Top5.title || 'cargando..'}`, price: `$${Top5.precio || 'cargando..'} MXN`, description: `${Top5.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//top-deportivo-powerreact-training-soporte-medio.jpg'
    },
    { id: '6', name: `${Top6.title || 'cargando..'}`, price: `$${Top6.precio || 'cargando..'} MXN`, description: `${Top6.description || 'cargando..'}`, image: 'https://sportstore.proyectowebuni.com/api/products/imageProducts//bra-deportivo-sin-almohadillas-swoosh-light-support-Zf7R7Z.png'
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

export default Productos;