import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
// import Search from './Components/Search'
import Navigation from './Navigation/Navigation'

export default class App extends React.Component {

  render() {
    return (
      <Navigation/>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
