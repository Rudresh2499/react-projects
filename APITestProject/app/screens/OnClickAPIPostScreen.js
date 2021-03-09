import React, {useState} from "react";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import TestModel from "../modelClasses/TestModel";

function OnClickAPIPostScreen({ navigation }) {

    const [userId, setUserId] = useState(null)
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)

    function clickHandler() {
        
        let tempObject = new TestModel(userId,title,body);

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(tempObject),
            headers: {"Content-type": "application/json; charset=UTF-8"},
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }

    return(
        <SafeAreaView>
            <TextInput 
                placeholder = "user ID"
                keyboardType = "numeric"
                onChangeText = {(val) => setUserId(val)}
                style = {{borderWidth: 2, height: 45,}}
            />
            <TextInput 
                placeholder = "title"
                keyboardType = "default"
                onChangeText = {(val) => setTitle(val)}
                style = {{borderWidth: 2, height: 45,}}
            />
            <TextInput 
                placeholder = "Body"
                keyboardType = "default"
                onChangeText = {(val) => setBody(val)}
                style = {{borderWidth: 2, height: 45,}}
            />
            <Button 
                onPress = {clickHandler}
                title = "See Text"
            />
        </SafeAreaView>
    )
}

export default OnClickAPIPostScreen;