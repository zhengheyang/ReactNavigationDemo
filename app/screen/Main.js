import React, { Component, PropTypes } from "react";
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableNativeFeedback,
	Button
} from "react-native";
import { StackNavigator } from "react-navigation";

export default class MainScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentValue: 0
		};
		this.data = {};
	}

	static propTypes = {};
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.box}>
					<ColorTab
						content={"this.data.content"}
						value={0}
						currentValue={this.state.currentValue}
						onPress={() => {
							this.setState({
								currentValue: 0
							});
						}}
					/>
					<ColorTab
						content={this.data.content}
						value={1}
						currentValue={this.state.currentValue}
						onPress={() => {
							this.setState({
								currentValue: 1
							});
						}}
					/>
					<ColorTab
						content={1}
						value={2}
						currentValue={this.state.currentValue}
						onPress={() => {
							this.setState({
								currentValue: 2
							});
						}}
					/>
				</View>
				<View>
					<Button title="bbb" onPress={this._test} />
				</View>
			</View>
		);
	}
}

const ColorTab = ({ content, value, currentValue, onPress }) => {
	return (
		<View style={{ height: 100 }}>
			<Text
				onPress={onPress}
				style={{ color: value === currentValue ? "red" : "blue" }}
			>
				{content}
			</Text>
		</View>
	);
};

ColorTab.defaultProps = {
	content: "aaaaaa"
};
ColorTab.propTypes = {
	content: PropTypes.string
};

const styles = StyleSheet.create({
	box: {
		backgroundColor: "#fff",
		flex: 1
	}
});
