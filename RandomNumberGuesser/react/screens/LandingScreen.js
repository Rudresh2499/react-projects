import React from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import InstructionResource from "../instructionsResource/instructionsResource";

function LandingScreen(props) {
    function navigationHandler() {
        props.navigation.navigate("GameScreen")
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.upperViewContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTxt}>Will you win?</Text>
                </View>
                <View style={styles.userMessageContainer}>
                    <Text style={styles.userMessageTxt}>Please read the instructions given below</Text>
                </View>
                <View style={styles.downIconWrapper}>
                    <FontAwesomeIcons name="angle-double-down" size={30} color="#333333" />
                </View>
            </View>
            <View style={styles.lowerViewContainer}>
                <View style={styles.instructionsWrapper}>
                    <FlatList
                        data={InstructionResource}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) =>
                            <View style={styles.individualItemContainer}>
                                <Text style={styles.idTxt}>{item.id}.</Text>
                                <Text style={styles.instructionTxt}>{item.instruction}</Text>
                            </View>
                        }
                        alwaysBounceVertical={false}
                    />
                </View>
                <View style={styles.btnWrapper}>
                    <TouchableOpacity
                        style={styles.navigationBtnContainer}
                        onPress={navigationHandler}
                    >
                        <Text style={styles.btnTitleText}>Start Game</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        btnTitleText: {
            fontSize: 16,
            fontWeight: "600",
            color: "#333333",
        },

        btnWrapper: {
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        },

        container: {
            flex: 1,
            backgroundColor: "#333333",
        },

        downIconWrapper: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
        },

        headerContainer: {
            flex: 2,
            alignItems: "center",
            justifyContent: "center",
        },

        headerTxt: {
            fontSize: 30,
            fontWeight: "600",
            color: "#333333",
        },

        idTxt: {
            flex: 1,
            fontSize: 16,
            color: "#ffffff",
        },

        instructionTxt: {
            flex: 13,
            fontSize: 16,
            color: "#ffffff",
            textAlign: "justify",
        },

        instructionsWrapper: {
            flex: 7,
            width: "100%",
            marginTop: 10,
        },

        individualItemContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            paddingHorizontal: 15,
        },

        lowerViewContainer: {
            flex: 3,
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
        },

        navigationBtnContainer: {
            height: "75%",
            width: "60%",
            backgroundColor: "#ffffff",
            borderRadius: 45,
            justifyContent: "center",
            alignItems: "center",
        },

        upperViewContainer: {
            flex: 1,
            backgroundColor: "#ffffff",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 3, },
        },

        userMessageContainer: {
            flex: 2,
            alignItems: "center",
            justifyContent: "center",
        },

        userMessageTxt: {
            fontSize: 18,
            fontWeight: "600",
            color: "#333333",
        }
    }
)

export default LandingScreen