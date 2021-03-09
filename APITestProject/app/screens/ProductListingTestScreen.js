import React, { useState }from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import ListingParametersModel from "../modelClasses/ListingParametersModel";

function ProductListingTestScreen(props) {
    const [pageSize, setPageSize] = useState(null);
    const [pageNumber, setPageNumber] = useState(null);
    const [categoryId, setCategoryId] = useState(null);

    function loadParametersHandler() {
        var listingParameterModel = new ListingParametersModel(parseInt(pageSize), parseInt(pageNumber), parseInt(categoryId));
        console.log(listingParameterModel)
        console.log(JSON.stringify(listingParameterModel))

        fetch('http://10.0.3.108:3001/parts/getParts', {
            method: "GET",
            body: JSON.stringify(listingParameterModel),
            headers: {"Content-type": "application/json; charset=UTF-8"},
        })
        .then(response => console.log(response))
    }

    return(
        <SafeAreaView style = {{flex: 1,}}>
            <View style = {{flex: 2}}>
                <TextInput
                    placeholder = "Page Size"
                    style = {{borderWidth: 1, padding: 5, margin: 5}}
                    onChangeText = {(val) => setPageSize(val)}
                />
                <TextInput
                    placeholder = "Page Number"
                    style = {{borderWidth: 1, padding: 5, margin: 5}}
                    onChangeText = {(val) => setPageNumber(val)}
                />
                <TextInput
                    placeholder = "Category Id"
                    style = {{borderWidth: 1, padding: 5, margin: 5}}
                    onChangeText = {(val) => setCategoryId(val)}
                />
                <Button 
                    title = "Load Parameters"
                    onPress = { loadParametersHandler }
                />
            </View>
            <View style = {{flex: 4, borderWidth: 1,}}>
            </View>
        </SafeAreaView>
    )
}

export default ProductListingTestScreen;