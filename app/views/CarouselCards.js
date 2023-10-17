import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const originalData = [
  {
    
    imgUrl: require('../img/1.png'),
  },
  {
    
    imgUrl: require('../img/2.png'),
  },
  {
    
    imgUrl: require('../img/3.png'),
  },
];

const data = [...originalData, ...originalData, ...originalData]; // Duplica los elementos para el efecto infinito

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={item.imgUrl} style={styles.image} />
      {/* Resto de tu componente */}
    </View>
  );
};

const CarouselCards = () => {
  const [index, setIndex] = React.useState(originalData.length); // Iniciar en la posición del primer elemento duplicado

  React.useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (index + 1) % data.length;
      setIndex(nextIndex);
      carouselRef.current.snapToItem(nextIndex);
    }, 3000); // Cambia cada 3000 milisegundos (3 segundos)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [index]);

  const carouselRef = React.useRef(null);

  return (
    <View>
      <Carousel
        layoutCardOffset={3}
        ref={carouselRef}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)} // Actualiza el índice manualmente
        useScrollView={true}
      />
      <Pagination
        dotsLength={originalData.length}
        activeDotIndex={index % originalData.length} // Mantiene el índice en el rango del número original de elementos
        carouselRef={carouselRef}
        // Resto de tus props de Pagination
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    width: ITEM_WIDTH,
    overflow: 'hidden',
  },
  image: {
    width: ITEM_WIDTH,
    height: 400,
  },
});

export default function App() {
  return <CarouselCards />;
}
