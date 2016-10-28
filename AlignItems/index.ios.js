/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry, View} from "react-native";

class AlignItems extends Component {
  render(){
    return(
      // Try setting 'alignItems' to 'flex-start',
      // Try setting 'justifyContent' to 'flex-end',
      // Try setting 'flexDirection' to row

      <View style = {{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent("AlignItems", () => AlignItems);
