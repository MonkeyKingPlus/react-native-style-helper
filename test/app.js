import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
	PixelRatio,
Dimensions
} from "react-native";
import {
	getResponsiveValue
} from "./styleHelper";

const styles = StyleSheet.create({
	view: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	text: {
		textAlign: "center"
	}
})

export default  class APP extends Component {
	render() {
		return (
			<View style={styles.view}>
				<Text>Pixel Density : {PixelRatio.get()}</Text>
				<Text>Dimension : {JSON.stringify(Dimensions.get("window"))}</Text>
				<View style={{height:50,width:200,backgroundColor:"gray"}}>
					<Text>width:200,height:50</Text>
					<Text>width:{getResponsiveValue(200)},height:{getResponsiveValue(50)}</Text>
				</View>
			</View>
		);
	}
}