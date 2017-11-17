import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Game from "./src/components/game";

export default class App extends Component<{}> {
  render() {
    return(
        <Game></Game>
    )
  }
}
