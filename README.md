# react-native-style-helper

<!-- badge -->
<!-- endbadge -->

# Install

# Support
android/ios

# Quick Start
```javascript
import {StyleSheet} from "react-native";

const styles=StyleSheet.create({
	style1:{
		...padding(10),
		...margin(10)
	},
	style2:{
		...padding(10,5),
		...margin(10,5)
	},
	style3:{
		...padding(1,2,3,4),
		...margin(1,2,3,4),
		...shadow()
	}
});
```

# Methods
## padding
support three styles
* padding(all:Number)
* padding(topAndBottom:Number,leftAndRight:Number)
* padding(top:Number,right:Number,bottom:Number,left:Number)
## margin
support three styles
* margin(all:Number)
* margin(topAndBottom:Number,leftAndRight:Number)
* margin(top:Number,right:Number,bottom:Number,left:Number)
## shadow(color = "#000000", opacity = 0.2, radius = 1, offset={width:0,height:2})