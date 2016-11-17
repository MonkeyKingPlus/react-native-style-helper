import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
	PixelRatio,
	Dimensions,
	Image
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
	constructor(props) {
		super(props);
		this.state = {
			imageOriginalSize: {
				width: 0,
				height: 0
			},
			imageRealSize: {
				width: 0,
				height: 0
			}
		};
	}

	render() {
		return (
			<View style={styles.view}>
				<Text>Pixel Density : {PixelRatio.get()}</Text>
				<Text>Dimension : {JSON.stringify(Dimensions.get("window"))}</Text>
				<View style={{height:50,width:200,backgroundColor:"gray"}}>
					<Text>design width:200,design height:50</Text>
					<Text>width:{getResponsiveValue(200)},height:{getResponsiveValue(50)}</Text>
				</View>
				<View>
					<Text>原始图片大小{JSON.stringify(this.state.imageOriginalSize)}</Text>
					<Image
						source={require("./img/icon.png")}
						onLayout={event=>{
							this.setState(Object.assign({},this.state,{
								imageOriginalSize:{
									...event.nativeEvent.layout
								}
							}));
						}}/>
				</View>
				<View>
					<Text>实际图片大小{JSON.stringify(this.state.imageRealSize)}</Text>
					<Image
						onLayout={event=>{
							this.setState(Object.assign({},this.state,{
								imageRealSize:{
									...event.nativeEvent.layout
								}
							}));
						}}
						source={require("./img/icon.png")}
						style={{width:getResponsiveValue(29),height:getResponsiveValue(29)}}/>
				</View>
			</View>
		);
	}
}