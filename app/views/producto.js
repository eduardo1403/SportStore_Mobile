import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../styles/producto'; // Importa los estilos desde el archivo "styles.js"


const productsData = [
    { id: '1', name: 'Pans Deportivos', price: '$450', description: 'Pans negros Adidas, para caballero', image: require('../img/4.png') },
    { id: '2', name: 'Pans Deportivos', price: '$400', description: 'Pans negros Adidas, para caballero', image: require('../img/4.png') },
    { id: '3', name: 'Pans Deportivos', price: '$410', description: 'Pans negros Adidas, para caballero', image: require('../img/4.png') },
    { id: '4', name: 'Pans Deportivos', price: '$420', description: 'Pans negros Adidas, para caballero', image: require('../img/4.png') },
    // Agrega más productos aquí
  ];

const Productos = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

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
      <Image source={item.image} style={styles.productImage} />
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
     
      <FlatList
        data={productsData}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2} 
      />
      {selectedProduct && (
        <View style={styles.productDetails}>
          <Image source={selectedProduct.image} style={styles.productImage} />
          <Text style={styles.productName}>Nombre: {selectedProduct.name}</Text>
          <Text style={styles.productPrice}>Precio: {selectedProduct.price}</Text>
          <Text style={styles.productDescription}>Descripción: {selectedProduct.description}</Text>
        </View>
      )}
    </View>
  );
};

export default Productos;