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
        flexDirection:"row",
        backgroundColor: 'white',
        justifyContent:'space-between',
        width: '100%',
        height:100,
        top: '90%',
        left:0,
        right:0,
        elevation:30,
        position:'absolute'
    },
    ButtonComprar:{
        marginLeft: '5%',
        marginTop: '7%',
        width:'50%',
    },
    PrecioTotalCompra:{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        lineHeight: 24,
        color: '#000000',
        position:'absolute',
        top:'35%',
        left:'65%',
        fontSize:16,
    },
    ContainerProducto:{
        backgroundColor: '#F8F9FA',
        padding: 10,
        position: 'absolute',
        width: '100%',
        height:'100%',
        elevation: 2,
        maxHeight: '70%',
        marginTop:'20%'
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
    },
    ContainerFin:{
        width:'100%',
        height:'100%'
    },
    ContainerInicio:{
        position:'absolute',
        width:'100%',
        height:'100%'
    },
})

export {styleCart}