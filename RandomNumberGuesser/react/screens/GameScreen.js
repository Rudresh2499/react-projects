import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import EntypoIcons from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons";
import AntIcons from "react-native-vector-icons/AntDesign";
import { AirbnbRating } from "react-native-ratings";
import KeyboardManager from "react-native-keyboard-manager";
import Modal from "react-native-modal";
import InstructionResource from "../instructionsResource/instructionsResource";

if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setKeyboardDistanceFromTextField(20);
    KeyboardManager.setToolbarDoneBarButtonItemText("Done");
    KeyboardManager.setShouldResignOnTouchOutside(true);
}

var visibilityFlag = false;

function GameScreen(props) {
    const [generatedNumber, setGeneratedNumber] = useState(null);
    const [hintValue, setHintValue] = useState(null);
    const [firstLucky, setFirstLucky] = useState(null);
    const [secondLucky, setSecondLucky] = useState(null);
    const [thirdLucky, setThirdLucky] = useState(null);
    const [userGuess, setUserGuess] = useState(null);
    const [userLife, setUserLife] = useState(5);
    const [areRulesVisible, setAreRulesVisible] = useState(false);
    const isFocused = useIsFocused();

    function toggleRulesContainer() {
        visibilityFlag = !visibilityFlag;
        setAreRulesVisible(visibilityFlag)
    }

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => toggleRulesContainer()}
                >
                    <AntIcons name="infocirlceo" size={30} color="#ffffff" style={{ marginRight: 20, }} />
                </TouchableOpacity>
            ),
        });
    }, [props.navigation]);

    function HintElement() {
        return (
            <Text style={styles.generatedNumberTxt}>{hintValue}</Text>
        )
    }

    function IconElement() {
        return (
            <Ionicons name="help-outline" size={100} color="#333333" />
        )
    }

    function checkLives(leftLives) {
        if (leftLives <= 0) {
            Alert.alert(
                "Game Over",
                "Your luck sucks. The generated number was: " + generatedNumber + ". Start a new game to get defeated again.",
                [
                    {
                        text: "Restart",
                        onPress: () => restartHandler()
                    }
                ]
            )
        }
    }

    function continueHandler() {
        generateNumber();
        setUserGuess(null);
        setHintValue(null);
    }

    function hintShowHandler() {
        var choice = Math.floor((Math.random() * 2) + 1);
        if (userLife <= 3) {
            Alert.alert(
                "Not enough lives",
                "Too afraid to guess? You wont be able to guess the number if lives become 0",
                [
                    {
                        text: "Continue Guessing",
                    }
                ]
            )
        }
        else {
            var hintDigit;
            if (choice === 1) {
                hintDigit = generatedNumber / 10
                if (userLife > 0) {
                    var tempLife = userLife - 3;
                    setUserLife(tempLife)
                    checkLives(tempLife)
                }
            }
            else {
                hintDigit = generatedNumber % 10
                if (userLife > 0) {
                    var tempLife = userLife - 3;
                    setUserLife(tempLife)
                    checkLives(tempLife)
                }
            }
            setHintValue(parseInt(hintDigit))
        }
    }

    function restartHandler() {
        setUserGuess(null);
        setHintValue(null);
        setUserLife(5);
        generateNumber();
    }

    function clrBtnHandler() {
        setUserGuess(null);
    }

    function guessHandler(passedNumber) {
        setUserGuess(null)
        if (parseInt(passedNumber) === generatedNumber) {
            Alert.alert(
                "How did you win!",
                "The generated number was " + generatedNumber + "! But you were not supposed to win. Let's see if your luck is still with you.",
                [
                    {
                        text: "Continue Game",
                        onPress: () => continueHandler(),
                    },
                    {
                        text: "Restart Game",
                        onPress: () => restartHandler(),
                    }
                ]
            )
        }
        else {
            regenerateLuckyBoxes()
            if (userLife > 0) {
                var tempLife = userLife - 1
                setUserLife(tempLife)
                checkLives(tempLife)
            }
        }
    }

    function regenerateLuckyBoxes() {
        tempNumber = Math.floor((Math.random() * 50) + 1);
        setFirstLucky(tempNumber)
        tempNumber = Math.floor((Math.random() * 50) + 1);
        setSecondLucky(tempNumber)
        tempNumber = Math.floor((Math.random() * 50) + 1);
        setThirdLucky(tempNumber)
    }

    function generateNumber() {
        var tempNumber = Math.floor((Math.random() * 50) + 1);
        setGeneratedNumber(tempNumber)
        tempNumber = Math.floor((Math.random() * 50) + 1);
        setFirstLucky(tempNumber)
        tempNumber = Math.floor((Math.random() * 50) + 1);
        setSecondLucky(tempNumber)
        tempNumber = Math.floor((Math.random() * 50) + 1);
        setThirdLucky(tempNumber)
    }

    useEffect(() => {
        generateNumber()
    }, [isFocused])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Modal
                isVisible={areRulesVisible}
                onBackdropPress={() => toggleRulesContainer()}
                style={styles.modalStyle}
                coverScreen={false}
            >
                <Text style={styles.modalHeader}>Instructions</Text>
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
                <TouchableOpacity
                    style={styles.modalButtonContainer}
                    onPress={() => toggleRulesContainer()}
                >
                    <Text style={styles.modalButtonTxt}>Got It</Text>
                </TouchableOpacity>
            </Modal>
            <View style={styles.upperViewContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTxt}>Will you win?</Text>
                </View>
                <TouchableOpacity
                    style={styles.generatedNumberContainer}
                    onPress={hintShowHandler}
                >
                    {
                        hintValue !== null ? <Text style={styles.generatedNumberTxt}>{hintValue}</Text> : <Ionicons name="help-outline" size={100} color="#333333" />
                    }
                </TouchableOpacity>
                <View style={styles.livesContainer}>
                    <AirbnbRating
                        count={userLife}
                        defaultRating={5}
                        size={30}
                        showRating={false}
                        isDisabled={true}
                        selectedColor="#ffffff"
                        unSelectedColor="transparent"
                        starContainerStyle={{ width: "90%", justifyContent: "space-evenly" }}
                    />
                </View>
            </View>
            <View style={styles.lowerViewContainer}>
                <View style={styles.userInputContainer}>
                    <TextInput
                        style={styles.userTxtInput}
                        placeholder="Enter your guess for the number"
                        value={userGuess}
                        keyboardType="numeric"
                        onChangeText={(val) => { setUserGuess(val) }}
                    />
                    {
                        userGuess ?
                            <TouchableOpacity
                                style={styles.textClrBtnContainer}
                                onPress={clrBtnHandler}
                            >
                                <EntypoIcons name="circle-with-cross" size={30} color="#333333" />
                            </TouchableOpacity>
                            : null
                    }
                </View>
                <View style={styles.luckyBoxContainer}>
                    <TouchableOpacity
                        style={styles.luckyNumberContainer}
                        onPress={() => guessHandler(firstLucky)}
                    >
                        <Text style={styles.luckyNumberTxt}>{firstLucky}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.luckyNumberContainer}
                        onPress={() => guessHandler(secondLucky)}
                    >
                        <Text style={styles.luckyNumberTxt}>{secondLucky}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.luckyNumberContainer}
                        onPress={() => guessHandler(thirdLucky)}
                    >
                        <Text style={styles.luckyNumberTxt}>{thirdLucky}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.submitBtnContainer}
                        onPress={() => { guessHandler(userGuess) }}
                    >
                        <Text style={styles.submitTitleContainer}>Make a guess</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.clrBtnContainer}
                        onPress={
                            () => Alert.alert(
                                "Restart game",
                                "I know you can not win this round but are you sure you want to start a new game?",
                                [
                                    {
                                        text: "Yes",
                                        onPress: () => restartHandler(),
                                    },
                                    {
                                        text: "No",
                                    }
                                ]
                            )
                        }
                    >
                        <Text style={styles.clrTitleContainer}>Restart Game</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create(
    {
        btnContainer: {
            flex: 1,
            flexDirection: "row",
            width: "100%",
            marginTop: "3%",
            // borderWidth: 1,
        },

        clrBtnContainer: {
            height: "65%",
            width: "45%",
            backgroundColor: "#ffffff",
            borderWidth: 2,
            borderRadius: 25,
            borderColor: "#333333",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "3%",
        },

        clrTitleContainer: {
            fontSize: 15,
            fontWeight: "600",
        },

        container: {
            flex: 1,
            backgroundColor: "#ffffff",
            paddingBottom: 10,
            // borderWidth: 10,
        },

        generatedNumberContainer: {
            width: "37%",
            height: "40%",
            backgroundColor: "#ffffff",
            // borderWidth: 1,
            borderRadius: 75,
            alignItems: "center",
            justifyContent: "center",
            marginTop: "7%",
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 5,
            shadowOffset: { height: 1, }
        },

        generatedNumberTxt: {
            fontSize: 40,
            fontWeight: "600",
            color: "#333333",
        },

        headerContainer: {
            height: "15%",
            width: "95%",
            justifyContent: "center",
            alignItems: "center",
            // borderWidth: 1,
        },

        headerTxt: {
            fontSize: 30,
            fontWeight: "600",
            color: "#ffffff",
        },

        idTxt: {
            flex: 1,
            fontSize: 16,
            fontWeight: "600",
            color: "#ffffff",
        },

        individualItemContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            paddingHorizontal: 10,
            paddingVertical: 5,
        },

        instructionTxt: {
            flex: 11,
            fontSize: 16,
            fontWeight: "600",
            color: "#ffffff",
            textAlign: "justify",
        },

        livesContainer: {
            height: "15%",
            width: "90%",
            borderWidth: 2,
            borderColor: "#ffffff",
            borderRadius: 25,
            marginTop: "12%",
            justifyContent: "center",
            alignItems: "center",
        },

        lowerViewContainer: {
            flex: 1,
            backgroundColor: "transparent",
            // borderWidth: 2,
            alignItems: "center",
        },

        luckyBoxContainer: {
            flex: 2,
            flexDirection: "row",
            width: "95%",
            backgroundColor: "transparent",
            // borderWidth: 1,
            padding: 5,
            marginTop: "5%",
            justifyContent: "center",
            alignItems: "center"
        },

        luckyNumberContainer: {
            width: "30%",
            height: "75%",
            // borderWidth: 1,
            borderRadius: 100,
            backgroundColor: "#333333",
            alignItems: "center",
            justifyContent: "center",
            margin: 5,
        },

        luckyNumberTxt: {
            fontSize: 30,
            fontWeight: "600",
            color: "#ffffff",
        },

        modalButtonContainer: {
            width: "60%",
            backgroundColor: "#ffffff",
            borderRadius: 25,
            alignSelf: "center",
            padding: 8,
            marginBottom: 5,
            justifyContent: "center",
            alignItems: "center",
        },

        modalButtonTxt: {
            fontSize: 18,
            fontWeight: "600",
            color: "#333333",
        },

        modalHeader: {
            fontSize: 20,
            fontWeight: "600",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: 10,
        },

        modalStyle: {
            backgroundColor: "#333333",
            borderRadius: 25,
            padding: 10,
            justifyContent: "flex-end",
            borderWidth: 5,
            borderColor: "#ffffff",
        },

        submitBtnContainer: {
            height: "65%",
            width: "45%",
            backgroundColor: "#333333",
            borderRadius: 25,
            // borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "4%",
        },

        submitTitleContainer: {
            fontSize: 15,
            fontWeight: "600",
            color: "#ffffff",
        },

        textClrBtnContainer: {
            flex: 1,
            // borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
        },

        upperViewContainer: {
            flex: 1,
            alignItems: "center",
            backgroundColor: "#333333",
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            shadowColor: "#555555",
            shadowOpacity: 1,
            shadowRadius: 5,
            shadowOffset: { height: 4, },
        },

        userInputContainer: {
            width: "95%",
            height: "15%",
            flexDirection: "row",
            backgroundColor: "#ffffff",
            borderWidth: 2,
            borderColor: "#333333",
            borderRadius: 25,
            marginTop: "10%",
            padding: 5,
            justifyContent: "center",
        },

        userTxtInput: {
            flex: 7,
            padding: 10,
            textAlign: "center",
            fontSize: 16,
        },
    }
)

export default GameScreen