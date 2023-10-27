import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, img} from 'react-native';
import { style } from '../styles/inicio';
import { StatusBar } from 'expo-status-bar';
import CarouselCards from './CarouselCards';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
//<Image source={require('../img/banner1.png')} style={style.ImgBanner}/>
//https://api-backend-mqv1.onrender.com/api/categories
const Inicio = () => {
    const navigation = useNavigation();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async() =>{
            const url = 'https://api-backend-mqv1.onrender.com/api/categories';
            const resultado = await axios.get(url);
            //console.log(resultado.data);
            setCategories(resultado.data);
        }
        obtenerCategorias();
    },[]);

    
    const categoryId = '64b9b2d88ce7d3f26a0a3961';
    const selectedCategory = categories.filter(cat => cat._id === categoryId).map(filterCat => filterCat.imageUrl);

    console.log(selectedCategory);
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
                    {selectedCategory && (
                            <Image
                            source={require('../img/producto.jpg')}
                            style={style.ImageProduct} // Ajusta el estilo según tus necesidades
                            onError={(error) => console.log(error)}
                            />
                        )}
                    </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Producto')}>
                    <View style={style.ContainerImage3}>
                        <Image source={require('../img/producto.jpg')} style={style.ImageProduct}/>
                    </View>
            </TouchableOpacity>
            <Text style={style.TitleProducto}>Conjuntos</Text>
                <Text style={style.TitleProducto2} >
                {categories
                .filter(cat => cat._id === "64b9b2d88ce7d3f26a0a3961") // Reemplaza con el ID que estás buscando
                .map(filteredCat => filteredCat.name)}
                </Text>
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