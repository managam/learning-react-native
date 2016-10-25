/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import {AppRegistry, Image} from 'react-native';

// export default class Props extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}}/>
//     );
//   }
// }

import {AppRegistry, Text, View} from 'react-native';

class Greeting extends Component {
  render(){
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Props extends Component {
  render(){
    return (
      <View style={{alignItems: "center"}}>
        <Greeting name = "Managam" />
        <Greeting name = "Raja" />
        <Greeting name = "Silalahi" />
      </View>
    );
  }
}

AppRegistry.registerComponent('Props', () => Props);
