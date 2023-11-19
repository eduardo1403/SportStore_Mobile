import React, {useState} from 'react';
import {View, Text, Button, Image, FlatList} from 'react-native';
import { styleCart } from '../styles/carrito';
import { useNavigation } from "@react-navigation/native";
import { style } from '../styles/inicio';



const Carritos = ({ cartItems }) => {
    const navigation = useNavigation();

    return(
        <View>
            <View style={style.HeaderInicio}></View>
            <Image source={require('../img/logo.png')} style={style.LogoHeader}/>
            <Text style={style.textInicio}>Carrito</Text>
            <View style={styleCart.ContainerCompra}></View>
            <View style={styleCart.ButtonComprar}>
                <Button title="Comprar" color="#DC3545" onPress={() => navigation.navigate('Confirmar compra')}/>
            </View>
            <Text style={styleCart.PrecioTotalCompra}>$MXN800.00</Text>
            

            <View style={styleCart.ContainerProducto}>
            
            </View>

            
        </View>
    )
}

export default Carritos