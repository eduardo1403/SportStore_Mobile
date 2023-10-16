import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './app/views/inicio';
import Carrito from './app/views/carrito';
import EditarPerfil from './app/views/editarPerfil';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ConfirmarCompra from './app/views/confirmarCompra';
import Productos from './app/views/producto';
import ajustes from './app/views/ajustes';
import formulario from './app/views/login';
import registro from './app/views/registro';
import Convertidor from './app/views/cambioMoneda';
import Aviso from './app/views/avisoPriv';
import mision from './app/views/MyV';
import Misdirecciones from './app/views/misDirecciones';
import EdtDiecction from './app/views/editDirect';

const Stack = createNativeStackNavigator();

function InicioScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Inicio' component={Inicio} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name='Producto' component={Productos} />
    </Stack.Navigator>
  )
}

function CarritoScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Carrito'component={Carrito} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name='Confirmar compra' component={ConfirmarCompra}/>
      <Stack.Screen name='Dirección' component={Misdirecciones}/>
      <Stack.Screen name='Editar dirección' component={EdtDiecction}/>
    </Stack.Navigator>
  );
}



function PerfilScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Editar Perfil'component={EditarPerfil} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name='Ajustes' component={ajustes} />
      <Stack.Screen name='Sesion' component={formulario} options={{
      headerShown: false,
      }}/>
      <Stack.Screen name='Registro' component={registro} options={{
        headerShown: false
      }}/>
      <Stack.Screen name='Cambio de moneda' component={Convertidor}/>
      <Stack.Screen name='Aviso de privacidad' component={Aviso}/>
      <Stack.Screen name='Misión y Visión' component={mision}/>
      <Stack.Screen name='Dirección' component={Misdirecciones}/>
      <Stack.Screen name='Editar dirección' component={EdtDiecction}/>
    </Stack.Navigator>
  );
}


export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./app/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./app/fonts/Poppins-SemiBold.ttf'),
  });

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Inicio'screenOptions={{
        tabBarActiveTintColor:'#DC3545',
        tabBarItemStyle:{
          height: 60
        },
        tabBarLabelStyle:{
          fontFamily:'Poppins-Regular'
        },
        tabBarStyle:{
          height: 60
        }
      }}>
        <Tab.Screen name="Inicio" component={InicioScreen} options={{
          tabBarLabel: 'Inicio',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={38} />
          ),
        }}/>
        <Tab.Screen name="Carrito" component={CarritoScreen} options={{
          tabBarLabel: 'Carrito',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={38} />
          ),
        }}/>
        <Tab.Screen name="Perfil" component={PerfilScreen} options={{
          tabBarLabel: 'Perfil',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={38} />
          ),
        }}/>
      </Tab.Navigator>
      
    </NavigationContainer>
    
  );
}
