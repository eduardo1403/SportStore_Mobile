import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../styles/editarPerfil';

const EditarPerfil = () => {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                    <View style={styles.header}>
                    <Text style={styles.miPerfil}>Mi perfil</Text>
                </View>
                <View style={styles.containerLogo}>
                        <Image
                        style={styles.imagen}
                        source={{
                        uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbdb18d9-f765-4f55-9bd2-ffa98caddce7/dg1swxv-e6b6a382-7c34-4850-b629-cfbef2d56ad2.png/v1/fit/w_300,h_500/logo_sport_store_by_rubialvv_dg1swxv-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6IlwvZlwvYmJkYjE4ZDktZjc2NS00ZjU1LTliZDItZmZhOThjYWRkY2U3XC9kZzFzd3h2LWU2YjZhMzgyLTdjMzQtNDg1MC1iNjI5LWNmYmVmMmQ1NmFkMi5wbmciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ssrcPyeGVX22XaF45QD7aJMxzsgzfXhlUvg3XelLe4w',
                        }}
                        />
                        <Image source={require('../img/images.png')} style={styles.Icono}/>
                    </View >

                    <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Nombre" />
        <View style={styles.inputLine} />
        <TextInput style={styles.input} placeholder="Apellidos" />
        <View style={styles.inputLine} />
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
      </View>

      <TouchableOpacity style={styles.bom}>
        <Text style={styles.buttonTex}>Direccion</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Guardar información</Text>
      </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditarPerfil;