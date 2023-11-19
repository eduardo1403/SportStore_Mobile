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
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const obtenerCategorias = async() =>{
            const url = 'https://api-backend-mqv1.onrender.com/api/categories';
            try {
                const resultado = await axios.get(url);
                setCategories(resultado.data);
              } catch (error) {
                console.error('Error fetching data:', error);
              } finally {
                setLoading(false); // Marcar como finalizada la carga, independientemente del resultado
              }
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
            <TouchableOpacity onPress={() => navigation.navigate('Conjuntos Deportivos')}>
                    <View style={style.ContainerImage}>
                        <Image source={{uri:'https://sportstore.proyectowebuni.com/api/products/imageProducts//Conjuntos%20Deportivos.jpeg'}} style={style.ImageProduct}/>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Tops')}>
                    <View style={style.ContainerImage2}>
                    {selectedCategory && (
                            <Image
                            source={{uri:'https://sportstore.proyectowebuni.com/api/products/imageProducts//Categoria%20Tops%20Deportivos.jpeg'}}
                            style={style.ImageProduct} // Ajusta el estilo según tus necesidades
                            onError={(error) => console.log(error)}
                            />
                        )}
                    </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Leggins Deportivos')}>
                    <View style={style.ContainerImage3}>
                        <Image source={{uri:'https://sportstore.proyectowebuni.com/api/products/imageProducts//Categoria%20Leggins.jpeg'}} style={style.ImageProduct}/>
                    </View>
            </TouchableOpacity>
            <Text style={style.TitleProducto}>
              {categories
              .filter(catc => catc._id === "64b9b27c1d26564b060580d1")
              .map(filteredCatc => filteredCatc.name)}


              {loading && <Text>Cargando...</Text>}
            </Text>
                <Text style={style.TitleProducto2} >
                {categories
                .filter(cat => cat._id === "64b9b2d88ce7d3f26a0a3961") // Reemplaza con el ID que estás buscando
                .map(filteredCat => filteredCat.name)}

                    
                {loading && <Text>Cargando...</Text>}
                </Text>
                <Text style={style.TitleProducto3}>
                  {categories
                  .filter(catl => catl._id === "64b9b35fbf5918cd000b14c1")
                  .map(filteredCatl => filteredCatl.name)}

                   {loading && <Text>Cargando...</Text>}
                </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Playeras Deportivas')}>
                    <View style={style.ContainerImageMen}>
                        <Image source={{uri:'https://sportstore.proyectowebuni.com/api/products/imageProducts//41590kvBQ3L._AC_SX679_.jpg'}} style={style.ImageProduct}/>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Pants Deportivos')}>
                    <View style={style.ContainerImageMen2}>
                        <Image source={{uri:'https://sportstore.proyectowebuni.com/api/products/imageProducts//Categoria%20Pants.jpeg'}} style={style.ImageProduct}/>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Shorts Deportivos')}>
                    <View style={style.ContainerImageMen3}>
                        <Image source={{uri:'https://sportstore.proyectowebuni.com/api/products/imageProducts//Categoria%20Shorts.jpeg'}} style={style.ImageProduct}/>
                    </View>
            </TouchableOpacity>
            <Text style={style.DamaText}>Dama</Text>
            <Text style={style.CaballeroText}>Caballero</Text>
            <Text style={style.TitleProducto4}>
              {categories
              .filter(catp => catp._id === "64233435263039f1474ce423")
              .map(filteredCatp => filteredCatp.name)}

               {loading && <Text>Cargando...</Text>}
            </Text>
            <Text style={style.TitleProducto5}>
              {categories
              .filter(catpan => catpan._id === "64b9b0e47ebec001eb01a771")
              .map(filteredCatpan => filteredCatpan.name)}

               {loading && <Text>Cargando...</Text>}
            </Text>
            <Text style={style.TitleProducto6}>
              {categories
              .filter(catsh => catsh._id === "64b9b1de214d4ff2e2047691")
              .map(filteredCatsh => filteredCatsh.name)}

               {loading && <Text>Cargando...</Text>}
            </Text>
        </View>
    )
}

export default Inicio;