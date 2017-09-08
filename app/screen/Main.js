import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback
} from "react-native";
import { StackNavigator } from "react-navigation";

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgChange: false
    };
  }
  _changeBgColor() {
    this.setState({
      bgChange: !this.state.bgChange
    });
  }
  render() {
    return (
      <View style={styles.box}>
        <TouchableNativeFeedback onPress={this._changeBgColor.bind(this)}>
          <View
            style={{
              backgroundColor: !this.state.bgChange ? "#aaa" : "transparent"
            }}
          >
            <View style={styles.borderbox}>
              <Text
                style={{
                  color: !this.state.bgChange ? "#fff" : "#000",
                  textAlign: "center",
                  fontSize: 18
                }}
              >
                111
              </Text>
            </View>
            <View style={styles.borderbox}>
              <Text style={styles.txt}>222</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this._changeBgColor.bind(this)}>
          <View
            style={{
              backgroundColor: !this.state.bgChange ? "#aaa" : "transparent"
            }}
          >
            <View style={styles.borderbox}>
              <Text
                style={{
                  color: !this.state.bgChange ? "#fff" : "#000",
                  textAlign: "center",
                  fontSize: 18
                }}
              >
                111
              </Text>
            </View>
            <View style={styles.borderbox}>
              <Text style={styles.txt}>222</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this._changeBgColor.bind(this)}>
          <View
            style={{
              backgroundColor: !this.state.bgChange ? "#aaa" : "transparent"
            }}
          >
            <View style={styles.borderbox}>
              <Text
                style={{
                  color: !this.state.bgChange ? "#fff" : "#000",
                  textAlign: "center",
                  fontSize: 18
                }}
              >
                111
              </Text>
            </View>
            <View style={styles.borderbox}>
              <Text style={styles.txt}>222</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  borderbox: {
    borderWidth: 1,
    borderColor: "#ddd",
    height: 100,
    width: 100
  },
  txt: {
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center"
  }
});
