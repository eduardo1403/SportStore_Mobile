import React, { useState} from 'react';
import { View, Text,TextInput,Button } from 'react-native';
import {styles} from '../styles/editDirect'

const AddDiecction = () => {
  
  const [nombre, setNombre] = useState('');
  const [isValidNombre, setIsValidNombre] = useState(true);
  const [estado, setEstado] = useState('');
  const [isValidEstado, setIsValidEstado] = useState(true);
  const [municipio, setMunicipio] = useState('');
  const [isValidMunicipio, setIsValidMunicipio] = useState(true);
  const [telefono, setTelefono] = useState('');
  const [isValidTelefono, setIsValidTelefono] = useState(true);
  const [colonia, setColonia] = useState('');
  const [isValidColonia, setIsColonia] = useState(true);
  const [calle, setCalle] = useState('');
  const [isValidCalle, setIsCalle] = useState(true);
  const [indicaciones, setIndicaciones] = useState('');
  const [isValidIndicaciones, setIsIndicaciones] = useState(true);
 


  const validateNombre = () => {
    const nombreRegex = /^[A-Za-z]+$/;
    const isValid = nombreRegex.test(nombre);
    setIsValidNombre(isValid);
  };

  const validateEstado = () => {
    const estadoRegex = /^[A-Za-z]+$/;
    const isValid = estadoRegex.test(estado);
    setIsValidEstado(isValid);
  };

  const validateMunicipio = () => {
    const municipioRegex = /^[A-Za-z]+$/;
    const isValid = municipioRegex.test(municipio);
    setIsValidMunicipio(isValid);
  };

  const validateTelefono = () => {
  const telefonoRegex = /^\d{10}$/;
  const isValid = telefonoRegex.test(telefono);
  setIsValidTelefono(isValid);
};

const validateColonia = () => {
  const isValid = colonia.trim() !== ''; 
  setIsColonia(isValid);
};

const validateCalle = () => {
  const isValid = calle.trim() !== ''; 
  setIsCalle(isValid);
};

const validateIndicaciones = () => {
  const isValid = indicaciones.trim() !== ''; 
  setIsIndicaciones(isValid);
};


  return ( 
    <View style={styles.container}> 
      <View style={styles.content}>
        <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
        onBlur={validateNombre}
      />
      {!isValidNombre && <Text style={{ color: 'red' }}>El nombre no debe contener números o caracteres especiales</Text>}
        <TextInput
        style={styles.input}
        placeholder="Estado"
        value={estado}
        onChangeText={(text) => setEstado(text)}
        onBlur={validateEstado}
      />
      {!isValidEstado && <Text style={{ color: 'red' }}>El nombre del Estado no debe contener números o caracteres especiales</Text>}
        <TextInput
        style={styles.input}
        placeholder="Municipio"
        value={municipio}
        onChangeText={(text) => setMunicipio(text)}
        onBlur={validateMunicipio}
      />
      {!isValidMunicipio && <Text style={{ color: 'red' }}>El nombre del Municipio no debe contener números o caracteres especiales</Text>}
        <TextInput
        style={styles.input}
        placeholder="Colonia"
        value={colonia}
        onChangeText={(text) => setColonia(text)}
        onBlur={validateColonia}
      />
      {!isValidColonia && <Text style={{ color: 'red' }}>El campo no puede quedar vacío</Text>}
        <TextInput
        style={styles.input}
        placeholder="Calle"
        value={calle}
        onChangeText={(text) => setCalle(text)}
        onBlur={validateCalle}
      />
      {!isValidCalle && <Text style={{ color: 'red' }}>El campo no puede quedar vacío</Text>}
        <TextInput
        style={styles.input}
        placeholder="Telefono"
        value={telefono}
        onChangeText={(text) => setTelefono(text)}
        onBlur={validateTelefono}
      />
      {!isValidTelefono && <Text style={{ color: 'red' }}>El número de teléfono debe tener 10 dígitos numéricos</Text>}
        <TextInput
        style={styles.input}
        placeholder="Indicaciones adicionales"
        value={indicaciones}
        onChangeText={(text) => setIndicaciones(text)}
        onBlur={validateIndicaciones}
      />
      {!isValidIndicaciones && <Text style={{ color: 'red' }}>El campo no puede quedar vacío</Text>}
        
        </View>
        <View style={styles.container3}>
        <View style={styles.buttonContainer}>
              <Button
              title="Actualizar dirección"
              color="#DC3545"
              />
        </View>  
        </View>
    </View>
  );
};

export default AddDiecction;

