import React from "react";
import { useState } from "react";
import { Button, FlatList, Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import staticSongList from "../testStaticData/tempSongListData";

function PlaylistScreen(props) {
    const {artwork} = props.route.params
    // var [imageUrl, setImageUrl] = useState(null)

    function goBackHandler() {
        props.navigation.goBack()
    }

    function songPressHandler(pressedSong){
        // console.log(pressedSong)

        props.navigation.navigate("LandingScreen", {
            id: pressedSong.id,
            artwork: pressedSong.artwork,
            album: pressedSong.album,
            artist: pressedSong.artist,
            title: pressedSong.title,
            url: pressedSong.url
        })
    }

    return(
        <ImageBackground source={{uri: artwork}} style={{ width: "100%", height: "100%" }} blurRadius={10}>
            <ImageBackground style={{ width: "100%", height: "100%" }} imageStyle={{ backgroundColor: "#000000", opacity: 0.3 }}>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <View style={styles.viewContainer}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity
                                style={styles.backButtonContainer}
                                onPress={goBackHandler}
                            >
                                <FontAwesomeIcon name="angle-double-down" size={35} color="#ffffff" />
                            </TouchableOpacity>
                            <View style={styles.titleHolder}>
                                <Text style={styles.titleText}>Playlist</Text>
                            </View>
                            <View style={styles.spacerComponent}></View>
                        </View>
                        <View style={styles.listContainer}>
                            <FlatList 
                                data = {staticSongList}
                                keyExtractor = { item => item.id }
                                renderItem = {({item, index}) => 
                                    <View style={styles.individualItemContainer}>
                                        <TouchableOpacity 
                                            style={styles.songDetailContainer}
                                            onPress = {() => songPressHandler(item)}
                                        >
                                            <View style={styles.coverImageContainer}>
                                                <ImageBackground source={{ uri: item.artwork }} style={{ height: "100%", width: "100%" }} imageStyle={{ borderRadius: 15, }}></ImageBackground>
                                            </View>
                                            <View style={styles.textDataWrapper}>
                                                <ImageBackground style={{ width: "100%", height: "100%", borderRadius: 15, borderWidth: 2, borderColor: "#ffffff" }} imageStyle={{ backgroundColor: "#000000", opacity: 0.4, borderRadius: 15, }}>
                                                    <View style={styles.songTitleContainer}>
                                                        <Text style = {styles.songTitleText}>{item.title}</Text>
                                                    </View>
                                                    <View style={styles.artistNameContainer}>
                                                        <Text style = {styles.artistNameText}>{item.artist}</Text>
                                                    </View>
                                                </ImageBackground>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                }
                                style = {{padding: 5,}}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </ImageBackground>
    )
}

const styles = StyleSheet.create(
    {
        artistNameContainer: {
            flex: 1,
            // borderWidth: 1,
            justifyContent: "flex-start",
            paddingLeft: 10,
            marginTop: 3,
        },

        artistNameText: {
            fontSize: 12,
            color: "#ffffff",
        },

        backButtonContainer: {
            flex: 1,
            height: "100%",
            // borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
        },

        container: {
            flex: 1,
            backgroundColor: "transparent",
            // borderWidth: 1,
        },

        coverImageContainer: {
            flex: 1,
            // borderWidth: 1,
            borderRadius: 15,
        },

        headerContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "transparent",
            // borderWidth: 1,
        },

        individualItemContainer: {
            flex: 1,
            height: 80,
            margin: 5,
            // borderWidth: 1,
            borderRadius: 15,
            backgroundColor: "transparent",
        },

        listContainer: {
            flex: 15,
            // borderWidth: 1,
        },

        songDetailContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 5,
        },

        songTitleContainer: {
            flex: 1,
            // borderWidth: 1,
            justifyContent: "flex-end",
            paddingLeft: 10,
        },

        songTitleText: {
            fontSize: 18,
            fontWeight: "600",
            color: "#ffffff",
        },

        spacerComponent: {
            flex: 1,
            // borderWidth: 1,
            height: "100%",
        },

        textDataWrapper: {
            flex: 4,
            paddingLeft: 10,
            // borderWidth: 1,
        },

        titleHolder: {
            flex: 6,
            height: "100%",
            // borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
        },

        titleText: {
            fontSize: 18,
            fontWeight: "600",
            color: "#ffffff",
        },

        viewContainer: {
            flex: 1,
            backgroundColor: "transparent",
            // borderWidth: 1,
        }
    }
)

export default PlaylistScreen;