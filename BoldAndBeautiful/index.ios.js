/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry, Text} from "react-native";

class BoldAndBeautiful extends Component {
  render(){
    return(
      <Text style = {{fontWeight: "bold"}}>
        I am bold
        <Text style = {{color: "red"}}>
          and red
        </Text>
      </Text>
    );
  }
}

AppRegistry.registerComponent("BoldAndBeautiful", () => BoldAndBeautiful);
