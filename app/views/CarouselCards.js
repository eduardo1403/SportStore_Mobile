import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width + 0;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const data = [
  {
    title: 'Aenean leo',
    body: 'Ut tincidunt tincidunt erat...',
    imgUrl: require('../img/banner1.png'),
  },
  {
    title: 'In turpis',
    body: 'Aenean ut eros et nisl sagittis vestibulum...',
    imgUrl: require('../img/banner1.png'),
  },
  {
    title: 'Lorem Ipsum',
    body: 'Phasellus ullamcorper ipsum rutrum nunc...',
    imgUrl: require('../img/banner1.png'),
  },
];

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={item.imgUrl} style={styles.image} />
      {/* Resto de tu componente */}
    </View>
  );
};

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layoutCardOffset={3}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
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
