import React from 'react';
import { View, Text, TouchableOpacity,Image, Button } from 'react-native';
import {styles} from '../styles/misDirecciones'

import { useNavigation } from "@react-navigation/native";


const Misdirecciones = () => {
  const navigation = useNavigation();
  return (
    <View> 
      <View>
      <View style={styles.container2}>
            <Text style={styles.text}>Calle independencia 1 Departamentos amarillos en colonia Cantores Huejutla de Reyes Hidalgo Mexico 43000</Text>
        </View>
      </View>
      <View style={styles.container3}>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
              <Button
              title="Editar dirección"
              color="#DC3545"
              onPress={() => navigation.navigate('Editar dirección')}
              />
          </View>
        </TouchableOpacity>
        </View>

      </View>
  );

};

export default Misdirecciones
