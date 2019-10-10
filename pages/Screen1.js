//ThisisanexamplecodeforNavigationDrawer//
import React, {Component} from 'react';
//importreactinourcode.
import {StyleSheet, View, Text} from 'react-native';
//importallbasiccomponents
import {NavigationDrawerStructure} from './NavBar';

export default class Screen1 extends Component {
  //Screen1Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}>Screen1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
