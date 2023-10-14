import React from "react";
import { StyleSheet } from "react-native";
const styleCart = StyleSheet.create({
    ContainerHeader:{
        position: 'absolute',
        width: 420,
        height: 64,
        left: 0,
        top: 0,
        backgroundColor: 'white',
        elevation:1
    },
    TitleCarrito:{
        position: 'absolute',
        width: 87,
        height: 43,
        left: 35,
        top: 21,
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        color: '#000000',
    },
    LogoHeader:{
        position: 'absolute',
        width: 99.59,
        height: 45,
        left: 282,
        top: 10,
    },
    ContainerCompra:{
        position: 'absolute',
        width: 420,
        height: 68,
        left: 0,
        top: 698,
        backgroundColor: 'transparent',
        elevation:2
    },
    ButtonComprar:{
        position: 'absolute',
        width: 128,
        height: 35,
        left: 18,
        top: 710
    },
    PrecioTotalCompra:{
        position: 'absolute',
        width: 102,
        height: 24,
        left: 163,
        top: 720,
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    },
    ContainerProducto:{
        position: 'absolute',
        width: 420,
        height: 160,
        left: 0,
        top: 80,
        backgroundColor: 'white',
        elevation:4
    },
    ImageProducto: {
        position: 'absolute',
        width: 120,
        height: 120.07,
        left: 20,
        top: 20,
        overflow: "hidden"
    },
    ImageProd:{
        width: '100%', 
        height: '100%',
    },
    TitleProducto:{
        position: 'absolute',
        width: 181,
        height: 45,
        left: 180,
        top: 24,
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 24,
        color: '#000000',

    },
    Talla:{
        position: 'absolute',
        width: 33,
        height: 24,
        left: 180,
        top: 65,
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        color: '#7B7474',

    },
    PrecioProduct:{
        position: 'absolute',
        width: 181,
        height: 45,
        left: 180,
        top: 110,
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 24,
        color: '#000000',
    },
    CheckBoxTool:{
        position: 'absolute',
        left: 346,
        top: 110
    },
    CheckBoxTool1:{
        position: 'absolute',
        left: 346,
        top: 720
    }
})

export {styleCart}