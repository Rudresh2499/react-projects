import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Fontisto from "react-native-vector-icons/Fontisto"
import Ionicons from "react-native-vector-icons/Ionicons";

// const image = "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee"

function LandingScreen(props) {
    const [albumCover, setAlbumCover] = useState("https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee");
    const [albumName, setAlbumName] = useState("Cut to the feeling");
    const [artistName, setArtistName] = useState("Carly Rae Jepsen");
    const [songName, setSongName] = useState("Cut to the feeling")
    const isFocused = useIsFocused();

    function paramLoadHandler() {
        if(props.route.params !== undefined){
            // console.log(props.route.params.image);
            setAlbumCover(props.route.params.albumCover)
            setAlbumName(props.route.params.albumName)
            setArtistName(props.route.params.artistName)
            setSongName(props.route.params.songName)
        }
    }

    useEffect(() => {
        paramLoadHandler()
    }, [isFocused])

    function playlistClickHandler() {
        props.navigation.navigate("PlaylistScreen", {
            albumCover: albumCover,
        })
    }

    return(
        <ImageBackground source = {{uri: albumCover}} style = {styles.backgroundImage} blurRadius = {10}>
            <ImageBackground style={{ width: "100%", height: "100%" }} imageStyle={{ backgroundColor: "#000000", opacity: 0.3 }}>
                <StatusBar barStyle="light-content" />
                <View style={styles.viewContainer}>
                    <View style={styles.cardContainer}>
                        <View style={styles.albumArtContainer}>
                            <ImageBackground source={{uri: albumCover}} style={{ height: "100%", width: "100%", }} imageStyle={{ borderRadius: 15, }}></ImageBackground>
                        </View>
                        <View style={styles.playbackControlContainer}>
                            <ImageBackground style={{ width: "100%", height: "100%" }} imageStyle={{ backgroundColor: "#000000", borderRadius: 15, opacity: 0.4 }} blurRadius={20}></ImageBackground>
                        </View>
                        <View style={styles.trackDetailsContainer}>
                            <ImageBackground style={{ width: "100%", height: "100%" }} imageStyle={{ backgroundColor: "#000000", borderRadius: 15, opacity: 0.4 }} blurRadius={20}>
                                <View style={styles.trackTitleContainer}>
                                    <Text style={styles.titleText}>{songName}</Text>
                                </View>
                                <View style={styles.artistNameContainer}>
                                    <Text style={styles.artistText}>{artistName}</Text>
                                </View>
                                <View style={styles.albumNameContainer}>
                                    <Text style={styles.albumText}>{albumName}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style = {styles.bottomMenuContainer}>
                        <TouchableOpacity 
                            style = {styles.playlistContainer}
                            onPress = {playlistClickHandler}
                        >
                            <Fontisto name = "play-list" size = {20} color = "#ffffff"/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style = {styles.shuffleContainer}
                        >
                            <Ionicons name = "ios-shuffle" size = {35} color = "#ffffff"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </ImageBackground>
    )
}

const styles = StyleSheet.create(
    {
        albumArtContainer: {
            flex: 3,
            width: "100%",
            borderWidth: 2,
            borderColor: "#ffffff",
            borderRadius: 17,
        },

        albumNameContainer: {
            flex: 1,
            height: "100%",
            // borderWidth: 1,
            paddingTop: 5,
            paddingLeft: 20,
        },
        albumText: {
            fontSize: 14,
            color: "#ffffff",
        },

        artistNameContainer: {
            flex: 1,
            height: "100%",
            // borderWidth: 1,
            paddingTop: 10,
            paddingLeft: 20,
        },

        artistText: {
            fontSize: 18,
            color: "#ffffff",
        },

        backgroundImage: {
            width: "100%",
            height: "100%",
        },

        bottomMenuContainer: {
            height: "5%",
            width: "100%",
            // borderWidth: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            paddingLeft: 15,
            paddingRight: 15,
        },

        container: {
            flex: 1,
            backgroundColor: "#ffffff",
        },

        cardContainer: {
            width: "80%",
            height: "70%",
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            marginTop: 100,
            marginBottom: 15,
        },

        playbackControlContainer: {
            flex: 1,
            width: "100%",
            borderWidth: 2,
            borderColor: "#ffffff",
            borderRadius: 15,
            marginTop: 5,
            marginBottom: 5,
        },

        playerHeader: {
            width: "100%",
            height: "10%",
            backgroundColor: "#000000",
            opacity: 0.5,
            paddingTop: 50,
            justifyContent: "center",
            alignItems: "center",
        },

        playlistContainer: {
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
        },

        shuffleContainer: {
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center",
        },

        titleText: {
            fontSize: 26,
            color: "#ffffff",
        },

        trackDetailsContainer: {
            flex: 1,
            width: "100%",
            borderWidth: 2,
            borderColor: "#ffffff",
            borderRadius: 15,
        },

        trackTitleContainer: {
            flex: 1,
            width: "100%",
            justifyContent: "center",
            paddingTop: 5,
            paddingLeft: 20,
            // borderWidth: 1,
        },

        viewContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    }
)

export default LandingScreen;