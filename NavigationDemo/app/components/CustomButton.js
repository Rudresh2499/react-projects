import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ onBtnClicked, title, marginRight, marginTop, marginLeft, marginBottom, width, height, backgroundColor, borderColor, borderWidth, textColor }) => (
    <TouchableOpacity activeOpacity = {0.7} onPress = {onBtnClicked} style = {{
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginTop: marginTop,
        marginRight: marginRight,
        marginLeft: marginLeft,
        marginBottom: marginBottom,
        borderWidth: borderWidth,
        borderColor: borderColor,
    }}>
        <Text style = {{
            color: textColor,
            fontWeight: "500",
            fontSize: 16,
        }}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create(
    {
        txtContainer: {
            color: "#ffffff",
            fontWeight: "500",
            fontSize: 16,
        }
    }
)

export default CustomButton