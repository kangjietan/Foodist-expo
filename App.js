import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import searchYelp from './src/api/searchYelp.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
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
        this.setState({restaurants: businesses});
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;