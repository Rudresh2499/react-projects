import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TestModel from "../modelClasses/TestModel";

let tempObject = new TestModel()

function OnClickAPICallScreen({ navigation }) {
    
    const [isLoading, setLoading] = useState(true);
    let [testArray, setTestArray] = useState([]);

    function onPressAPICallHandler() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setTestArray(data))
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        setTimeout(onPressAPICallHandler, 5000)
    }, [])

    return(
        <SafeAreaView style = {styles.container}>
            <Button 
                title = "Populate FlatList"
                onPress = {onPressAPICallHandler}
            />
            <View style = {styles.flatListContainer}>
                <FlatList 
                    data = {testArray}
                    keyExtractor = {item => item.id.toString()}
                    renderItem = {({ item }) => 
                        <Text style = {{marginBottom: 10,}}>{item.title}</Text>
                    }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            borderWidth: 1,
        },

        flatListContainer: {
            flex: 1,
            borderWidth: 2,
            margin: 5,
        }
    }
)

export default OnClickAPICallScreen;