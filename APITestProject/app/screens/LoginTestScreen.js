import React, { useState } from "react";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import LoginModel from "../modelClasses/LoginModel";

function LoginTestScreen(props) {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    function loginClickHandler() {
        
        let userLoginObject = new LoginModel(email, password)
        console.log(JSON.stringify(userLoginObject))

        fetch('http://10.0.3.108:3001/user/login', {
            method: "POST",
            body: JSON.stringify(userLoginObject),
            headers: {"Content-type": "application/json; charset=UTF-8"},
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }

    return(
        <SafeAreaView>
            <TextInput 
                placeholder = "Email"
                autoCapitalize = "none"
                onChangeText = {(val) => setEmail(val)}
                style = {{
                    borderWidth: 1,
                    padding: 5,
                    margin: 10,
                }}
            />
            <TextInput 
                placeholder = "Password"
                onChangeText = {(val) => setPassword(val)}
                style = {{
                    borderWidth: 1,
                    padding: 5,
                    margin: 10,
                }}
            />
            <Button 
                title = "Login"
                onPress = {loginClickHandler}
            />
        </SafeAreaView>
    )
}

export default LoginTestScreen;