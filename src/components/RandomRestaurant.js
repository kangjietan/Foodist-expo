import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Rating } from 'react-native-elements';

const RandomRestaurant = ({restaurant}) => (
  <View style={styles.container}>
    <Image source={{uri: restaurant.image_url}} style={styles.image}></Image>
    <Text style={styles.name}>{restaurant.name}</Text>
    <View style={styles.ratingContainer}>
      <Rating imageSize={20} readonly startingValue={Number(restaurant.rating)} style={styles.rating} />
      <Text style={styles.misc}>{`${restaurant.review_count} Reviews`}</Text>
    </View>
    {/* <Text style={styles.misc}>{restaurant.}</Text> */}
  </View>
);

function vw(percentageWidth) {
  return Dimensions.get('window').width * (percentageWidth / 100);
}

function vh(percentageHeight) {
  return Dimensions.get('window').height * (percentageHeight / 100);
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    fontFamily: 'Roboto',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  image: {
    width: vw(100),
    height: vh(50),
  },
  name: {
    fontSize: vw(10),
  },
  misc: {
    fontSize: vw(5),
  },
  rating: {
    marginRight: 10,
  },
});

export default RandomRestaurant;
