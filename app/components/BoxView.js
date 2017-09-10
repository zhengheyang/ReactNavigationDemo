import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";

export default class BoxView extends Component {
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

		console.log(this.props.name);
	}
	render() {
		return (
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
							{this.props.topline}
						</Text>
					</View>
					<View style={styles.borderbox}>
						<Text
							style={{
								color: !this.state.bgChange ? "#fff" : "#000",
								textAlign: "center",
								fontSize: 18
							}}
						>
							{this.props.bottomline}
						</Text>
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}
}
const styles = StyleSheet.create({
	borderbox: {
		borderWidth: 1,
		borderColor: "#ddd",
		height: 100,
		width: 100
	}
});
