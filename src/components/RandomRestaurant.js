import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Rating, Button } from 'react-native-elements';

const RandomRestaurant = ({restaurant, roll}) => (
  <View style={styles.container}>
    <Image source={{uri: restaurant.image_url}} style={styles.image}></Image>
    <Text style={styles.name}>{restaurant.name}</Text>
    <View style={styles.ratingContainer}>
      <Rating type='custom' imageSize={20} readonly startingValue={Number(restaurant.rating)} style={styles.rating} ratingColor='#FF0000' />
      <Text style={styles.misc}>{`${restaurant.review_count} Reviews`}</Text>
    </View>
    <Text style={styles.misc}>{restaurant.location.display_address[0] || 'No main address'}</Text>
    <Text style={styles.misc}>{restaurant.location.display_address[1]}</Text>
    <Text style={styles.misc}>{restaurant.display_phone || 'No phone number'}</Text>
    <Text style={styles.misc}>{restaurant.price || 'No pricing'}</Text>
    <Button title="Roll" style={styles.button} onPress={roll}/>
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
    fontSize: vh(3),
    fontWeight: "700",
  },
  misc: {
    fontSize: vw(5),
  },
  rating: {
    marginRight: 10,
  },
  button: {
    marginTop: 10,
    width: vw(20),
  },
});

export default RandomRestaurant;
