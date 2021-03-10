import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import ProductListModel from "../modelClasses/ProductListModel";
import SearchParameterModel from "../modelClasses/SearchParameterModel";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

var traversalElement = new ProductListModel();
var tempArray = new Array();

function ProductSearchingTestScreen(props) {

    const [responseData, setResponseData] = useState([])

    function clearBtnHandler() {
        setResponseData([])
    }

    function flatListSerperatorComponent() {
        return(
            <View style = {{height: 1, width: "100%", backgroundColor: "#333333"}}></View>
        )
    }

    function responseHandler(jsonResponse) {
        var jsonData = jsonResponse.data;

        if(tempArray.length > 0) {
            tempArray = [];
        }

        jsonData.forEach(traversalElement => {
            tempArray.push(traversalElement);
        });

        setResponseData(tempArray);
    }

    function searchHandler(currentSearchString) {
        if(currentSearchString === null || currentSearchString === ""){
            clearBtnHandler()
        }
        else {
            var currentSearchObject = new SearchParameterModel(currentSearchString)
            console.log(currentSearchObject)

            fetch('http://10.0.3.108:3001/parts/search',{
                method: "POST",
                body: JSON.stringify(currentSearchObject),
                headers: {"Content-type": "application/json; charset=UTF-8"},
            })
            .then(response => response.json())
            .then(json => responseHandler(json))
        }
    }

    return(
        <SafeAreaView style = {styles.viewContainer}>
            <View style = {styles.searchBarContainer}>
                <TextInput 
                    placeholder = "Search for Products"
                    style = {styles.searchTextBox}
                    onChangeText = {(val) => searchHandler(val)}
                />
                <TouchableOpacity 
                    style = {styles.searchButton}
                    onPress = { clearBtnHandler }
                >
                    <MaterialIcons name = "clear" size = {30}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.productListing}>
                <FlatList 
                    data = {responseData}
                    keyExtractor = { item => item.part_id.toString() }
                    ItemSeparatorComponent = { flatListSerperatorComponent }
                    renderItem = {({item}) => 
                        <View style = { styles.individualItemContainer }>
                            <Text>{ item.part_title }</Text>
                        </View>
                    }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        bottomContainer: {
            flex: 1,
            // borderWidth: 1,
            backgroundColor: "#ffffff",
            paddingTop: 3,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#999999",
            shadowOpacity: 1,
            shadowRadius: 2,
            shadowOffset: {height: -3},
        },

        btnContainer: {
            width: 160,
            height: 40,
            borderWidth: 1,
            borderRadius: 25,
        },

        btnTextContainer: {
            textAlign: "center",
            justifyContent: "center",
            padding: 10,
        },

        individualItemContainer: {
            flex: 1,
            padding: 5,
            height: 45,
            justifyContent: "center",
        },

        productListing: {
            flex: 14,
            // borderWidth: 1,
            backgroundColor: "#ffffff",
        },

        searchBarContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "#ffffff",
            padding: 5,
        },

        searchButton: {
            flex: 1,
            borderWidth: 1,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            alignItems: "center",
            justifyContent: "center",
        },

        searchTextBox: {
            flex: 8,
            height: 43,
            borderWidth: 1,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            textAlign: "center",
        },

        viewContainer: {
            flex: 1,
            // borderWidth: 1,
            backgroundColor: "#ffffff",
        }
    }
)

export default ProductSearchingTestScreen