import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const RandomRestaurant = ({restaurant}) => (
  <View>
    <Image source={{uri: restaurant.image_url}} style={styles.image}></Image>
  </View>
);

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: 50,
    height: 50,
  }
});

export default RandomRestaurant;
