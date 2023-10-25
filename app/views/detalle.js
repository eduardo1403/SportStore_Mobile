import React from "react";
import { View, Text,Image, Button, TouchableOpacity} from "react-native";
import {styles} from '../styles/detalle';
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';

const vistaDet = () => {

return (

  
  <View>
    <View style={styles.Container_img}>
    <Image source={require('../img/producto.jpg')} style={styles.img} />
    </View>
    <View style={styles.Container_text}>
    <Text style={styles.textTit}>Pants Reebok</Text>
    <Text style={styles.text}>Pantalones deportivos para hombre en color negro</Text>
    </View>
    <View>
    </View>
    <View style={styles.container3}>
      <View style={styles.buttonContainer}>
            <Button
            title="AÑADIR AL CARRITO"
            color="#DC3545"
            />
      </View>  
      </View>
  </View>
);
};

export default vistaDet;