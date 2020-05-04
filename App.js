import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
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

  render() {
    const { render, randomRestaurant } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Text>Foodist</Text>
        {render ? <RandomRestaurant restaurant={randomRestaurant}/> : null}
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
  }
});

export default App;