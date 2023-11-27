import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Inicio from './app/views/inicio';
import Carritos from './app/views/carrito';
import EditarPerfil from './app/views/editarPerfil';
import ConfirmarCompra from './app/views/confirmarCompra';
import Productos from './app/views/producto';
import Ajustes from './app/views/ajustes';
import Login from './app/views/login';
import Registro from './app/views/registro';
import Convertidor from './app/views/cambioMoneda';
import Aviso from './app/views/avisoPriv';
import Mision from './app/views/MyV';
import Misdirecciones from './app/views/misDirecciones';
import EdtDiecction from './app/views/editDirect';
import Conjuntos from './app/views/conjuntos';
import Leggins from './app/views/leggins';
import Playeras from './app/views/playeras';
import Pants from './app/views/pants';
import Shorts from './app/views/shorts';
import CartContext from './app/views/CartContext';  // Asegúrate de importar el contexto

const Stack = createNativeStackNavigator();

function InicioScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Inicio} options={{ headerShown: false }} />
      <Stack.Screen name='Tops' component={Productos} />
      <Stack.Screen name='Conjuntos Deportivos' component={Conjuntos} />
      <Stack.Screen name='Leggins Deportivos' component={Leggins} />
      <Stack.Screen name='Playeras Deportivas' component={Playeras} />
      <Stack.Screen name='Pants Deportivos' component={Pants} />
      <Stack.Screen name='Shorts Deportivos' component={Shorts} />
    </Stack.Navigator>
  );
}

function CarritoScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Carrito' component={Carritos} options={{ headerShown: false }} />
      <Stack.Screen name='Confirmar compra' component={ConfirmarCompra} />
      <Stack.Screen name='Dirección' component={Misdirecciones} />
      <Stack.Screen name='Editar dirección' component={EdtDiecction} />
    </Stack.Navigator>
  );
}

function PerfilScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Editar Perfil' component={EditarPerfil} options={{ headerShown: false }} />
      <Stack.Screen name='Ajustes' component={Ajustes} />
      <Stack.Screen name='Sesion' component={Login} options={{ headerShown: true }} />
      <Stack.Screen name='Registro' component={Registro} options={{ headerShown: true }} />
      <Stack.Screen name='Cambio de moneda' component={Convertidor} />
      <Stack.Screen name='Aviso de privacidad' component={Aviso} />
      <Stack.Screen name='myv' component={Mision} />
      <Stack.Screen name='Dirección' component={Misdirecciones} />
      <Stack.Screen name='Editar dirección' component={EdtDiecction} />
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
  const [cartItems, setCartItems] = React.useState([]);

  return (
    <NavigationContainer>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={{
            tabBarActiveTintColor: '#DC3545',
            tabBarItemStyle: {
              height: 60,
            },
            tabBarLabelStyle: {
              fontFamily: 'Poppins-Regular',
            },
            tabBarStyle: {
              height: 60,
            },
          }}
        >
          <Tab.Screen name="Inicio" component={InicioScreen} options={{
            tabBarLabel: 'Inicio',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={38} />
            ),
          }} />
          <Tab.Screen name="Carrito" component={CarritoScreen} options={{
            tabBarLabel: 'Carrito',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={38} />
            ),
          }} />
          <Tab.Screen name="Perfil" component={PerfilScreen} options={{
            tabBarLabel: 'Perfil',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={38} />
            ),
          }} />
        </Tab.Navigator>
      </CartContext.Provider>
    </NavigationContainer>
  );
}
