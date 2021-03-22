import React from "react";
import { ImageBackground, SafeAreaView, View, Text } from "react-native";

const image = { uri: "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee" };

function TestScreen(props) {
    return(
        <ImageBackground source = {image} style = {{height: "100%", width: "100%"}} blurRadius = {10}>
            <SafeAreaView>
                <View style = {{height: "60%", width: "100%", backgroundColor: "#000000"}}></View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default TestScreen;