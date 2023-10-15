import React from "react";
import { View, Text,Image, Button} from "react-native";
import {styles} from '../styles/confirmarCompra';



const ConfirmarCompra = () =>  {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Dirección de envio</Text>
          <Text style={styles.text2}>Calle independencia 1 Departamentos{'\n'}amarillos en la    colonia Cantores {'\n'}
Huejutla de reyes Hidalgo Mexico 43000</Text>
        </View>
        <View style={styles.container2}>
        <Text style={styles.text}>Árticulo</Text>
        <Image source={require('../img/foto.jpg')} style={styles.producto}/>
        <Text style={styles.textProd}>Playera deportiva Nike</Text>
        <Text style={styles.textTalla}>L</Text>
        <Text style={styles.textPrecio}>$MXN800.00</Text>
        </View>
        <View>
        <Text style={styles.textTit}>Forma de pago</Text>
        <Image source={require('../img/Paypal.png')} style={styles.imgPago}/>
        <Text style={styles.textPago}>Paypal</Text>
        </View>
        <View style={styles.container3}>
        <Text style={styles.textFin1}>Total:</Text>
        <Text style={styles.textFin2}>$MXN800</Text>
        <View style={styles.buttonContainer}>
              <Button
              title="Comprar"
              color="#DC3545"
              />
          </View>
        </View>
      </View>
    )
  }

export default ConfirmarCompra;