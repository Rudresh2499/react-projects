import React, { useState }from "react";
import { Button, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import ListingParametersModel from "../modelClasses/ListingParametersModel";
import ProductListModel from "../modelClasses/ProductListModel";

//TODO UI Changes.

let traversalElement = new ProductListModel();
let tempArray = new Array();

function ProductListingTestScreen(props) {
    const [pageSize, setPageSize] = useState(null);
    const [pageNumber, setPageNumber] = useState(null);
    const [categoryId, setCategoryId] = useState(null);
    const [responseData, setResponseData] = useState([]);

    function productNavigationHandler(productObject) {
        var tempProductObject = productObject;
        console.log(tempProductObject);
    }

    function responseHandler(jsonResponse){
        var jsonData = jsonResponse.data
        
        // To concat the Array each time the user changes search parameters
        if(tempArray.length > 0) {
            tempArray = [];
        }

        // Populating the temporary array with values from data in the form of objects
        jsonData.forEach(traversalElement => {
            tempArray.push(traversalElement)
        });

        // setting the State Array for Flatlist
        setResponseData(tempArray);
    }

    function loadParametersHandler() {
        var listingParameterModel = new ListingParametersModel(parseInt(pageSize), parseInt(pageNumber), parseInt(categoryId));

        fetch('http://10.0.3.108:3001/parts/getParts', {
            method: "POST",
            body: JSON.stringify(listingParameterModel),
            headers: {"Content-type": "application/json; charset=UTF-8"},
        })
        .then(response => response.json())
        .then(json => responseHandler(json))
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
            <View style = {{flex: 6, borderWidth: 1,}}>
                <FlatList 
                    data = {responseData}
                    keyExtractor = { item => item.part_id.toString() }
                    renderItem = {({item}) =>
                    // Each item of the Flatlist is nested inside a Touchable Opacity that can be used to navigate to the product detail screen.
                        <TouchableOpacity 
                            style = {{flex: 1, width: 300, borderRadius: 15, borderWidth: 1, padding: 10, margin: 10,}}
                            onPress = { () => productNavigationHandler(item) }
                        >
                            <Text>{item.part_title}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        </SafeAreaView>
    )
}

export default ProductListingTestScreen;