import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Button} from 'react-native';
import { styles } from '../styles/encuesta';
import {useNavigation} from '@react-navigation/native';
import appFirebase from './firebaseConfig';
import { getFirestore, collection,addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore';

const db = getFirestore(appFirebase)

const EncuestaSatisfaccion = () => {
  const navigation = useNavigation();
  const [calificacion, setCalificacion] = useState({
    calificacion: null,
  });

  const handleSeleccion = (satisfaccion) => {
    setCalificacion({
      calificacion: satisfaccion,
    });
  };

  

  const onSend = async () => {
    try {
      const docRef = await addDoc(collection(database, 'quizzes'), {
        satisfaccion: calificacion.calificacion,
        timestamp: new Date(),
        // Otros campos si es necesario
      });
    } catch (error) {
      console.error('Error al enviar a Firestore:', error);
    
      // Puedes mostrar una alerta o realizar alguna acción específica en caso de error.
    }
  };

  const  saveResult = async()=>{
    try{
      const docRef = await addDoc(collection(db, "quiz"), {
        calificacion
      });
      alert("Gracias! por su respuesta ", docRef.id);
      navigation.navigate('Home');
    }
    catch{
      alert("Error")
    }
  }

  console.log(calificacion)

  const renderOpciones = () => {
    const opciones = ['Satisfecho', 'Neutral', 'Insatisfecho'];

    return opciones.map((opcion, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.opcion, calificacion.calificacion === opcion && styles.opcionSeleccionada]}
        onPress={() => handleSeleccion(opcion)}
      >
        <Text>{opcion}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>¡Gracias por tu compra!</Text>
      <Text style={styles.subtitulo}>¿Qué tan satisfecho se encuentra con los servicios de Sport Store?</Text>

      <View style={styles.opcionesContenedor}>{renderOpciones()}</View>

      

      <View>
        <Button
          onPress={saveResult}
          disabled={!calificacion.calificacion}
          title='Enviar'/>
      </View>

      
    </View>
  );
};

export default EncuestaSatisfaccion;
