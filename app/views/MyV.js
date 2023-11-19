import React, {Component} from 'react';
import {View, Image, Text,} from 'react-native';
import {styles} from '../styles/myv'


const Mision = () =>  {
    return (
      <View>
        <Text style={styles.TittleText}>Misión</Text>
        <Text style={styles.TextCont}>Ofrecer a nuestros clientes productos de calidad a precios cómodos que cumplan con sus necesidades y exigencias abarcando sus gustos de acuerdo a su estilo de ver y vivir la vida. {'\n'} {'\n'}
        </Text>
        <Text style={styles.TittleText2}>Visión</Text>
        <Text style={styles.TextCont2}>Ser una empresa reconocida en la venta de ropa deportiva. Lograr también extendernos y crear nuestras cadenas de almacenes, proporcionando cada día más un servicio de excelencia a nuestros clientes y que al mismo tiempo nos permitan competir en el mercado nacional con los mejores precios del mercado.</Text>
        
      </View>
        
    )
  }


export default Mision