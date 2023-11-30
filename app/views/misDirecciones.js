import React,{useState, useEffect} from 'react';
import { View, Text, TouchableOpacity,Image, Button, FlatList } from 'react-native';
import {styles} from '../styles/misDirecciones'
import { useNavigation, useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons'; 


const Misdirecciones = ({route}) => {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState(null);
  const isFocused = useIsFocused();
  const { id } = route.params;
  const [adresses, setAdresses] = useState([]);

  useEffect(() => {
    axios.get(`https://api-backend-mqv1.onrender.com/api/adresses/${id}`)
      .then((response) => {
        setAdresses(response.data);
      })
      .catch((error) => {
        // Handle the error
      });
  }, [id]);

  
  

  return (
    <View> 
      <View>
      <View style={styles.container2}>
      {adresses.length > 0 ? (
        <FlatList
          data={adresses}
          renderItem={({ item }) => (
            
            <View style={styles.tarjeta}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{item.nombre}</Text>
                <Text style={styles.cardTitle}>{item.telefono}</Text>
              </View>
              <View style={styles.cardBody}>
                <Text style={styles.cardSubtitle}>{item.estado}</Text>
                <Text style={styles.cardSubtitle}>{item.municipio}</Text>
                <Text style={styles.cardSubtitle}>{item.colonia}</Text>
                <Text style={styles.cardSubtitle}>{item.calle}</Text>
                <Text style={styles.cardSubtitle}>{item.indicaciones}</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Editar dirección', { item })}>
                <MaterialIcons name="edit-location" size={38} color="#DC3545" style={styles.iconLocation}/>
              </TouchableOpacity>
            </View>
            
          )}
        />
      ) : (
        <Text style={styles.Sindirecciones}>Aún no hay direcciones agregadas</Text>
      )}
            
        </View>
      </View>
      <View style={styles.container3}>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
              <Button
              title="Agregar más direcciones"
              color="#DC3545"
              onPress={() => navigation.navigate('Agregar dirección')}
              />
          </View>
        </TouchableOpacity>
        </View>

      </View>
  );

};

export default Misdirecciones
