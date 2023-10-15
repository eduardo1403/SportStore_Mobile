import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import { styleCart } from '../styles/carrito';
import { useNavigation } from "@react-navigation/native";
import { style } from '../styles/inicio';

const Carrito = () => {
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
                <View style={styleCart.ImageProducto}>
                    <Image source={require('../img/producto.jpg')} style={styleCart.ImageProd}/>
                </View>
                <Text style={styleCart.TitleProducto}>Pants deportivo adidas</Text>
                <Text style={styleCart.Talla}>XS</Text>
                <Text style={styleCart.PrecioProduct}>$MXN450.00</Text>
                
            </View>
        </View>
    )
}

export default Carrito