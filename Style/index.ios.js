/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react"
import {AppRegistry, StyleSheet, Text, View} from "react-native";

class Style extends Component {
  render(){
    return(
      <View>
        <Text style = {styles.red}>Just red</Text>
        <Text style = {styles.bigBlue}>Just bigblue</Text>
        <Text style = {[styles.bigBlue, styles.red]}>Bigblue, then red</Text>
        <Text style = {[styles.red, styles.bigBlue]}>Red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red"
  }
});

AppRegistry.registerComponent('Style', () => Style);
