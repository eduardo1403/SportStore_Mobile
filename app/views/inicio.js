import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { style } from '../styles/inicio';
import { StatusBar } from 'expo-status-bar';
import CarouselCards from './CarouselCards';
//<Image source={require('../img/banner1.png')} style={style.ImgBanner}/>
const Inicio = () => {
    return(
        <View>
            <View style={style.HeaderInicio}></View>
            <Image source={require('../img/logo.png')} style={style.LogoHeader}/>
            <Text style={style.textInicio}>Inicio</Text>
            <View style={style.ContainerImgBanner}>
                <CarouselCards />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Producto')}>
                    <View style={style.ContainerImage}>
                        <Image source={require('../img/producto.jpg')} style={style.ImageProduct}/>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Producto')}>
                    <View style={style.ContainerImage2}>
                        <Image source={require('../img/producto.jpg')} style={style.ImageProduct}/>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Producto')}>
                    <View style={style.ContainerImage3}>
                        <Image source={require('../img/producto.jpg')} style={style.ImageProduct}/>
                    </View>
            </TouchableOpacity>
            <Text style={style.TitleProducto}>Conjuntos</Text>
                <Text style={style.TitleProducto2}>Tops</Text>
                <Text style={style.TitleProducto3}>Leggins</Text>
                <Text style={style.CaballeroText}>Caballero</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Producto')}>
                    <View style={style.ContainerImageMen}>
                        <Image source={require('../img/producto.jpg')} style={style.ImageProduct}/>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Producto')}>
                    <View style={style.ContainerImageMen2}>
                        <Image source={require('../img/producto.jpg')} style={style.ImageProduct}/>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Producto')}>
                    <View style={style.ContainerImageMen3}>
                        <Image source={require('../img/producto.jpg')} style={style.ImageProduct}/>
                    </View>
            </TouchableOpacity>
            <Text style={style.DamaText}>Dama</Text>
            <Text style={style.CaballeroText}>Caballero</Text>
            <Text style={style.TitleProducto4}>Short</Text>
            <Text style={style.TitleProducto5}>Playeras</Text>
            <Text style={style.TitleProducto6}>Pants</Text>
        </View>
    )
}

export default Inicio;