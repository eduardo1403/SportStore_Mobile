import React, {Component} from 'react';
import {View, Image, Text,} from 'react-native';
import {styles} from '../styles/avisoPriv'


const Aviso = () =>  {
    return (
      <View>
        <Text style={styles.TittleText}>Aviso de privacidad integral</Text>
        <Text style={styles.TextCont}>SportStore, con domicilio en Calle Benito Juárez S/N, Colonia centro, Huejutla, Huejutla, CP. 43000, Hidalgo, México, es el responsable del tratamiento de los datos personales que nos proporcione, los cuales serán protegidos conforme a lo dispuesto por la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados, y demás normatividad que resulte aplicable. {'\n'} {'\n'}
        ¿Qué datos personales solicitamos y para qué fines?{'\n'}
        Los datos personales que solicitamos los utilizaremos para las siguientes finalidades:{'\n'} {'\n'}
        -Crear una cuenta de usuario{'\n'}
        -Realizar compras en línea{'\n'} {'\n'}
        Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, se solicitarán los siguientes datos personales:{'\n'}{'\n'}
        -Nombre{'\n'}
        -Domicilio{'\n'}
        -Teléfono particular{'\n'}
        -Teléfono celular{'\n'}
        -Correo electrónico{'\n'}
        -Número de tarjeta de crédito{'\n'}</Text>
        
      </View>
        
    )
  }


export default Aviso