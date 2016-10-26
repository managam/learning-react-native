/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry, Text, View} from "react-native";

class BlueIsCool extends Component {
  render(){
    return(
      <Text>
        There is a blue square
        <View style = {{width: 50, height: 50, backgroundColor: "steelblue"}} />
        in between my text.
      </Text>
    );
  }
}

AppRegistry.registerComponent("BlueIsCool", () => BlueIsCool);
