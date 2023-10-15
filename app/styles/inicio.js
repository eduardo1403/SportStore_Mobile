import React from "react";
import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    title : {
        color: '#000',
        fontFamily:'Poppins-SemiBold',
        fontSize:30
    },
    HeaderInicio: {
        position: "absolute",
        width: 420,
        height: 60,
        left: 0,
        top: 0,
        backgroundColor: "white",
    },
    ContainerMenu: {
        position: "absolute",
        width: 420,
        height: 80,
        left: 0,
        top: 790,
        backgroundColor: "transparent",
        elevation:2,
        borderTopColor: "#000000"
    },
    TextInicio:{
        position: "absolute",
        width: 61,
        height: 22,
        left: 25,
        top: 835,
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color:'#000000',
    },
    TextCarrito: {
        position: "absolute",
        width: 61,
        height: 22,
        left: 180,
        top: 835,
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
    },
    TextPerfil:{
        position: "absolute",
        width: 61,
        height: 22,
        left: 340,
        top: 835,
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
    },
    ImgInicio:{
        position: "absolute",
        width: 35,
        height: 35,
        left: 33,
        top:800
    },
    ImgCart:{
        position: 'absolute',
        width: 35,
        height: 35,
        left: 180,
        top: 800,  
    },
    ImgPerfil:{
        position: 'absolute',
        width: 35,
        height: 35,
        left: 340,
        top: 800,
    },
    Lupa:{
        position: 'absolute',
        width: 40,
        height: 40,
        left: 17,
        top: 12,

    },
    textInicio:{
        position: "absolute",
        fontFamily: 'Poppins-SemiBold',
        left:25,
        top:29,
        fontSize: 20,
        color: '#000'
    },
    BarraBuscar: {
        position: 'absolute',
        width: 185,
        height: 37,
        left: 65,
        top: 16,
        backgroundColor: '#DFDDDD',
        borderRadius: 10
    },
    LogoHeader:{
        position: 'absolute',
        width: 99.59,
        height: 45,
        left: 282,
        top: 16,
    },
    ImgBanner:{
        position: "absolute",
        width: 418,
        height: 350,
        left: 0,
        top: 60,
    },
    DamaText:{
        position: 'absolute',
        width: 83,
        height: 34,
        left: 5,
        top: 424,
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 30,
        color: '#000000',
    },
    CaballeroText:{
        position: 'absolute',
        width: 119,
        height: 34,
        left: 5,
        top: 600,
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 30,
        color: '#000000',
    },
    ContainerImgBanner:{
        position: 'absolute',
        width: 418,
        height: 350,
        left: 0,
        top: 60,
        overflow:'hidden'
    },
    ContainerImage:{
        position: 'absolute',
        width: 90,
        height: 90,
        left: 5,
        top: 457,
        backgroundColor: '#fff',
        borderRadius: 150/2,
        overflow:"hidden"
    },
    ImageProduct:{
        width: '100%', 
        height: '100%', 
    },
    TitleProducto:{
        position: 'absolute',
        width: 83,
        height: 34,
        left: 13,
        top: 552,
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
    },
    ContainerImage2:{
        position: 'absolute',
        width: 90,
        height: 90,
        left: 155,
        top: 457,
        backgroundColor: '#fff',
        borderRadius: 150/2,
        overflow:"hidden"
    },
    TitleProducto2:{
        position: 'absolute',
        width: 83,
        height: 34,
        left: 185,
        top: 552,
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
    },
    ContainerImage3:{
        position: 'absolute',
        width: 90,
        height: 90,
        left: 307,
        top: 457,
        backgroundColor: '#fff',
        borderRadius: 150/2,
        overflow:"hidden"
    },
    TitleProducto3:{
        position: 'absolute',
        width: 83,
        height: 34,
        left: 327,
        top: 552,
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
    },
    ContainerImageMen:{
        position: 'absolute',
        width: 90,
        height: 90,
        left: 5,
        top: 640,
        backgroundColor: '#fff',
        borderRadius: 150/2,
        overflow:"hidden"
    },
    TitleProducto4:{
        position: 'absolute',
        width: 83,
        height: 34,
        left: 33,
        top: 739,
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
    },
    ContainerImageMen2:{
        position: 'absolute',
        width: 90,
        height: 90,
        left: 155,
        top: 640,
        backgroundColor: '#fff',
        borderRadius: 150/2,
        overflow:"hidden"
    },
    TitleProducto5:{
        position: 'absolute',
        width: 83,
        height: 34,
        left: 173,
        top: 739,
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
    },
    ContainerImageMen3:{
        position: 'absolute',
        width: 90,
        height: 90,
        left: 307,
        top: 640,
        backgroundColor: '#fff',
        borderRadius: 150/2,
        overflow:"hidden"
    },
    TitleProducto6:{
        position: 'absolute',
        width: 83,
        height: 34,
        left: 333,
        top: 739,
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
    }
    
});

export {style}
