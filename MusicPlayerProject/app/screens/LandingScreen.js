import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TabActions, useIsFocused } from "@react-navigation/native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import TrackPlayer, { usePlaybackState, useTrackPlayerEvents } from "react-native-track-player";
import staticSongList from "../testStaticData/tempSongListData";
import TrackModelClass from "../modelClasses/TrackModelClass";

// const image = "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee"

function LandingScreen(props) {
    const [hasRunOnce, setHasRunOnce] = useState(false);
    const [id, setId] = useState("None");
    const [artwork, setArtwork] = useState("https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F750037840%2F0x0.jpg%3Ffit%3Dscale");
    const [album, setAlbum] = useState("None");
    const [artist, setArtist] = useState("None");
    const [title, setTitle] = useState("None");
    const [url, setUrl] = useState("");
    const [centerButtonName, setCenterButtonName] = useState("play")
    const isFocused = useIsFocused();
    const playbackState = usePlaybackState();

    async function trackChangeHandler() {
        var currentTrack = await TrackPlayer.getCurrentTrack();
        hookChangeHandler(currentTrack)
    }

    const stateListener = TrackPlayer.addEventListener('playback-state')
    const trackChangeListener = TrackPlayer.addEventListener('playback-track-changed', () => trackChangeHandler())

    var tempTrackObject = new TrackModelClass();

    function hookChangeHandler(currentTrack) {
        tempTrackObject = staticSongList[currentTrack - 1]
        setId(tempTrackObject.id);
        setArtwork(tempTrackObject.artwork);
        setAlbum(tempTrackObject.album);
        setArtist(tempTrackObject.artist);
        setTitle(tempTrackObject.title);
        setUrl(tempTrackObject.url);
    }

    async function paramLoadHandler() {
        if(props.route.params !== undefined && props.route.params.title !== title){
            setId(props.route.params.id)
            setArtwork(props.route.params.artwork)
            setAlbum(props.route.params.album)
            setArtist(props.route.params.artist)
            setTitle(props.route.params.title)
            setUrl(props.route.params.url)
            await TrackPlayer.skip(props.route.params.id);
            await TrackPlayer.play();
            setCenterButtonName("pausecircle")
        }
    }

    async function audioPlayerSetup() {
        await TrackPlayer.setupPlayer({
            minBuffer: 10,
            maxBuffer: 120,
            playBuffer: 10,
            waitForBuffer: true,
        });
        await TrackPlayer.updateOptions({
            stopWithApp: true,
            capabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
                TrackPlayer.CAPABILITY_PLAY_FROM_ID,
                TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
                TrackPlayer.CAPABILITY_STOP,
            ],
            compactCapabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
            ]
        })
        await TrackPlayer.add(staticSongList)
    }

    async function centerButtonClickHandler() {
        if(centerButtonName === "play"){
            setCenterButtonName("pausecircle")
            await TrackPlayer.play()
            var currentTrack = await TrackPlayer.getCurrentTrack();
            hookChangeHandler(currentTrack)
        }
        else {
            setCenterButtonName("play")
            await TrackPlayer.pause()
        }
    }

    async function previousClickHandler() {
        try{
            await TrackPlayer.skipToPrevious();
            setCenterButtonName("pausecircle");
            var currentTrack = await TrackPlayer.getCurrentTrack();
            hookChangeHandler(currentTrack)
        }
        catch(err){
            console.log(err);
        }
    }

    async function nextClickHandler() {
        try{
            await TrackPlayer.skipToNext();
            setCenterButtonName("pausecircle")
            var currentTrack = await TrackPlayer.getCurrentTrack();
            hookChangeHandler(currentTrack)
        }
        catch(err){
            console.log(err);
        }
    }

    function playlistClickHandler() {
        props.navigation.navigate("PlaylistScreen", {
            artwork: artwork,
        })
    }

    useEffect(() => {
        //TODO API request
        paramLoadHandler()
        if(hasRunOnce === false){
            audioPlayerSetup()
            setHasRunOnce(true)
        }
    }, [isFocused, playbackState])

    return(
        <ImageBackground source = {{uri: artwork}} style = {styles.backgroundImage} blurRadius = {10}>
            <ImageBackground style={{ width: "100%", height: "100%" }} imageStyle={{ backgroundColor: "#000000", opacity: 0.3 }}>
                <StatusBar barStyle="light-content" />
                <View style={styles.viewContainer}>
                    <View style={styles.cardContainer}>
                        <View style={styles.albumArtContainer}>
                            <ImageBackground source={{uri: artwork}} style={{ height: "100%", width: "100%", }} imageStyle={{ borderRadius: 15, }}></ImageBackground>
                        </View>
                        <View style={styles.playbackControlContainer}>
                            <ImageBackground style={{ width: "100%", height: "100%" }} imageStyle={{ backgroundColor: "#000000", borderRadius: 15, opacity: 0.4 }} blurRadius={20}>
                                <View style = {styles.buttonsContainer}>
                                    <TouchableOpacity style = {styles.buttonWrapper} onPress = {previousClickHandler}>
                                        <AntDesignIcons name = "stepbackward" size = {40} color = "#ffffff"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {styles.buttonWrapper} onPress = {centerButtonClickHandler}>
                                        <AntDesignIcons name = {centerButtonName} size = {40} color = "#ffffff"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {styles.buttonWrapper} onPress = {nextClickHandler}>
                                        <AntDesignIcons name = "stepforward" size = {40} color = "#ffffff" />
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.trackDetailsContainer}>
                            <ImageBackground style={{ width: "100%", height: "100%" }} imageStyle={{ backgroundColor: "#000000", borderRadius: 15, opacity: 0.4 }} blurRadius={20}>
                                <View style={styles.trackTitleContainer}>
                                    <Text style={styles.titleText}>{title}</Text>
                                </View>
                                <View style={styles.artistNameContainer}>
                                    <Text style={styles.artistText}>{artist}</Text>
                                </View>
                                <View style={styles.albumNameContainer}>
                                    <Text style={styles.albumText}>{album}</Text>
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

        buttonsContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
        },

        buttonWrapper: {
            flex: 1,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
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

        progressBarContainer:{
            flex: 1,
            // borderWidth: 2,
            // borderColor: "#ffffff",
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