import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "url('./images/background_genesis.jpg')",
        "backgroundSize": "cover",
        "backgroundAttachment": "fixed",
        "backgroundRepeat": "no-repeat"
    },
    "custom-container": {
        "color": "white",
        "maxWidth": 600,
        "backgroundColor": "transparent",
        "verticalAlign": "middle",
        "marginTop": "10%",
        "borderRadius": 10,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "custom-container h1": {
        "fontSize": 28,
        "fontFamily": "'Jura', sans-serif",
        "paddingBottom": 20,
        "textTransform": "uppercase",
        "lineHeight": 40
    },
    "custom-container form": {
        "fontFamily": "'Jura', sans-serif",
        "fontSize": 15,
        "textTransform": "uppercase",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "border": "solid 2px rgb(247, 247, 247)",
        "borderRadius": 6
    },
    "custom-container form btn": {
        "marginTop": 10,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "width": "100%"
    },
    "custom-container form error-input": {
        "border": "solid 2px red"
    }
});