/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry, View} from "react-native";

class JustifyContent extends Component {
  render(){
    return(
      // Try setting 'JustifyContent'  to 'center'
      // Try setting 'flexDirection' to 'row'
      <View style = {{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        <View style = {{width: 50, height: 50, backgroundColor: "powderblue"}} />
        <View style = {{width: 50, height: 50, backgroundColor: "skyblue"}} />
        <View style = {{width: 50, height: 50, backgroundColor: "steelblue"}} />
      </View>
    );
  }
};

AppRegistry.registerComponent("JustifyContent", () => JustifyContent);