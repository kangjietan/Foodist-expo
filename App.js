import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import RandomRestaurant from './src/components/RandomRestaurant';
import searchYelp from './src/api/searchYelp';
import Helpers from './src/helpers/Helpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      randomRestaurant: {},
      render: false,
    }

    this.rollNewRestaurant = this.rollNewRestaurant.bind(this);
    this.rollByUserLocation = this.rollByUserLocation.bind(this);
  }

  componentDidMount() {
    const query = {
      location: 'San Francisco',
      term: 'Food',
      limit: 50,
    };

    searchYelp(query)
      .then((response) => {
        const { businesses } = response.data;
        const randomInt = Helpers.randomInt(0, businesses.length - 1);
        this.setState({restaurants: businesses, randomRestaurant: businesses[randomInt], render: true});
      });
  }

  rollNewRestaurant() {
    const { restaurants } = this.state;
    const idx = Helpers.randomInt(0, restaurants.length - 1);

    this.setState({ randomRestaurant: restaurants[idx] });
  }

  rollByUserLocation() {
    Helpers.getUserLocation()
      .then((coords) => {
        const params = { latitude: coords[0], longitude: coords[1], location: 'San Francisco', term: 'food', limit: 50 };
        searchYelp(params)
          .then((response) => {
            const { businesses } = response.data;
            const randomInt = Helpers.randomInt(0, businesses.length - 1);
            this.setState({restaurants: businesses, randomRestaurant: businesses[randomInt], render: true});
          })
      })
  }

  render() {
    const { render, randomRestaurant } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Button title="Search By Your Location" style={styles.button} onPress={this.rollByUserLocation} />
        {render ? <RandomRestaurant restaurant={randomRestaurant} roll={this.rollNewRestaurant} /> : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  button: {
    marginBottom: 10,
  },
});

export default App;