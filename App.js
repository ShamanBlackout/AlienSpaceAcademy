import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import{withAuthenticator} from 'aws-amplify-react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

export default withAuthenticator(App , { includeGreetings:true} )
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
