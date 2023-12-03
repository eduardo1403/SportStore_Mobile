import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/encuesta';
import { getFirestore, collection, add, serverTimestamp } from '@firebase/firestore';
import db from './firebaseConfig';

const EncuestaSatisfaccion = () => {
  const [calificacion, setCalificacion] = useState(null);

  const handleSeleccion = (satisfaccion) => {
    setCalificacion(satisfaccion);
  };

  const enviarEncuesta = async () => {
    try {
      const encuestaData = {
        calificacion,
        timestamp: serverTimestamp(),
      };

      // Asegúrate de tener la referencia correcta a tu colección 'Encuesta'
      const encuestaRef = collection(db, 'Encuesta');

      // Agrega la nueva encuesta a la colección
      await add(encuestaRef, encuestaData);

      // Puedes hacer algo adicional después de enviar la encuesta, como mostrar un mensaje de éxito
      alert('Encuesta enviada exitosamente');
    } catch (error) {
      alert('Error al enviar la encuesta', error);
    }
  };

  const renderOpciones = () => {
    const opciones = ['Satisfecho', 'Neutral', 'Insatisfecho'];

    return opciones.map((opcion, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.opcion, calificacion === opcion && styles.opcionSeleccionada]}
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

      <TouchableOpacity
        style={styles.botonEnviar}
        disabled={!calificacion}
        onPress={enviarEncuesta}
      >
        <Text style={styles.textoBoton}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EncuestaSatisfaccion;
